import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import MaterialList from "@/components/MaterialLists/MaterialList";
import Reader from "@/components/Reader/Reader";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import developerName from "@/constants/developerName";
import { BLOG_PAGE } from "@/constants/pages";
import BlogInterface from "@/database/Blogs/BlogInterface";
import blogsDatabaseMap from "@/database/Blogs/BlogsDatabaseMap";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
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
  const blog: BlogInterface = blogsDatabaseMap[blogKey];

  return {
    title: `${developerName} - Blogs: ${blog?.name}`,
    description: blog?.subtitle,
    category: `${BLOG_PAGE.label}`,
    creator: developerName,
    keywords: blog?.skills.map((skill) => skillDatabaseMap[skill].name),
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
          <HeadingTwo title={blogData?.name} />

          <h3 className="text-neutral-600 dark:text-neutral-400">
            {blogData?.subtitle}
          </h3>
        </div>

        <Reader content={blogContent} size="lg:prose-lg" />

        <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />

        <div className="mt-4">
          <SkillTableSection allGroupedSkills={allGroupedSkills} />
        </div>

        {blogData.relatedMaterials && blogData.relatedMaterials.length > 0 && (
          <>
            <MaterialList
              materialKeys={blogData.relatedMaterials}
              sectionName={blogData.name}
            />
          </>
        )}
      </div>
    </main>
  );
};

export default BlogPage;
