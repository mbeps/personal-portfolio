"use client";

import generateUrl from "@/lib/generateUrl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import SearchFilter from "@/interfaces/filters/SearchFilter";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  buildCurrentFilterOptions,
  withForcedArchiveTrue,
} from "@/lib/material/filter-url-state/buildMaterialFilterUrlState";

interface FilterOptionItemAccordionProps {
  filterCategories: FilterCategory[];
  archiveFilter?: ArchiveFilter;
  searchFilter: SearchFilter;
  basePath: string;
}

/**
 * Renders the mobile filter list as a single accordion stack.
 * Keeps the archive and search filters in sync with option taps.
 *
 * @param filterCategories All filter sections to render
 * @param archiveFilter Current archive toggle metadata
 * @param searchFilter Current search filter metadata
 * @param basePath Current page path used for URL updates
 * @returns Accordion stack of filter categories optimized for small screens.
 */
const FilterOptionItemAccordion: React.FC<FilterOptionItemAccordionProps> = ({
  filterCategories,
  archiveFilter,
  searchFilter,
  basePath,
}) => {
  function getOptionLabel(category: FilterCategory): string {
    const activeOption = category.options.find(
      (option) => option.slug === category.selectedValue,
    );

    return activeOption?.entryName ?? "All";
  }

  function buildFilterUrl(
    category: FilterCategory,
    optionSlug: string,
  ): string {
    const baseFilters: FilterOption[] = buildCurrentFilterOptions(
      filterCategories,
      searchFilter,
    );

    const filtersWithArchive: FilterOption[] = withForcedArchiveTrue(
      [
        ...baseFilters,
        {
          entryName: category.urlParam,
          slug: optionSlug,
        },
      ],
      archiveFilter,
    );

    return generateUrl(filtersWithArchive, basePath);
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {filterCategories.map((category) => (
        <AccordionItem key={category.urlParam} value={category.urlParam}>
          <AccordionTrigger className="px-2 text-left hover:no-underline">
            <span className="flex flex-col text-left">
              <span className="text-lg font-semibold text-neutral-700 dark:text-neutral-200">
                {category.sectionName}
              </span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {getOptionLabel(category)}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-2 pb-4 pt-0">
            <div className="flex flex-col gap-2">
              {category.options.map((option) => {
                const isSelected = option.slug === category.selectedValue;

                return (
                  <Link
                    key={option.slug}
                    href={buildFilterUrl(category, option.slug)}
                    scroll={false}
                    className="w-full"
                  >
                    <span
                      className={cn(
                        `block w-full rounded-xl border border-neutral-200 dark:border-neutral-800
                        px-3 py-3 text-left text-md font-semibold transition-colors`,
                        isSelected
                          ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900"
                          : "bg-white text-neutral-700 dark:bg-neutral-900 dark:text-neutral-50",
                      )}
                    >
                      {option.entryName}
                    </span>
                  </Link>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FilterOptionItemAccordion;
