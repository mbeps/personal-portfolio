import Button from "@/components/Atoms/Button";
import React from "react";
import { BsFilterLeft } from "react-icons/bs";

interface OpenFilterModalButtonProps {
  handleOpenFilterModal: () => void;
}

/**
 * Button to open the filter modal.
 * This button is specific to the pages that use filters.
 * @param handleOpenFilterModal () => void - function to open the filter modal
 * @returns (JSX.Element) - button to open the filter modal
 */
const OpenFilterModalButton: React.FC<OpenFilterModalButtonProps> = ({
  handleOpenFilterModal,
}) => {
  return (
    <Button
      variant="outlined"
      onClick={handleOpenFilterModal}
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
        <BsFilterLeft
          fontSize={24}
          className="text-neutral-700 dark:text-neutral-200"
        />
        <span>Filter</span>
      </div>
    </Button>
  );
};

export default OpenFilterModalButton;
