"use client";

import generateUrl from "@/actions/generateUrl";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
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

interface FilterPopover {
  filterCategory: FilterCategory;
  filterCategories: FilterCategory[];
  basePath: string;
  archiveFilter: {
    paramName: string;
    status: boolean;
  };
}

/**
 * Popover component displaying the filtering options for the user.
 * This is similar to a dropdown menu but with a search bar to find the desired filter.
 * Once the filter is selected, the URL is updated with the new filter options.
 *
 * @param filterCategory The current filter category
 * @param filterCategories All the filter categories
 * @param archiveFilter The status of the archive filter
 * @param basePath The base path for the current page
 * @returns Popover component with filter options
 */
const FilterPopover = ({
  filterCategory,
  filterCategories,
  archiveFilter,
  basePath,
}: FilterPopover) => {
  const [isOpen, setOpen] = useState(false);
  const gap = "w-4 h-4 mr-2";

  return (
    <Popover key={filterCategory.urlParam} open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          role="combobox"
          onClick={() => setOpen(!isOpen)}
          className="
            w-[24rem] md:w-[22rem]
            justify-between 
            bg-neutral-200"
        >
          <span>{filterCategory.sectionName}</span>

          <BsChevronDown
            fontSize={16}
            className="text-neutral-700 dark:text-neutral-200 mt-1"
          />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[24rem] md:w-[22rem] p-0">
        <Command className="w-[24rem] md:w-[22rem]">
          <CommandInput placeholder="Search Filter..." />
          <CommandEmpty>No Filter Found.</CommandEmpty>

          <CommandGroup className="w-[24rem] md:w-[22rem] max-h-[25vh]">
            {filterCategory.options.map((option, i) => (
              <Link
                key={i}
                href={generateUrl(
                  [
                    ...filterCategories.map((category) => ({
                      entryName: category.urlParam, // Assuming urlParam maps to entryName
                      slug: category.selectedValue, // Assuming selectedValue maps to slug
                    })),
                    {
                      entryName: filterCategory.urlParam, // Assuming urlParam maps to entryName
                      slug: option.slug, // Using slug directly from option
                    },
                    {
                      entryName: archiveFilter.paramName, // Assuming paramName maps to entryName
                      slug: true.toString(), // status converted to string for slug
                    },
                  ],
                  basePath
                )}
                className="w-full"
              >
                <CommandItem
                  key={option.slug}
                  value={option.slug}
                  className="pr-4 w-full"
                >
                  {filterCategory.selectedValue === option.slug ? (
                    <Check className={cn(gap, "text-red-500")} />
                  ) : (
                    <div className={gap}></div>
                  )}
                  {option.entryName}
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterPopover;