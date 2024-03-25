import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import filterAndGroupSkills from "@/actions/skills/filter/filterAndGroupSkills";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import Reader from "@/components/Reader/Reader";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import developerName from "@/constants/developerName";
import { BLOG_PAGE } from "@/constants/pages";
import blogDatabase from "@/database/blogs";
import skillDatabase from "@/database/skills";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type BlogPageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/**
 * Metadata object for the dynamic blog page.
 * Each blog page has a unique title and description.
 * @param (BlogPageProps) - props: the content of the blog
 * @param parent (ResolvingMetadata) - parent metadata
 * @returns (Promise<Metadata>): metadata for the blog (title and description
 */
export async function generateMetadata(
  { params, searchParams }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const allBlogs = blogDatabase;

  // Assume getBlogMetadataById function fetches metadata by slug
  const blog = blogDatabase[slug];

  return {
    title: `${developerName} - Blogs: ${blog?.name}`,
    description: blog?.subtitle,
  };
}

/**
 * Generates the static paths for the blogs.
 * This means that the blog are pre-rendered and can be opened without a server.
 * This is Incremental Static Regeneration and improves the performance of the website.
 * This improves the performance of the website.
 * @returns (Array): array of blogs
 */
export const generateStaticParams = async () => {
  return Object.keys(blogDatabase).map((slug) => ({
    slug,
  }));
};

/**
 * Page displaying the rendered markdown which can be read by the user.
 * @param props: the content of the blog
 * @returns (JSX.Element): content of the blog
 */
const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const slug = params.slug;
  const basePath = BLOG_PAGE.path;
  const blogMetadata = blogDatabase[slug];
  const blogContent = getMarkdownFromFileSystem(
    `public${basePath}/${slug}/blog.md`
  )?.content;

  if (!blogContent || !blogMetadata) {
    notFound();
  }

  const technologies: SkillKeysEnum[] = filterSkillsByType(
    blogMetadata.skills,
    skillDatabase,
    SkillTypesEnum.Hard
  );
  const generalSkills: SkillKeysEnum[] = filterSkillsByType(
    blogMetadata.skills,
    skillDatabase,
    SkillTypesEnum.General
  );
  const softSkills: SkillKeysEnum[] = filterSkillsByType(
    blogMetadata.skills,
    skillDatabase,
    SkillTypesEnum.Soft
  );

  // Using the new function to group all skill types
  const allGroupedSkills = [
    filterAndGroupSkills(
      technologies,
      skillDatabase,
      SkillTypesEnum.Hard,
      "Technologies"
    ),
    filterAndGroupSkills(
      generalSkills,
      skillDatabase,
      SkillTypesEnum.General,
      "Technical Skills"
    ),
    filterAndGroupSkills(
      softSkills,
      skillDatabase,
      SkillTypesEnum.Soft,
      "Soft Skills"
    ),
  ];

  return (
    <div>
      <div className="text-center">
        <HeadingTwo title={blogMetadata?.name} />
        <p className="text-neutral-600 dark:text-neutral-400">
          {blogMetadata?.subtitle}
        </p>
      </div>

      <Reader content={blogContent} size="lg:prose-lg" />

      <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />

      <div className="mt-4">
        <SkillTableSection allGroupedSkills={allGroupedSkills} />
      </div>
    </div>
  );
};

export default BlogPage;
