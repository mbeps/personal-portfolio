import Button from "@/components/UI/Button";
import React from "react";
import { BsFilterLeft } from "react-icons/bs";

interface OpenFilterModalButtonProps {
  toggleFilter: () => void;
}

/**
 * Button to open the filter modal.
 * This button is specific to the pages that use filters.
 * @param handleOpenFilterModal () => void - function to open the filter modal
 * @returns (JSX.Element) - button to open the filter modal
 */
const ToggleFilterButton: React.FC<OpenFilterModalButtonProps> = ({
  toggleFilter: handleOpenFilterModal,
}) => {
  return (
    <Button
      variant="outlined"
      onClick={handleOpenFilterModal}
      className={`
				px-4 py-2 w-full
				text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize md:hover:text-neutral-700 dark:md:hover:text-neutral-200
				rounded-xl
				shadow-md md:hover:shadow-lg focus:shadow-lg
				bg-neutral-100 dark:bg-neutral-800 
				md:hover:bg-neutral-100 dark:md:hover:bg-neutral-800
				border-2 border-transparent dark:border-transparent
				md:hover:border-red-500 dark:md:hover:border-red-800
				transition-all duration-500 ease-in-out
			`}
    >
      <div className="flex items-center space-x-2">
        <BsFilterLeft
          fontSize={24}
          className="text-neutral-700 dark:text-neutral-200"
        />
        <span>Filters</span>
      </div>
    </Button>
  );
};

export default ToggleFilterButton;
