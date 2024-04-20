"use client";

import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import FilterPanel from "@/components/Filters/FilterPanel";
import SearchInput from "@/components/Inputs/SearchInput";
import { Button } from "@/components/shadcn/ui/button";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import SearchFilter from "@/interfaces/filters/SearchFilter";
import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import generateUrl from "@/actions/generateUrl";
import { useRouter } from "next/navigation";

interface FilterSectionProps {
  name: string;
  basePath: string;
  filterCategories: FilterCategory[];
  areFiltersApplied: boolean;
  searchFilter: SearchFilter;
  archiveFilter: ArchiveFilter;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  name,
  basePath,
  searchFilter,
  filterCategories,
  areFiltersApplied,
  archiveFilter,
}) => {
  const router = useRouter();

  // Generate filterProps dynamically from filterCategories
  const filterProps: FilterOption[] = filterCategories.map(
    (category): FilterOption => ({
      entryName: category.urlParam,
      slug: category.selectedValue,
    })
  );

  // With search term
  filterProps.push({
    entryName: searchFilter.searchParamName,
    slug: searchFilter.searchTerm,
  });

  // With archive filter
  filterProps.push({
    entryName: archiveFilter.paramName,
    slug: archiveFilter.showArchived.toString(),
  });

  //TODO: Add documentation
  function updateSearchTerm(newSearchTerm: string) {
    const updatedFilterProps: FilterOption[] = filterProps.map((filterProp) => {
      // update the search term
      if (filterProp.entryName === searchFilter.searchParamName) {
        return { ...filterProp, slug: newSearchTerm };
      }
      // show archived materials
      if (filterProp.entryName === archiveFilter.paramName) {
        return { ...filterProp, slug: true.toString() };
      }
      return filterProp;
    });

    // Generate the new URL with the updated filter settings.
    const newUrl: string = generateUrl(updatedFilterProps, basePath);

    router.push(newUrl);
  }

  const message: string = archiveFilter.hasArchivedMaterials
    ? `Searching, Filtering and Archived ${name}`
    : `Searching & Filtering ${name}`;

  const [isFilterOpen, setIsFilterModalOpen] = useState(false);
  function handleToggleFilter() {
    setIsFilterModalOpen(!isFilterOpen);
  }

  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="
            py-1 px-3 mt-3
            rounded-xl
            border
            border-neutral-200 dark:border-neutral-800
            hover:border-neutral-300 dark:hover:border-neutral-700
            bg-neutral-50 dark:bg-black
            shadow-sm hover:shadow-md
            transition-all duration-500 ease-in-out
            "
        >
          <AccordionTrigger>
            <p
              className="
              text-lg 
              text-neutral-600 dark:text-neutral-400
              font-semibold
              "
            >
              {message}
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <div
                className="
                flex flex-col md:flex-row 
                items-center 
                w-full 
                py-2 gap-4"
              >
                {/* Search input */}
                <div className="w-full md:flex-1">
                  <SearchInput
                    searchTerm={searchFilter.searchTerm}
                    updateSearchTerm={updateSearchTerm}
                    placeholder={`Search for ${name} name or metadata`}
                  />
                </div>
                {/* Buttons */}
                <div className="flex flex-row md:flex-1 gap-2 w-full">
                  {/* Filter Button */}
                  <Button
                    variant="default"
                    onClick={handleToggleFilter}
                    className="
                    w-full 
                    flex justify-start 
                    shadow-sm hover:shadow-md
                    border border-neutral-300 dark:border-neutral-700 "
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
                  <Link href={basePath} className="w-full" scroll={false}>
                    <Button
                      variant="default"
                      disabled={!areFiltersApplied}
                      className="
                      w-full 
                      flex justify-start
                      shadow-sm hover:shadow-md
                      border border-neutral-300 dark:border-neutral-700
                      "
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
              {archiveFilter.hasArchivedMaterials && (
                <ArchiveToggle
                  showArchived={archiveFilter.showArchived}
                  filterProps={filterProps}
                  basePath={basePath}
                />
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* Filter Modal */}
      <FilterPanel
        isOpen={isFilterOpen}
        toggle={handleToggleFilter}
        filterCategories={filterCategories}
        basePath={basePath}
        archiveFilter={{
          paramName: archiveFilter.paramName,
          showArchived: archiveFilter.showArchived,
          hasArchivedMaterials: archiveFilter.hasArchivedMaterials,
        }}
        areFiltersApplied={areFiltersApplied}
        searchFilter={searchFilter}
      />
    </>
  );
};

export default FilterSection;
