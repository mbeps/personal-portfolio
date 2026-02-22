"use client";

import generateUrl from "@/lib/generateUrl";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shadcn/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "../shadcn/ui/button";
import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import SearchFilter from "@/interfaces/filters/SearchFilter";
import {
  buildCurrentFilterOptions,
  withForcedArchiveTrue,
} from "@/lib/material/filter-url-state/buildMaterialFilterUrlState";

interface FilterOptionItemComboboxProps {
  selectedFilterCategory: FilterCategory;
  filterCategories: FilterCategory[];
  archiveFilter?: ArchiveFilter;
  searchFilter: SearchFilter;
  basePath: string;
}

/**
 * Desktop filter selector used inside the drawer, combining a searchable command palette style list with the shared URL builder.
 * Ensures selecting any option also forces archived items to surface so historical work is discoverable.
 *
 * @param selectedFilterCategory Filter group currently rendered.
 * @param filterCategories All filter configs so we can keep the rest in sync.
 * @param archiveFilter Optional archive metadata.
 * @param searchFilter Search metadata to preserve the query string.
 * @param basePath Base route for the listing page.
 * @returns Popover trigger and list of filter options.
 */
const FilterOptionItemCombobox: React.FC<FilterOptionItemComboboxProps> = ({
  selectedFilterCategory,
  filterCategories,
  archiveFilter,
  basePath,
  searchFilter,
}: FilterOptionItemComboboxProps) => {
  const [isOpen, setOpen] = useState(false);
  const gap = "w-4 h-4 mr-2";

  function getSelectedOptionName(
    selectedFilterCategory: FilterCategory,
  ): string | undefined {
    const selectedOption = selectedFilterCategory.options.find(
      (option) => option.slug === selectedFilterCategory.selectedValue,
    );

    return selectedOption ? selectedOption.entryName : undefined;
  }

  const currentFilterOptionName: string | undefined = getSelectedOptionName(
    selectedFilterCategory,
  );
  return (
    <Popover
      key={selectedFilterCategory.urlParam}
      open={isOpen}
      onOpenChange={setOpen}
    >
      <PopoverTrigger
        render={
          <Button
            variant="default"
            role="combobox"
            onClick={() => setOpen(!isOpen)}
            className="
            border border-neutral-300 dark:border-neutral-700
            shadow-xs
            w-full
            justify-between 
            bg-neutral-100
            py-2 h-full"
          >
            <div className="flex flex-col space-y-1 items-start">
              <span>{selectedFilterCategory.sectionName}</span>
              <span
                className="
              text-sm
              text-neutral-500 dark:text-neutral-400"
              >
                {currentFilterOptionName}
              </span>
            </div>

            <BsChevronDown
              fontSize={16}
              className="text-neutral-700 dark:text-neutral-200 mt-1"
            />
          </Button>
        }
      />

      <PopoverContent className="w-[24rem] md:w-84 p-0">
        <Command className="w-full">
          <CommandInput placeholder="Search Filter..." />
          <CommandEmpty>No Filter Found.</CommandEmpty>

          <CommandGroup className="w-full max-h-[25vh]">
            {selectedFilterCategory.options.map((option, i) => {
              const baseFilters: FilterOption[] = buildCurrentFilterOptions(
                filterCategories,
                searchFilter,
              );

              const nextFilters: FilterOption[] = withForcedArchiveTrue(
                [
                  ...baseFilters,
                  {
                    entryName: selectedFilterCategory.urlParam,
                    slug: option.slug,
                  },
                ],
                archiveFilter,
              );

              return (
                <Link
                  key={i}
                  href={generateUrl(nextFilters, basePath)}
                  className="w-full"
                >
                  <CommandList>
                    <CommandItem
                      key={option.slug}
                      value={option.slug}
                      className="pr-4 w-full"
                    >
                      {selectedFilterCategory.selectedValue === option.slug ? (
                        <Check className={cn(gap, "text-red-500")} />
                      ) : (
                        <div className={gap}></div>
                      )}
                      {option.entryName}
                    </CommandItem>
                  </CommandList>
                </Link>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterOptionItemCombobox;
