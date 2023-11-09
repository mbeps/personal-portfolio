"use client";

import Button from "@/components/Atoms/Button";
import BlogItem from "@/components/Blogs/BlogItem";
import SearchInput from "@/components/Inputs/SearchInput";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { BlogMetadata } from "@/types/blog";
import Fuse from "fuse.js";
import { useRouter, useSearchParams } from "next/navigation"; // Add this import for Next.js router
import { MdClear } from "react-icons/md";

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

  const updateSearchTerm = (newSearchTerm: string) => {
    const validatedSearch = encodeURIComponent(newSearchTerm);
    router.push(`/blogs/?search=${validatedSearch}`);
  };

  const resetSearch = () => {
    updateSearchTerm("");
  };

  const areFiltersApplied = searchTerm.length > 0;

  const options = {
    keys: ["title", "subtitle", "category"],
    threshold: 0.3,
  };

  const fuse = new Fuse(blogs, options);

  const searchedBlogs = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : blogs;

  const isClearDisabled = !searchTerm;

  const groupedBlogs = searchedBlogs.reduce<Record<string, BlogMetadata[]>>(
    (acc, blog) => {
      const category = blog.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(blog);
      return acc;
    },
    {}
  );

  return (
    <div className="my-12 pb-12 md:pt-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-0 md:px-2 pl-0">
        <div className="md:col-span-2">
          <SearchInput
            searchTerm={searchTerm}
            updateSearchTerm={updateSearchTerm}
            placeholder="Search blog"
          />
        </div>
        <div className="md:col-span-1">
          {/* Clear Search Button */}
          <Button
            variant="outlined"
            onClick={resetSearch}
            disabled={isClearDisabled}
            className={`
              px-4 py-2 w-full
              text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize hover:text-neutral-700 dark:hover:text-neutral-200
              rounded-xl
              shadow-md hover:shadow-lg focus:shadow-lg
              bg-neutral-100 dark:bg-neutral-800 
              hover:bg-neutral-100 dark:hover:bg-neutral-800
              border-2 border-transparent dark:border-transparent
              hover:border-red-500 dark:hover:border-red-800
              transition-all duration-500 ease-in-out
            `}
          >
            <div className="flex items-center space-x-2">
              <MdClear
                fontSize={24}
                className="text-neutral-700 dark:text-neutral-200"
              />
              <span>Clear Search</span>
            </div>
          </Button>
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-neutral-600 mt-16" />
      <div className="my-12 pb-12 md:pt-2 md:pb-36 space-y-4 md:space-y-10">
        {Object.keys(groupedBlogs).length > 0 ? (
          Object.entries(groupedBlogs).map(([category, blogsInCategory]) => (
            <div key={category}>
              <HeadingTwo title={category} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {blogsInCategory.map((blog) => (
                  <BlogItem key={blog.slug} {...blog} />
                ))}
              </div>
            </div>
          ))
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
