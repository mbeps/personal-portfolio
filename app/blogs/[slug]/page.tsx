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

  const blogTechnologies = blogMetadata?.skills.filter(
    (skill) => skill.skillType === "hard"
  );

  const blogGeneralSkills = blogMetadata?.skills.filter(
    (skill) => skill.skillType === "general"
  );

  const blogSoftSkills = blogMetadata?.skills.filter(
    (skill) => skill.skillType === "soft"
  );

  const groupBlogSkillsByCategory = (
    skills: Skill[]
  ): Record<string, Skill[]> => {
    // Group skills by category
    const grouped = skills
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

    // Create the final grouped object with only top 2 categories and 'Others'
    return Object.keys(grouped).reduce<Record<string, Skill[]>>(
      (acc, category) => {
        if (topCategories.includes(category)) {
          acc[category] = grouped[category];
        } else {
          acc["Others"] = [...(acc["Others"] || []), ...grouped[category]];
        }
        return acc;
      },
      {}
    );
  };

  const groupedTechnologies = groupBlogSkillsByCategory(blogTechnologies);
  const groupedGeneralSkills = groupBlogSkillsByCategory(blogGeneralSkills);
  const groupedSoftSkills = groupBlogSkillsByCategory(blogSoftSkills);

  return (
    <div>
      <div className="my-12 text-center">
        <HeadingTwo title={blogMetadata?.title} />
        <p className="text-neutral-600 dark:text-neutral-400">
          {blogMetadata?.subtitle}
        </p>
      </div>

      <Reader content={blogContent} />

      <div className="mt-4">
        {/* Technologies Section */}
        {blogTechnologies.length > 0 && (
          <SkillTableSection
            skillCategories={groupedTechnologies}
            title="Technologies"
          />
        )}

        {/* Technical Skills Section */}
        {blogGeneralSkills.length > 0 && (
          <SkillTableSection
            skillCategories={groupedGeneralSkills}
            title="Technical Skills"
          />
        )}

        {/* Soft Skills Section */}
        {blogSoftSkills.length > 0 && (
          <SkillTableSection
            skillCategories={groupedSoftSkills}
            title="Soft Skills"
          />
        )}
      </div>
    </div>
  );
};

export default BlogPage;
