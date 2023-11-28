import Button from "@/components/Atoms/Button";
import React from "react";
import { AiOutlineClear } from "react-icons/ai";

type ClearAllFiltersButtonProps = {
  resetFilters: () => void;
  areFiltersApplied: boolean;
};

/**
 * Button to clear all filters.
 * This button is specific to the modals from pages that use filters.
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
      className="w-full"
    >
      <div className="flex items-center justify-center space-x-2">
        <AiOutlineClear fontSize={24} />
        <span>Clear</span>
      </div>
    </Button>
  );
};
export default ClearAllFiltersButton;
