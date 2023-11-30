"use client";

import generateUrl from "@/actions/generateUrl";
import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import OpenFilterModalButton from "@/components/Filters/Page/OpenFilterModalButton";
import SearchInput from "@/components/Inputs/SearchInput";
import { BlogMetadata } from "@/types/blog";
import { useRouter, useSearchParams } from "next/navigation"; // Add this import for Next.js router
import { useState } from "react";
import BlogFilterModal from "./BlogFilterModal";

interface BlogFilterSearchSectionProps {
  blogs: BlogMetadata[];
}

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to filter and search the blogs.
 * @returns (JSX.Element): page with all blogs
 */
export const BlogFilterSearchSection: React.FC<
  BlogFilterSearchSectionProps
> = ({ blogs }) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category") || "All";
  const searchTerm = searchParams.get("search") || "";
  const basePath = "/blogs";

  /**
   * List of all blog categories.
   * These are used as options for filtering.
   */
  const blogCategories: string[] = [
    "All",
    ...blogs
      .map((blog: BlogMetadata) => blog.category)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  /**
   * Updates the search term in the URL.
   * This updates the state which changes the blogs being displayed.
   * @param newSearchTerm (string) - new search term
   */
  const updateSearchTerm = (newSearchTerm: string) => {
    // Update the URL parameter to reflect the new search term
    router.push(
      generateUrl(
        { category: selectedCategory, search: newSearchTerm },
        basePath
      )
    );
  };

  const resetFilters = () => {
    router.push(generateUrl({ category: "All", search: "" }, basePath));
  };

  const areFiltersApplied = selectedCategory !== "All" || searchTerm !== "";

  /**
   * Opens the modal to filter the projects.
   */
  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  /**
   * Closes the modals.
   * These modals are for filtering and displaying more projects.
   */
  const handleCloseModals = () => {
    setIsFilterModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center w-full mt-12 p-2 gap-4">
        {/* Search input */}
        <div className="w-full md:flex-1">
          <SearchInput
            searchTerm={searchTerm}
            updateSearchTerm={updateSearchTerm}
            placeholder="Search blog name or metadata"
          />
        </div>
        {/* Buttons */}
        <div className="flex flex-row md:flex-1 gap-2 w-full">
          {/* Filter Button */}
          <OpenFilterModalButton
            handleOpenFilterModal={handleOpenFilterModal}
          />
          {/* Clear Button */}
          <ClearAllFiltersButton
            resetFilters={resetFilters}
            areFiltersApplied={areFiltersApplied}
          />
        </div>
      </div>

      {/* Filter Modal */}
      <BlogFilterModal
        resetFilters={resetFilters}
        generateUrl={generateUrl}
        handleCloseModals={handleCloseModals}
        isFilterModalOpen={isFilterModalOpen}
        areFiltersApplied={areFiltersApplied}
        blogCategories={blogCategories}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        basePath={basePath}
      />
    </>
  );
};

export default BlogFilterSearchSection;
