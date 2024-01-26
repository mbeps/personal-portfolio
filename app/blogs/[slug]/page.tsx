import getMarkdownFromFileSystem from "@/actions/getMarkdownFromFileSystem";
import getContentBySlug from "@/actions/material/getContentBySlug";
import filterAndGroupSkills from "@/actions/skills/filterAndGroupSkills";
import filterSkillsByType from "@/actions/skills/filterSkillsByType";
import { getAssociatedNestedSkills } from "@/actions/skills/getAssociatedSkills";
import Reader from "@/components/Reader/Reader";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { BLOG } from "@/constants/pages";
import blogs from "@/database/blogs";
import BlogInterface from "@/interfaces/material/BlogInterface";
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
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = params.slug;
  const allBlogs = blogs;

  // Assume getBlogMetadataById function fetches metadata by slug
  const blog = getContentBySlug<BlogInterface>(slug, allBlogs);

  return {
    title: `Maruf Bepary - Blogs: ${blog?.name}`,
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
  const basePath = BLOG.path;
  const blogMetadata = getContentBySlug<BlogInterface>(slug, blogs);
  const blogContent = getMarkdownFromFileSystem(
    `public${basePath}/${slug}/blog.md`,
  )?.content;

  if (!blogContent || !blogMetadata) {
    notFound();
  }

  const technologies = filterSkillsByType(blogMetadata.skills, "hard");
  const generalSkills = getAssociatedNestedSkills(
    technologies,
    "general",
  ).concat(filterSkillsByType(blogMetadata.skills, "general"));
  const softSkills = filterSkillsByType(blogMetadata.skills, "soft");

  // Using the new function to group all skill types
  const allGroupedSkills = [
    filterAndGroupSkills(technologies, "hard", "Technologies"),
    filterAndGroupSkills(generalSkills, "general", "Technical Skills"),
    filterAndGroupSkills(softSkills, "soft", "Soft Skills"),
  ];

  return (
    <div>
      <div className="text-center">
        <HeadingTwo title={blogMetadata?.name} />
        <p className="text-neutral-600 dark:text-neutral-400">
          {blogMetadata?.subtitle}
        </p>
      </div>

      <Reader content={blogContent} />

      <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />

      <div className="mt-4">
        <SkillTableSection allGroupedSkills={allGroupedSkills} />
      </div>
    </div>
  );
};

export default BlogPage;
