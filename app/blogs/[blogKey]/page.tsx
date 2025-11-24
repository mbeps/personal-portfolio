import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import processMarkdownImages from "@/actions/processMarkdownImages";
import buildSkillTableGroups from "@/actions/skills/group/buildSkillTableGroups";
import MaterialList from "@/components/MaterialLists/MaterialList";
import SpecialReader from "@/components/Reader/SpecialReader";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import developerName from "@/constants/developerName";
import { BLOG_PAGE } from "@/constants/pages";
import BlogInterface from "@/database/Blogs/BlogInterface";
import blogsDatabaseMap from "@/database/Blogs/BlogsDatabaseMap";
import ProjectDatabaseKeys from "@/database/Projects/ProjectDatabaseKeys";
import BlogCategoriesEnum from "@/enums/Blog/BlogCategoriesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ blogKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * Generates the metadata for the blog page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the blog page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
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
 * Generates the metadata for the blogs page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the blogs page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const generateStaticParams = async () => {
  return Object.keys(blogsDatabaseMap).map((blogKey) => ({
    blogKey,
  }));
};

/**
 * Page displaying the rendered markdown which can be read by the user.
 * The page also displays:
 * - The skills covered in the blog
 * - Related materials
 *
 * @param props The props for the blog page
 * @returns Content of the blog and the skills used
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
    blogData.category === BlogCategoriesEnum.FullStackWebProjects ||
    Object.values(ProjectDatabaseKeys).includes(blogKey as ProjectDatabaseKeys);
  const blogPath = isProjectBlog
    ? `public/projects/${blogKey}/blog.md`
    : `public${basePath}/${blogKey}/blog.md`;

  const blogContent: string | undefined =
    getMarkdownFromFileSystem(blogPath)?.content;

  if (!blogContent) {
    notFound();
  }

  // Replace base path placeholder with actual path for images
  const imagePath = isProjectBlog
    ? `/projects/${blogKey}/img`
    : `${basePath}/${blogKey}/img`;
  const processedBlogContent: string = processMarkdownImages(
    blogContent,
    imagePath
  );

  const allGroupedSkills: GroupedSkillsCategoriesInterface[] =
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

        {/* Skills */}
        <Card className="mt-10">
          <CardContent className="py-10">
            <SkillTableSection allGroupedSkills={allGroupedSkills} />
          </CardContent>
        </Card>

        {/* Related Materials */}
        {blogData.relatedMaterials && blogData.relatedMaterials.length > 0 && (
          <>
            <MaterialList materialKeys={blogData.relatedMaterials} />
          </>
        )}
      </div>
    </main>
  );
};

export default BlogPage;
