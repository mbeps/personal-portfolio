"use client";

import generateUrl from "@/actions/generateUrl";
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
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "../shadcn/ui/button";
import ArchiveFilter from "@/interfaces/filters/ArchiveFilter";
import SearchFilter from "@/interfaces/filters/SearchFilter";

interface FilterPopover {
  selectedFilterCategory: FilterCategory;
  filterCategories: FilterCategory[];
  archiveFilter: ArchiveFilter;
  searchFilter: SearchFilter;
  basePath: string;
}

/**
 * Popover component displaying the filtering options for the user.
 * This is similar to a dropdown menu but with a search bar to find the desired filter.
 * Once the filter is selected, the URL is updated with the new filter options.
 *
 * @param selectedFilterCategory The current filter category
 * @param filterCategories All the filter categories
 * @param archiveFilter The status of the archive filter
 * @param searchFilter The currently applied search term
 * @param basePath The base path for the current page
 * @returns Popover component with filter options
 */
const FilterPopover: React.FC<FilterPopover> = ({
  selectedFilterCategory,
  filterCategories,
  archiveFilter,
  basePath,
  searchFilter,
}: FilterPopover) => {
  const [isOpen, setOpen] = useState(false);
  const gap = "w-4 h-4 mr-2";

  function getSelectedOptionName(
    selectedFilterCategory: FilterCategory
  ): string | undefined {
    const selectedOption = selectedFilterCategory.options.find(
      (option) => option.slug === selectedFilterCategory.selectedValue
    );

    return selectedOption ? selectedOption.entryName : undefined;
  }

  const currentFilterOptionName: string | undefined = getSelectedOptionName(
    selectedFilterCategory
  );
  return (
    <Popover
      key={selectedFilterCategory.urlParam}
      open={isOpen}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          onClick={() => setOpen(!isOpen)}
          className="
            border border-neutral-300 dark:border-neutral-700
            shadow-sm
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
      </PopoverTrigger>

      <PopoverContent className="w-[24rem] md:w-[21rem] p-0">
        <Command className="w-full">
          <CommandInput placeholder="Search Filter..." />
          <CommandEmpty>No Filter Found.</CommandEmpty>

          <CommandGroup className="w-full max-h-[25vh]">
            {selectedFilterCategory.options.map((option, i) => (
              <Link
                key={i}
                href={generateUrl(
                  [
                    ...filterCategories.map((category) => ({
                      // Existing filters
                      entryName: category.urlParam,
                      slug: category.selectedValue,
                    })),
                    {
                      // Include the current search term dynamically
                      entryName: searchFilter.searchParamName,
                      slug: searchFilter.searchTerm,
                    },
                    {
                      // Always show archived material when a filter is selected
                      entryName: archiveFilter.paramName,
                      slug: true.toString(),
                    },
                    {
                      // New filter being applied
                      entryName: selectedFilterCategory.urlParam,
                      slug: option.slug,
                    },
                  ],
                  basePath
                )}
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
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterPopover;
