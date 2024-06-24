"use client";

import { NAVBAR_HEIGHT } from "@/constants/NAVBAR";
import useIsMounted from "@/hooks/useIsMounted";
import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import HeadingThree from "../Text/HeadingThree";
import { Button } from "../shadcn/ui/button";
import { ArchiveToggle } from "./ArchiveToggle";
import FilterPopover from "./FilterPopover";
import SearchFilter from "@/interfaces/filters/SearchFilter";

interface FilterOverlayProps {
  filterCategories: FilterCategory[];
  archiveFilter: ArchiveFilter;
  searchFilter: SearchFilter;
  basePath: string;
  isOpen: boolean;
  toggle: () => void;
  areFiltersApplied: boolean;
}

/**
 * This displays the filter overlay with the filter options.
 * The component is outside the screen and slides in when opened.
 * This component takes the necessary filter options and displays them in a list.
 * Once a filter is chosen, the URL is updated with the new filter options.
 * This URL is then listed to from the page calling the filter overlay and the content is updated.
 *
 * @param filterCategories The title of the filtering options
 * @param basePath The base path for the URL of the current page
 * @param isOpen If the filter overlay is open
 * @param toggle Function to toggle the filter overlay
 * @param archiveFilter The status of the archive filter
 * @param areFiltersApplied If filters are applied
 * @returns Overlay component with filter options
 */
const FilterOverlay: React.FC<FilterOverlayProps> = ({
  filterCategories,
  basePath,
  isOpen,
  toggle,
  archiveFilter,
  areFiltersApplied,
  searchFilter,
}) => {
  const isMounted: boolean = useIsMounted();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggle(); // Assuming toggle() is the method to close the modal
      }
    };

    if (isMounted) {
      window.addEventListener("keydown", handleEscape);
    }

    // Cleanup the event listener
    return () => {
      if (isMounted) {
        window.removeEventListener("keydown", handleEscape);
      }
    };
  }, [isMounted, toggle]);

  if (!isMounted) {
    return null;
  }

  const filterProps: FilterOption[] = filterCategories.map(
    (category): FilterOption => ({
      entryName: category.urlParam, // Assuming urlParam is a suitable match for entryName
      slug: category.selectedValue, // Assuming selectedValue is a suitable match for slug
    })
  );

  filterProps.push({
    entryName: archiveFilter.paramName, // Assuming paramName is a suitable match for entryName
    slug: archiveFilter.showArchived.toString(), // status converted to string for slug
  });

  return (
    <div
      className={`
        fixed 
        flex flex-col 
        top-0 right-0 
        h-full 
        pt-${NAVBAR_HEIGHT} md:px-2 md:pb-3
        w-full md:w-[24rem]
        z-20 
        transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700 ease-in-out 
        bg-none 
        `}
    >
      <div
        className="
          mt-auto 
          h-full
          w-full shadow-lg md:rounded-xl 
          border
          border-neutral-300 dark:border-neutral-700
          bg-white dark:bg-black 
          transition-all duration-700 ease-in-out"
      >
        <div
          className="
            sticky top-0
            z-10
            bg-neutral-50 dark:bg-black
            px-4 py-0
            flex justify-between items-center
            transition-all duration-700 ease-in-out
            rounded-t-2xl
          "
        >
          {/* Replace HeadingThree with your own heading component or HTML tag */}
          <HeadingThree title="Filters" />
          <button onClick={toggle}>
            <span className="sr-only">Close</span>
            <IoClose
              className="
                h-7 w-7 
                text-neutral-800 dark:text-neutral-400 
                hover:text-red-500 dark:hover:text-red-500 
                transition-colors duration-500 ease-in-out"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="px-4 py-4">
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base text-center md:text-left">
            When applying filters, archived items are displayed automatically.
          </p>

          {/* Filter Options */}
          <div className="space-y-3 mt-4 flex flex-col justify-center items-center">
            {filterCategories.map((filterCategory, index) => (
              <FilterPopover
                key={index}
                basePath={basePath}
                selectedFilterCategory={filterCategory}
                filterCategories={filterCategories}
                archiveFilter={archiveFilter}
                searchFilter={searchFilter}
              />
            ))}
          </div>

          {/* Buttons */}
          <div
            className="
              pt-3 mt-5
              flex flex-row
              space-x-2
              border-t border-neutral-300 dark:border-neutral-700
            "
          >
            {/* Clear Button */}
            <Button
              variant="default"
              disabled={!areFiltersApplied}
              className="
                w-auto
                px-6
                flex justify-start 
                bg-neutral-100 
                border border-neutral-300 dark:border-neutral-700"
            >
              <Link href={basePath} className="w-full" scroll={false}>
                <div className="flex items-center space-x-2">
                  <AiOutlineClear
                    fontSize={24}
                    className="text-neutral-700 dark:text-neutral-200"
                  />
                  <span>Clear All</span>
                </div>
              </Link>
            </Button>

            {/* Archive Toggle */}
            {archiveFilter.hasArchivedMaterials && (
              <div className="w-full">
                <div className="w-full -mt-1">
                  <ArchiveToggle
                    showArchived={archiveFilter.showArchived}
                    filterProps={filterProps}
                    basePath={basePath}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOverlay;
