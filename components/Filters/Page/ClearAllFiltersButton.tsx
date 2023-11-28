import Button from "@/components/Atoms/Button";
import React from "react";
import { AiOutlineClear } from "react-icons/ai";

interface ClearAllFiltersButtonProps {
  resetFilters: () => void;
  areFiltersApplied: boolean;
}

/**
 * Button to clear all filters.
 * This button is specific to the pages that use filters.
 * When there are no filters applied, the button is disabled.
 * @param resetFilters () => void - function to reset filters
 * @param areFiltersApplied (boolean) - boolean to check if filters are applied
 * @returns (JSX.Element) - button to clear all filters
 */
const ClearAllFiltersButton: React.FC<ClearAllFiltersButtonProps> = ({
  resetFilters,
  areFiltersApplied,
}) => {
  return (
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
        <AiOutlineClear
          fontSize={24}
          className="text-neutral-700 dark:text-neutral-200"
        />
        <span>Clear All</span>
      </div>
    </Button>
  );
};

export default ClearAllFiltersButton;
