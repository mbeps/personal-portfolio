import getBlogMetadataBySlug from "@/actions/blogs/getBlogMetadataBySlug";
import getMarkdownFromFileSystem from "@/actions/getMarkdownFromFileSystem";
import Reader from "@/components/Reader/Reader";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import blogs from "@/database/blogs";
import Skill from "@/types/skills";
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
  const allBlogs = blogs;

  // Assume getBlogMetadataById function fetches metadata by slug
  const blog = getBlogMetadataBySlug(slug, allBlogs);

  return {
    title: `Maruf Bepary - Blogs: ${blog?.title}`,
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
  // get all blogs with metadata
  const allBlogs = blogs;

  // Map through all blogs and return an array of objects with the slug for each blog
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
};

/**
 * Page displaying the rendered markdown which can be read by the user.
 * @param props: the content of the blog
 * @returns (JSX.Element): content of the blog
 */
const BlogPage: React.FC<BlogPageProps> = ({ params }) => {
  const slug = params.slug;
  const blogMetadata = getBlogMetadataBySlug(slug, blogs);
  const blogContent = getMarkdownFromFileSystem(
    `/blogs/${slug}/blog.md`
  )?.content;

  if (!blogContent || !blogMetadata) {
    notFound();
  }

  interface SkillCategory {
    title: string;
    skillCategories: Record<string, Skill[]>;
  }

  const filterAndGroupBlogSkills = (
    skills: Skill[] | undefined,
    skillType: "hard" | "general" | "soft",
    title: string
  ): SkillCategory => {
    // Handle the case where skills might be undefined
    const validSkills = skills || [];

    // Filter skills based on skillType
    const filteredSkills = validSkills.filter(
      (skill) => skill.skillType === skillType
    );

    // Group the filtered skills by category
    const grouped = filteredSkills.reduce<Record<string, Skill[]>>(
      (acc, skill) => {
        const category = skill.category;
        (acc[category] = acc[category] || []).push(skill);
        return acc;
      },
      {}
    );

    return { title, skillCategories: grouped };
  };

  // Using the new function to group all skill types for the blog
  const allGroupedBlogSkills = {
    technologies: filterAndGroupBlogSkills(
      blogMetadata?.technicalSkills,
      "hard",
      "Technologies"
    ),
    generalSkills: filterAndGroupBlogSkills(
      blogMetadata?.technicalSkills,
      "general",
      "Technical Skills"
    ),
    softSkills: filterAndGroupBlogSkills(
      blogMetadata?.softSkills,
      "soft",
      "Soft Skills"
    ),
  };

  return (
    <div>
      <div className="my-12 text-center">
        <HeadingTwo title={blogMetadata?.title} />
        <p className="text-neutral-600 dark:text-neutral-400">
          {blogMetadata?.subtitle}
        </p>
      </div>

      <Reader content={blogContent} />

      <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />

      <div className="mt-4">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {Object.values(allGroupedBlogSkills).map(
            ({ title, skillCategories }) =>
              Object.keys(skillCategories).length > 0 && (
                <SkillTableSection
                  key={title}
                  skillCategories={skillCategories}
                  title={title}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
