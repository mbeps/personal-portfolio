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
import { MdOutlineManageSearch } from "react-icons/md";

interface FilterSectionProps {
  name: string;
  basePath: string;
  filterCategories: FilterCategory[];
  areFiltersApplied: boolean;
  searchFilter: SearchFilter;
  archiveFilter: ArchiveFilter;
}

/**
 * A component that allows the user to filter, search and view archived materials.
 * These are hidden behind an accordion trigger to keep the UI clean and take less space.
 * Inside this component, there is a:
 * - Search input allowing the user to type a string and find materials based on metadata
 * - Filter button that opens a modal with all the filter options
 * - Clear button that resets all the filters including the search term and archive filter
 * - Archive toggle that allows the user to show/hide archived materials (only displayed if there are archived materials)
 *
 * @param name The name of the page so that it can be displayed in the accordion trigger
 * @param basePath The base path for the current page
 * @param searchFilter The currently applied search term
 * @param filterCategories All the filter categories
 * @param areFiltersApplied Whether any filters are currently applied
 * @param archiveFilter The status of the archive filter
 * @returns Component that displays the filter section for the page
 */
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

  /**
   * Function which updates the search term in the URL.
   * This keeps all the other filters the same and only updates the search term.
   * It also automatically toggles all the archived materials to be shown.
   *
   * @param newSearchTerm The new search term to update the search filter with
   */
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

  /**
   * Message to display in the accordion trigger based on the archive filter.
   * If there are archived materials, it will display "Searching, Filtering and Archived {name}".
   * If there are no archived materials, it will display "Searching & Filtering {name}".
   */
  const message: string = archiveFilter.hasArchivedMaterials
    ? `Search, Filter and View Archived ${name}`
    : `Search & Filter ${name}`;

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
            <div className="flex items-center space-x-3">
              <MdOutlineManageSearch
                size={28}
                className="text-neutral-600 dark:text-neutral-400"
              />
              <p
                className="
                  text-lg 
                  text-neutral-600 dark:text-neutral-400
                  font-semibold
                  "
              >
                {message}
              </p>
            </div>
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
