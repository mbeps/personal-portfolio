"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import type FilterCategory from "@/interfaces/filters/FilterCategory";
import { cn } from "@/lib/utils";

interface FilterOptionItemAccordionProps {
  filterCategories: FilterCategory[];
}

/**
 * Renders the mobile filter list as a single accordion stack.
 * Calls each category's onChange setter directly when an option is selected.
 *
 * @param filterCategories All filter sections to render
 * @returns Accordion stack of filter categories optimized for small screens.
 */
const FilterOptionItemAccordion: React.FC<FilterOptionItemAccordionProps> = ({
  filterCategories,
}) => {
  function getOptionLabel(category: FilterCategory): string {
    const activeOption = category.options.find(
      (option) => option.slug === category.selectedValue,
    );

    return activeOption?.entryName ?? "All";
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      {filterCategories.map((category) => (
        <AccordionItem key={category.urlParam} value={category.urlParam}>
          <AccordionTrigger className="px-2 text-left hover:no-underline">
            <span className="flex flex-col text-left">
              <span className="font-semibold text-lg text-neutral-700 dark:text-neutral-200">
                {category.sectionName}
              </span>
              <span className="text-neutral-500 text-sm dark:text-neutral-400">
                {getOptionLabel(category)}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-2 pt-0 pb-4">
            <div className="flex flex-col gap-2">
              {category.options.map((option) => {
                const isSelected = option.slug === category.selectedValue;

                return (
                  <button
                    key={option.slug}
                    className="w-full text-left"
                    onClick={() => category.onChange(option.slug)}
                  >
                    <span
                      className={cn(
                        "block w-full rounded-xl border border-neutral-200 px-3 py-3 text-left font-semibold text-md transition-colors dark:border-neutral-800",
                        isSelected
                          ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900"
                          : "bg-white text-neutral-700 dark:bg-neutral-900 dark:text-neutral-50",
                      )}
                    >
                      {option.entryName}
                    </span>
                  </button>
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
