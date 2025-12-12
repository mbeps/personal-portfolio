import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import processMarkdownImages from "@/lib/processMarkdownImages";
import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";
import MaterialList from "@/components/material-lists/MaterialList";
import SpecialReader from "@/components/reader/SpecialReader";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import SkillTableCell from "@/components/skills/SkillTableSection";
import developerName from "@/constants/developerName";
import { BLOG_PAGE, PROJECTS_PAGE } from "@/constants/pages";
import BlogInterface from "@/database/blogs/BlogInterface";
import blogsDatabaseMap from "@/database/blogs/BlogsDatabaseMap";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import BlogCategoriesEnum from "@/enums/blog/BlogCategoriesEnum";
import ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/ListOfCategorisedSkillsByTypeInterface";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ blogKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * Builds metadata for a blog detail route so the slug, subtitle, and category surface in the head tags.
 * Blog keys map to folders under `public/blogs/{blogKey}` or `public/projects/{blogKey}` when the article is a project write-up.
 *
 * @param props Params promise provided by Next.
 * @param parent Parent metadata from the layout chain.
 * @returns Metadata derived from the blog entry.
 */
export async function generateMetadata(
  props: { params: Params; searchParams: SearchParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const blogKey: string = params.blogKey;
  const blog: BlogInterface = blogsDatabaseMap[blogKey];

  if (!blog) {
    notFound();
  }

  return {
    title: `${developerName} - Blogs: ${blog?.name}`,
    description: blog?.subtitle,
    category: `${BLOG_PAGE.label}`,
    creator: developerName,
  };
}

/**
 * Provides every blog key for static generation so markdown files under `public/blogs/{key}` or project folders become routable articles.
 *
 * @returns Params for each blog detail route.
 */
export const generateStaticParams = async () => {
  return Object.keys(blogsDatabaseMap).map((blogKey) => ({
    blogKey,
  }));
};

/**
 * Renders a single blog post via the shared markdown pipeline, pairing the Reader with skill tables and related materials.
 * Handles both standalone blogs and project write-ups by rewriting `{BASE}` image placeholders to the correct public path.
 *
 * @param params Dynamic route param carrying the blog slug.
 * @returns Blog article view with skills and related material tabs.
 */
const BlogPage: React.FC<{ params: Params }> = async ({ params }) => {
  const resolvedParams = await params;
  const blogKey: string = resolvedParams.blogKey;
  const basePath: string = BLOG_PAGE.path;
  const blogData: BlogInterface = blogsDatabaseMap[blogKey];

  if (!blogData) {
    notFound();
  }

  // Determine the path to the blog markdown file
  // For project blogs, use the projects path, otherwise use the blogs path
  const isProjectBlog =
    blogData.category === BlogCategoriesEnum.Projects ||
    Object.values(ProjectDatabaseKeys).includes(blogKey as ProjectDatabaseKeys);
  const blogPath = isProjectBlog
    ? `public${PROJECTS_PAGE.path}/${blogKey}/blog.md`
    : `public${basePath}/${blogKey}/blog.md`;

  const blogContent: string | undefined =
    getMarkdownFromFileSystem(blogPath)?.content;

  if (!blogContent) {
    notFound();
  }

  // Replace base path placeholder with actual path for images
  const imagePath = isProjectBlog
    ? `${PROJECTS_PAGE.path}/${blogKey}/img`
    : `${basePath}/${blogKey}/img`;
  const processedBlogContent: string = processMarkdownImages(
    blogContent,
    imagePath
  );

  const allGroupedSkills: ListOfCategorisedSkillsByTypeInterface[] =
    buildSkillTableGroups(blogData.skills);

  return (
    <main>
      <div>
        <div className="text-center">
          {/* Title */}
          <h2>{blogData?.name}</h2>

          {/* Description */}
          <h3 className="text-neutral-600 dark:text-neutral-400 mb-12">
            {blogData?.subtitle}
          </h3>
        </div>

        <SpecialReader
          content={processedBlogContent}
          previousPagePath={BLOG_PAGE.path}
          previousPageName={BLOG_PAGE.label}
        />

        <div className="mt-10 material-sections-wrapper">
          {/* Skills */}
          <Card>
            <CardContent className="py-7">
              <SkillTableCell allGroupedSkills={allGroupedSkills} />
            </CardContent>
          </Card>

          {/* Related Materials */}
          {blogData.relatedMaterials &&
            blogData.relatedMaterials.length > 0 && (
              <>
                <MaterialList materialKeys={blogData.relatedMaterials} />
              </>
            )}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
