import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import Reader from "@/components/Reader/Reader";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { BLOG_PAGE } from "@/constants/pages";
import blogDatabase from "@/database/blogs";
import certificateDatabase from "@/database/certificates";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import BlogInterface from "@/interfaces/material/BlogInterface";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

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
  const blog: BlogInterface = blogDatabase[blogKey];

  return {
    title: `${developerName} - Blogs: ${blog?.name}`,
    description: blog?.subtitle,
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
  return Object.keys(blogDatabase).map((blogKey) => ({
    blogKey,
  }));
};

/**
 * Page displaying the rendered markdown which can be read by the user.
 * The blog also displays the skills used in the blog.
 *
 * @param props The content of the blog
 * @returns Content of the blog and the skills used
 */
const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const blogKey: string = params.blogKey;
  const basePath: string = BLOG_PAGE.path;
  const blogData: BlogInterface = blogDatabase[blogKey];
  const blogContent: string | undefined = getMarkdownFromFileSystem(
    `public${basePath}/${blogKey}/blog.md`
  )?.content;

  if (!blogContent || !blogData) {
    notFound();
  }

  const technologies: SkillKeysEnum[] = filterSkillsByType(
    blogData.skills,
    skillDatabase,
    SkillTypesEnum.Hard
  );
  const generalSkills: SkillKeysEnum[] = filterSkillsByType(
    blogData.skills,
    skillDatabase,
    SkillTypesEnum.General
  );
  const softSkills: SkillKeysEnum[] = filterSkillsByType(
    blogData.skills,
    skillDatabase,
    SkillTypesEnum.Soft
  );

  // Using the new function to group all skill types
  const allGroupedSkills = [
    categoriseAndGroupSkills(
      technologies,
      skillDatabase,
      SkillTypesEnum.Hard,
      "Technologies"
    ),
    categoriseAndGroupSkills(
      generalSkills,
      skillDatabase,
      SkillTypesEnum.General,
      "Technical Skills"
    ),
    categoriseAndGroupSkills(
      softSkills,
      skillDatabase,
      SkillTypesEnum.Soft,
      "Soft Skills"
    ),
  ];

  return (
    <div>
      <div className="text-center">
        <HeadingTwo title={blogData?.name} />
        <p className="text-neutral-600 dark:text-neutral-400">
          {blogData?.subtitle}
        </p>
      </div>

      <Reader content={blogContent} size="lg:prose-lg" />

      <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />

      <div className="mt-4">
        <SkillTableSection allGroupedSkills={allGroupedSkills} />
      </div>

      {blogData.relatedMaterials && blogData.relatedMaterials.length > 0 && (
        <>
          <div className="border-b border-gray-200 dark:border-neutral-600 pb-4" />
          <PageDescription
            description={`List of material directly related to ${certificateDatabase.name}`}
          />
          <MaterialList materialKeys={blogData.relatedMaterials} />
        </>
      )}
    </div>
  );
};

export default BlogPage;