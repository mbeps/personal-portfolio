import getMarkdownFromFileSystem from "@/actions/getMarkdownFromFileSystem";
import Reader from "@/components/Reader/Reader";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { getBlogMetadataBySlug } from "@/actions/getBlogMetadataBySlug";
import blogs from "@/constants/blogs";
import { Skill } from "@/types/skills";
import HeadingThree from "@/components/Text/HeadingThree";
import Tag from "@/components/Atoms/Tag";
import SkillTableSection from "@/components/Skills/SkillTableSection";

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
    `public/blogs/${slug}/blog.md`
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
    // Filter skills based on skillType, considering skills might be undefined
    const filteredSkills =
      skills?.filter((skill) => skill.skillType === skillType) ?? [];

    // Group the filtered skills
    const grouped = filteredSkills
      .filter((skill) => skill.category !== undefined)
      .reduce<Record<string, Skill[]>>((acc, skill) => {
        const category = skill.category as string;
        (acc[category] = acc[category] || []).push(skill);
        return acc;
      }, {});

    // Sort categories by the number of skills and get the top 2 categories
    const topCategories = Object.keys(grouped)
      .sort((a, b) => grouped[b].length - grouped[a].length)
      .slice(0, 2);

    // Organize the skills into top categories and 'Others'
    const organizedSkills = Object.keys(grouped).reduce<
      Record<string, Skill[]>
    >((acc, category) => {
      if (topCategories.includes(category)) {
        acc[category] = grouped[category];
      } else {
        acc["Others"] = [...(acc["Others"] || []), ...grouped[category]];
      }
      return acc;
    }, {});

    return { title, skillCategories: organizedSkills };
  };

  // Using the new function to group all skill types for the blog
  const allGroupedBlogSkills = {
    technologies: filterAndGroupBlogSkills(
      blogMetadata?.skills,
      "hard",
      "Technologies"
    ),
    generalSkills: filterAndGroupBlogSkills(
      blogMetadata?.skills,
      "general",
      "Technical Skills"
    ),
    softSkills: filterAndGroupBlogSkills(
      blogMetadata?.skills,
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
  );
};

export default BlogPage;
