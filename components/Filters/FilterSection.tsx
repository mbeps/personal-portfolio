"use client";

import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import FilterOverlay from "@/components/Filters/FilterPanel";
import SearchInput from "@/components/Inputs/SearchInput";
import { Button } from "@/components/shadcn/ui/button";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import Link from "next/link";
import React from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";

interface FilterSectionProps {
  basePath: string;
  searchTerm: string;
  updateSearchTerm: (searchTerm: string) => void;
  handleToggleFilter: () => void;
  isFilterOpen: boolean;
  filterCategories: FilterCategory[];
  showArchived: boolean;
  generateUrl: (filters: FilterOption[], basePath: string) => string;
  areFiltersApplied: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  basePath,
  searchTerm,
  updateSearchTerm,
  handleToggleFilter,
  isFilterOpen,
  filterCategories,
  showArchived,
  generateUrl,
  areFiltersApplied,
}) => {
  // Generate filterProps dynamically from filterCategories
  const filterProps = filterCategories.map((category) => ({
    entryName: category.urlParam,
    slug: category.selectedValue,
  }));

  // Add archive status to filterProps
  filterProps.push({
    entryName: "archived",
    slug: showArchived.toString(),
  });

  return (
    <div className="flex flex-col gap-2">
      <div
        className="
				flex flex-col md:flex-row 
				items-center 
				w-full 
				mt-12 py-2 gap-4"
      >
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
          <Button
            variant="default"
            onClick={handleToggleFilter}
            className="w-full flex justify-start"
          >
            <div className="flex items-center space-x-2">
              <BsFilterLeft
                fontSize={24}
                className="text-neutral-700 dark:text-neutral-200"
              />
              <span>Filters</span>
            </div>
          </Button>
          {/* Clear Button */}
          <Link href={basePath} className="w-full">
            <Button
              variant="default"
              disabled={!areFiltersApplied}
              className="w-full flex justify-start"
            >
              <div className="flex items-center space-x-2">
                <AiOutlineClear
                  fontSize={24}
                  className="text-neutral-700 dark:text-neutral-200"
                />
                <span>Clear All</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
      {/* Archive Toggle */}
      <ArchiveToggle
        generateUrl={generateUrl}
        showArchived={showArchived}
        filterProps={filterProps}
        basePath={basePath}
      />

      {/* Filter Modal */}
      <FilterOverlay
        isOpen={isFilterOpen}
        toggle={handleToggleFilter}
        filterCategories={filterCategories}
        basePath={basePath}
        archiveFilter={{
          paramName: "archived",
          status: showArchived,
        }}
        areFiltersApplied={areFiltersApplied}
      />
    </div>
  );
};

export default FilterSection;
