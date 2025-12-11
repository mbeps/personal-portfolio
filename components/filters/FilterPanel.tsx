"use client";

import useIsMounted from "@/hooks/useIsMounted";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import SearchFilter from "@/interfaces/filters/SearchFilter";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineClear } from "react-icons/ai";
import SidePanel from "../ui/SidePanel";
import { Drawer, DrawerContent } from "@/components/shadcn/ui/drawer";
import { Button } from "../shadcn/ui/button";
import { ArchiveToggle } from "./ArchiveToggle";
import FilterPopover from "./FilterPopover";
import MobileFilterAccordion from "./MobileFilterAccordion";

interface FilterOverlayProps {
  filterCategories: FilterCategory[];
  archiveFilter?: ArchiveFilter;
  searchFilter: SearchFilter;
  basePath: string;
  isOpen: boolean;
  toggle: () => void;
  areFiltersApplied: boolean;
}

/**
 * Responsive filter drawer that powers the “Filters” button on every listing, using a side panel on desktop and Drawer on mobile.
 * Keeps URL state in sync so fuse search and grouped lists update as soon as the user interacts with the panel.
 *
 * @param filterCategories Configured filter definitions from the listing page.
 * @param basePath Route base used when building URLs.
 * @param isOpen Whether the overlay is visible.
 * @param toggle Handler that toggles visibility.
 * @param archiveFilter Optional archive toggle metadata.
 * @param areFiltersApplied Drives the clear button state.
 * @param searchFilter Search metadata so the drawer can keep query params intact.
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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggle();
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
      entryName: category.urlParam,
      slug: category.selectedValue,
    })
  );

  if (archiveFilter) {
    filterProps.push({
      entryName: archiveFilter.paramName,
      slug: archiveFilter.showArchived.toString(),
    });
  }

  /**
   * Shared content component used by both Drawer and SidePanel
   */
  const FilterContent = () => (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base text-center md:text-left">
        When applying filters, archived items are displayed automatically.
      </p>

      {/* Filter Options */}
      <div className="mt-4 flex w-full flex-col">
        {isDesktop ? (
          <div className="space-y-3 flex flex-col w-full">
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
        ) : (
          <MobileFilterAccordion
            basePath={basePath}
            filterCategories={filterCategories}
            archiveFilter={archiveFilter}
            searchFilter={searchFilter}
          />
        )}
      </div>

      {/* Buttons */}
      <div className="pt-3 mt-5 flex flex-col space-x-2 border-t border-neutral-300 dark:border-neutral-700">
        {/* Clear Button */}
        <Link href={basePath} className="w-full" scroll={false}>
          <Button
            variant="default"
            disabled={!areFiltersApplied}
            className="w-full px-6 flex justify-start bg-neutral-100 border border-neutral-300 dark:border-neutral-700"
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

        {/* Archive Toggle */}
        {archiveFilter?.hasArchivedMaterials && (
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
  );

  return (
    <>
      {isDesktop ? (
        // Desktop SidePanel (md and above)
        <SidePanel title="Filters" isOpen={isOpen} toggle={toggle}>
          <FilterContent />
        </SidePanel>
      ) : (
        // Mobile Drawer (below md)
        <Drawer open={isOpen} onOpenChange={toggle}>
          <DrawerContent className="flex flex-col justify-start h-[75vh]">
            <div className="w-full pt-6 px-6 text-center">
              <h3>Filters</h3>
            </div>
            <FilterContent />
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default FilterOverlay;
