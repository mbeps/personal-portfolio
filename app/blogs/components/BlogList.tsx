"use client";

import BlogItem from "@/components/Blogs/BlogItem";
import SearchInput from "@/components/Inputs/SearchInput";
import useDebounce from "@/hooks/useDebounce";
import { BlogMetadata } from "@/types/blog";
import Fuse from "fuse.js";
import { useRouter, useSearchParams } from "next/navigation"; // Add this import for Next.js router

interface BlogListProps {
  blogs: BlogMetadata[];
}

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to search for blogs.
 * @returns (JSX.Element): page with all blogs
 */
export const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("search") || "";
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const updateSearchTerm = (newSearchTerm: string) => {
    const validatedSearch = encodeURIComponent(newSearchTerm);
    router.push(`/blogs/?search=${validatedSearch}`);
  };

  // Fuse.js options for fuzzy search
  const options = {
    keys: ["title", "subtitle"], // Only search these properties
    threshold: 0.3, // Lower threshold means more results
  };

  // Fuse object used to search the blogs
  const fuse = new Fuse(blogs, options);

  // List of blogs that match the search term
  const searchedBlogs = debouncedSearchTerm
    ? fuse.search(debouncedSearchTerm).map((result) => result.item)
    : blogs;

  return (
    <div className="my-12 pb-12 md:pt-2">
      <div className="flex flex-col items-end px-0 md:px-2 pl-0 md:pl-6">
        <div className="w-full md:w-1/2">
          <SearchInput
            searchTerm={searchTerm}
            updateSearchTerm={updateSearchTerm}
            placeholder="Search blog"
          />
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-neutral-600 mt-16" />
      <div className="my-12 pb-12 md:pt-2 md:pb-36">
        {/* Blog List */}
        {searchedBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {searchedBlogs.map((blog) => (
              <BlogItem key={blog.slug} {...blog} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center min-w-full h-screen mt-14">
            <h2 className="text-2xl font-bold">No blogs</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
