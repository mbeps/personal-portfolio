"use client";

import Link from "next/link";
import type React from "react";
import { AiOutlineClear } from "react-icons/ai";
import { Drawer, DrawerContent } from "@/components/shadcn/ui/drawer";
import useIsMounted from "@/hooks/use-is-mounted";
import { useMediaQuery } from "@/hooks/use-media-query";
import type ArchiveFilter from "@/interfaces/filters/archive-filter";
import type FilterCategory from "@/interfaces/filters/filter-category";
import { Button } from "../shadcn/ui/button";
import SidePanel from "../ui/side-panel";
import { ArchiveToggle } from "./archive-toggle";
import FilterOptionItemAccordion from "./filter-option-item-accordion";
import FilterOptionItemCombobox from "./filter-option-item-combobox";

interface FilterOverlayProps {
  filterCategories: FilterCategory[];
  archiveFilter?: ArchiveFilter;
  basePath: string;
  isOpen: boolean;
  toggle: () => void;
  areFiltersApplied: boolean;
}

/**
 * Responsive filter drawer that powers the "Filters" button on every listing, using a side panel on desktop and Drawer on mobile.
 * Uses nuqs setters via FilterCategory.onChange and ArchiveFilter.onToggle so URL state updates without manual URL construction.
 *
 * @param filterCategories Configured filter definitions from the listing page.
 * @param basePath Route base used for the Clear All link.
 * @param isOpen Whether the overlay is visible.
 * @param toggle Handler that toggles visibility.
 * @param archiveFilter Optional archive toggle metadata.
 * @param areFiltersApplied Drives the clear button state.
 */
const FilterOverlay: React.FC<FilterOverlayProps> = ({
  filterCategories,
  basePath,
  isOpen,
  toggle,
  archiveFilter,
  areFiltersApplied,
}) => {
  const isMounted: boolean = useIsMounted();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isMounted) {
    return null;
  }

  /**
   * Shared content component used by both Drawer and SidePanel
   */
  const FilterContent = () => (
    <div className="flex-1 overflow-y-auto px-4 py-4">
      <p className="text-center text-neutral-500 text-sm md:text-left md:text-base dark:text-neutral-400">
        When applying filters, archived items are displayed automatically.
      </p>

      {/* Filter Options */}
      <div className="mt-4 flex w-full flex-col">
        {isDesktop ? (
          <div className="flex w-full flex-col space-y-3">
            {filterCategories.map((filterCategory, index) => (
              <FilterOptionItemCombobox
                key={index}
                selectedFilterCategory={filterCategory}
              />
            ))}
          </div>
        ) : (
          <FilterOptionItemAccordion filterCategories={filterCategories} />
        )}
      </div>

      {/* Buttons */}
      <div className="mt-5 flex flex-col space-x-2 border-neutral-300 border-t pt-3 dark:border-neutral-700">
        {/* Clear Button */}
        <Link href={basePath} className="w-full" scroll={false}>
          <Button
            variant="default"
            disabled={!areFiltersApplied}
            className="flex w-full justify-start border border-neutral-300 bg-neutral-100 px-6 dark:border-neutral-700"
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
            <div className="-mt-1 w-full">
              <ArchiveToggle
                showArchived={archiveFilter.showArchived}
                onToggle={archiveFilter.onToggle}
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
          <DrawerContent className="flex h-[75vh] flex-col justify-start">
            <div className="w-full px-6 pt-6 text-center">
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
