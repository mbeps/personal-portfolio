import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import Reader from "@/components/Reader/Reader";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { BLOG_PAGE } from "@/constants/pages";
import BlogInterface from "@/database/Blogs/BlogInterface";
import blogsDatabaseMap from "@/database/Blogs/BlogsDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ContentsSection from "./components/ContentsSection";

type BlogPageProps = {
  params: { blogKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

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
  { params, searchParams }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
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
 * @param params The parameters for the blog page
 * @returns Content of the blog and the skills used
 */
const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const blogKey: string = params.blogKey;
  const basePath: string = BLOG_PAGE.path;
  const blogData: BlogInterface = blogsDatabaseMap[blogKey];
  const blogContent: string | undefined = getMarkdownFromFileSystem(
    `public${basePath}/${blogKey}/blog.md`
  )?.content;

  if (!blogContent || !blogData) {
    notFound();
  }

  const technologies: SkillDatabaseKeys[] = filterSkillsByType(
    blogData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technology
  );
  const generalSkills: SkillDatabaseKeys[] = filterSkillsByType(
    blogData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Technical
  );
  const softSkills: SkillDatabaseKeys[] = filterSkillsByType(
    blogData.skills,
    skillDatabaseMap,
    SkillTypesEnum.Soft
  );

  // Using the new function to group all skill types
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] = [
    categoriseAndGroupSkills(
      technologies,
      skillDatabaseMap,
      SkillTypesEnum.Technology,
      "Technologies"
    ),
    categoriseAndGroupSkills(
      generalSkills,
      skillDatabaseMap,
      SkillTypesEnum.Technical,
      "Technical Skills"
    ),
    categoriseAndGroupSkills(
      softSkills,
      skillDatabaseMap,
      SkillTypesEnum.Soft,
      "Soft Skills"
    ),
  ];

  /**
   * Splits a blog into 2 sections: contents and articles.
   * The contents section is the part of the blog before the first heading.
   * The article section is the part of the blog after the first heading.
   *
   * @param blogContent Markdown blog that needs to be split into contents and article sections
   * @returns 2 sections: contents list and articles
   */
  function splitBlogContent(blogContent: string): {
    contentsSection: string;
    articleSection: string;
  } {
    // Regular expression to find the first heading (starting with #, ##, etc.)
    const headingRegex = /^#{1,6} /m;

    // Find the index of the first heading
    const firstHeadingIndex: number = blogContent.search(headingRegex);

    // If a heading is found, split the content
    if (firstHeadingIndex !== -1) {
      const contentsSection: string = blogContent
        .slice(0, firstHeadingIndex)
        .trim();
      const articleSection: string = blogContent
        .slice(firstHeadingIndex)
        .trim();

      return { contentsSection, articleSection };
    }

    // If no heading is found, return the entire content as the articleSection, and leave contentsSection empty
    return { contentsSection: "", articleSection: blogContent.trim() };
  }

  const splitBlot = splitBlogContent(blogContent);

  return (
    <main>
      <div className="sr-only">
        <h1>{blogData.name}</h1>
        <h2>{blogData.subtitle}</h2>

        <h3>Skills for blog:</h3>
        {blogData.skills.map((skill) => (
          <p key={skill}>{skillDatabaseMap[skill].name}</p>
        ))}
      </div>

      <div>
        <div className="text-center">
          {/* Title */}
          <HeadingTwo title={blogData?.name} />

          {/* Description */}
          <h3 className="text-neutral-600 dark:text-neutral-400 mb-12">
            {blogData?.subtitle}
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row justify-between mb-6 space-y-2 px-0 lg:px-20">
          <Link href={BLOG_PAGE.path}>
            <Button className="pl-3">
              <MdKeyboardArrowLeft size={24} className="mr-2" />
              Back to Blogs
            </Button>
          </Link>
          <ContentsSection contentSection={splitBlot.contentsSection} />
        </div>

        {/* Article */}
        <div className="px-0 lg:px-20 w-full">
          <Reader content={splitBlot.articleSection} size="lg:prose-lg" />
        </div>

        <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />

        {/* Skills */}
        <div className="mt-4">
          <SkillTableSection allGroupedSkills={allGroupedSkills} />
        </div>

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
