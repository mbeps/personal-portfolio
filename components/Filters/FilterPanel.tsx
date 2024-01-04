"use client";

import ExpandCollapseButton from "@/components/Button/ExpandCollapseButton";
import FilterCategory from "@/types/filters/FilterCategory";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import RadioButton from "../Inputs/RadioButton";
import HeadingFour from "../Text/HeadingFour";
import HeadingThree from "../Text/HeadingThree";
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
import { Button } from "../shadcn/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import generateUrl from "@/actions/generateUrl";

interface FilterOverlayProps {
  filterCategories: FilterCategory[];
  generateUrl: (params: Record<string, string>, basePath: string) => string;
  basePath: string;
  isOpen: boolean;
  toggle: () => void;
  archiveFilter: {
    paramName: string;
    status: boolean;
  };
}

const FilterOverlay: React.FC<FilterOverlayProps> = ({
  filterCategories,
  generateUrl,
  basePath,
  isOpen,
  toggle,
  archiveFilter,
}) => {
  return (
    <div
      className={`
        fixed 
        flex flex-col 
        top-0 right-0 
        h-screen 
        w-full md:w-[27rem] 
        z-20 
        transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700 ease-in-out 
        bg-none 
        md:px-2 md:pb-3`}
    >
      <div
        className="
          mt-auto 
          h-[calc(100vh-4rem)]  md:h-[calc(100vh-6rem)] 
          w-full shadow-2xl md:rounded-2xl 
          border-1.5 
          border-neutral-200 dark:border-neutral-700 
          bg-neutral-100 dark:bg-black 
          overflow-y-auto 
          scrollbar-width-none 
          ms-overflow-style-none 
          transition-all duration-700 ease-in-out"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className="
            sticky top-0
            z-10
            bg-neutral-100 dark:bg-black
            px-4 py-0
            flex justify-between items-center
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

          {filterCategories.map((filterCategory, index) => (
            <FilterPopover
              key={index}
              basePath={basePath}
              filterCategory={filterCategory}
              filterCategories={filterCategories}
              archiveFilter={archiveFilter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterOverlay;

interface FilterPopover {
  filterCategory: FilterCategory;
  filterCategories: FilterCategory[];
  basePath: string;
  archiveFilter: {
    paramName: string;
    status: boolean;
  };
}

const FilterPopover = ({
  filterCategory,
  filterCategories,
  archiveFilter,
  basePath,
}: FilterPopover) => {
  const [isOpen, setOpen] = useState(false);

  const handleRadioButtonChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionName: string,
  ) => {
    console.log(
      `Radio button in section ${sectionName} changed to ${e.target.value}`,
    );
  };

  return (
    <Popover key={filterCategory.urlParam} open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          onClick={() => setOpen(!isOpen)}
          className="w-[200px] justify-between"
        >
          {filterCategory.sectionName}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No filter found.</CommandEmpty>

          <CommandGroup>
            {filterCategory.options.map((option, i) => (
              <Link
                key={i}
                href={generateUrl(
                  {
                    ...filterCategories.reduce(
                      (acc, currentCategory) => ({
                        ...acc,
                        [currentCategory.urlParam]:
                          currentCategory.selectedValue,
                      }),
                      {},
                    ),
                    [filterCategory.urlParam]: option.slug,
                    [archiveFilter.paramName]: "true",
                  },
                  basePath,
                )}
              >
                <CommandItem
                  key={option.slug}
                  value={option.slug}
                  // onSelect functionality should be handled or passed as props
                >
                  <Check
                    className={cn(
                      "w-4 h-4 mr-2",
                      filterCategory.selectedValue.toLowerCase() ===
                        option.slug.toLowerCase()
                        ? "text-primary-500"
                        : "text-neutral-400",
                    )}
                  />
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
