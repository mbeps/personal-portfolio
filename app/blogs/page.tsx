import getBlogMetadata from "@/actions/getBlogMetadata";
import HeadingOne from "@/components/Text/HeadingOne";
import { BlogFilterSearchSection } from "./components/BlogFilterSearchSection";
import type { Metadata } from "next";
import PageDescription from "@/components/Atoms/PageDescription";
import BlogListSection from "./components/BlogListSection";
import { BlogMetadata } from "@/types/blog";

const description = `
  Explore my collection of blogs on various topics. 
  Use the search bar to find specific blogs or filter them by category.
`;

export const metadata: Metadata = {
  title: "Maruf Bepary - Blogs",
  description: description,
};

interface CredentialsPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to search for blogs.
 * @returns (JSX.Element): page with all blogs
 */
export default function BlogPage({
  params,
  searchParams,
}: CredentialsPageProps) {
  let blogMetadata = getBlogMetadata();
  const slug = params.slug;
  const selectedCategory = searchParams.category || "All";
  const searchTerm = searchParams.search || "";

  /**
   * Groups the blogs by category.
   * This is used to display the blogs in sections.
   * @param blogs (BlogMetadata[]) - list of blogs
   * @returns (Record<string, BlogMetadata[]>) - blogs grouped by category (key)
   */
  const groupBlogsByType = (
    blogs: BlogMetadata[]
  ): Record<string, BlogMetadata[]> => {
    return blogs.reduce<Record<string, BlogMetadata[]>>((grouped, blog) => {
      (grouped[blog.category] = grouped[blog.category] || []).push(blog);
      return grouped;
    }, {});
  };

  /**
   * Filters the blogs by category selected by the user.
   */
  const filteredBlogs = blogMetadata.filter(
    (blog) => selectedCategory === "All" || blog.category === selectedCategory
  );

  const groupedBlogs = groupBlogsByType(filteredBlogs);

  return (
    <main>
      <section id="blogs">
        <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
          <HeadingOne title="Blog" />
          <PageDescription description={description} />

          <BlogFilterSearchSection blogs={blogMetadata} />
          {/* Blog List */}
          <BlogListSection groupedBlogs={groupedBlogs} />
        </div>
      </section>
    </main>
  );
}
