"use client";

import Button from "@/components/Atoms/Button";
import BlogItem from "@/components/Blogs/BlogItem";
import SearchInput from "@/components/Inputs/SearchInput";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { BlogMetadata } from "@/types/blog";
import Fuse from "fuse.js";
import { useRouter, useSearchParams } from "next/navigation"; // Add this import for Next.js router
import { MdClear } from "react-icons/md";
import BlogSection from "./BlogSection";

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

  const selectedCategory = searchParams.get("category") || "All";
  const searchTerm = searchParams.get("search") || "";

  /**
   * Generates the URL for the blogs page.
   * These are the URL parameters that are used for filtering and searching.
   * Once filters and search are applied, the URL is updated.
   */
  const generateUrl = (category: string, search: string) => {
    // Validate and encode filter values
    const validatedCategory = encodeURIComponent(category.trim());
    const validatedSearch = encodeURIComponent(search.trim());

    // Construct and return the URL
    return `/blogs/?category=${validatedCategory}&search=${validatedSearch}`;
  };

  /**
   * Fuse.js options for fuzzy search.
   * These are the only properties that are searched.
   * These are the same ones from the `BlogMetadata` type.
   */
  const searchOptions = {
    keys: ["title", "subtitle", "category"],
    threshold: 0.3,
  };

  const fuse = new Fuse(blogs, searchOptions);

  const groupBlogsByType = (
    blogs: BlogMetadata[]
  ): Record<string, BlogMetadata[]> => {
    return blogs.reduce<Record<string, BlogMetadata[]>>((grouped, blog) => {
      (grouped[blog.category] = grouped[blog.category] || []).push(blog);
      return grouped;
    }, {});
  };

  const searchedBlogs = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : blogs;

  const blogCategories: string[] = [
    "All",
    ...blogs
      .map((blog: BlogMetadata) => blog.category)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  const updateSearchTerm = (newSearchTerm: string) => {
    // Update the URL parameter to reflect the new search term
    router.push(generateUrl(selectedCategory, newSearchTerm));
  };

  const filteredBlogs = searchedBlogs.filter(
    (blog) => selectedCategory === "All" || blog.category === selectedCategory
  );

  const groupedBlogs = groupBlogsByType(filteredBlogs);

  const resetFilters = () => {
    router.push(generateUrl("All", ""));
  };

  const areFiltersApplied = selectedCategory !== "All" || searchTerm !== "";

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
            onClick={resetFilters}
            disabled={!areFiltersApplied}
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
      <div className="my-12 pb-12 md:pt-2 md:pb-36 space-y-4 md:space-y-10">
        {Object.keys(groupedBlogs).length > 0 ? (
          Object.keys(groupedBlogs).map(
            (category) =>
              category !== "All" && (
                <BlogSection
                  key={category}
                  title={category}
                  blogs={groupedBlogs[category]}
                />
              )
          )
        ) : (
          <div className="flex justify-center min-w-full mt-14">
            <h2 className="text-2xl font-bold">No blogs found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
