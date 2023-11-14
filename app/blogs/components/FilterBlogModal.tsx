"use client";

import Button from "@/components/Atoms/Button";
import RadioButton from "@/components/Inputs/RadioButton";
import Modal from "@/components/Modal/Modal";
import Link from "next/link";
import { AiOutlineClear } from "react-icons/ai";
import { MdClear } from "react-icons/md";

interface FilterBlogModalProps {
  resetFilters: () => void;
  generateUrl: (category: string, search: string) => string;
  handleCloseModals: () => void;
  isFilterModalOpen: boolean;
  areFiltersApplied: boolean;
  selectedCategory: string;
  searchTerm: string;
  blogCategories: string[];
}

/**
 * Modal used for filtering blogs.
 * User can filter by category.
 * @param resetFilters () => void - function to reset filters
 * @param generateUrl (category: string, search: string) => string - function to generate URL for filtering
 * @param handleCloseModals () => void - function to close modals
 * @param isFilterModalOpen (boolean) - boolean to check if filter modal is open
 * @param areFiltersApplied (boolean) - boolean to check if filters are applied
 * @param selectedCategory (string) - selected category
 * @param searchTerm (string) - search term
 * @param blogCategories (string[]) - list of blog categories
 * @returns (JSX.Element) - filter modal for blogs
 */
const FilterBlogModal: React.FC<FilterBlogModalProps> = ({
  resetFilters,
  generateUrl,
  isFilterModalOpen,
  handleCloseModals,
  areFiltersApplied,
  selectedCategory,
  searchTerm,
  blogCategories,
}) => {
  return (
    <Modal
      isOpen={isFilterModalOpen}
      onClose={handleCloseModals}
      title={"Blog Filters"}
      className="min-h-[50vh]"
    >
      <div
        className="
				px-8 md:px-0
				flex flex-row 
				justify-center mb-4  
			"
      >
        <div className="flex flex-row w-full justify-center space-x-2 ">
          <p className="text-neutral-600 dark:text-neutral-400">
            Filters are applied automatically as you select them.
          </p>
        </div>
      </div>
      {/* Filter Options */}
      <div
        className="
				gap-2 
				px-5 md:px-0
				"
      >
        <div>
          {/* Category Filter */}
          <label htmlFor="type-dropdown" className="font-semibold text-lg">
            Category
          </label>
          <div className="h-64 md:h-80 overflow-y-auto space-y-2">
            {blogCategories.map((category) => (
              <Link href={generateUrl(category, searchTerm)} key={category}>
                <RadioButton
                  key={category}
                  id={category}
                  name="projectType"
                  value={category}
                  checked={selectedCategory === category}
                  label={category}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Modal Bottom Buttons */}
      <div className="w-full flex flex-row justify-center">
        <div
          className="
					flex flex-col md:flex-row 
					w-full 
					md:space-x-2 space-y-2 md:space-y-0
					justify-center items-center"
        >
          {/* Clear Filters Button */}
          <Button
            variant="outlined"
            onClick={resetFilters}
            disabled={!areFiltersApplied}
            className="w-full"
          >
            <div className="flex items-center justify-center space-x-2">
              <AiOutlineClear fontSize={24} />
              <span>Clear</span>
            </div>
          </Button>
          {/* Close Modal Button */}
          <Button
            variant="filled"
            onClick={handleCloseModals}
            className="w-full"
          >
            <div className="flex items-center justify-center space-x-2">
              <MdClear fontSize={24} />
              <span>Close</span>
            </div>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterBlogModal;
