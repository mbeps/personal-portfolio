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
import useIsMounted from "@/hooks/useIsMounted";
import { cn } from "@/lib/utils";
import FilterCategory from "@/types/filters/FilterCategory";
import { Check } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import HeadingThree from "../Text/HeadingThree";
import { Button } from "../shadcn/ui/button";
import { NAVBAR_HEIGHT } from "@/constants/NAVBAR";

interface FilterOverlayProps {
  filterCategories: FilterCategory[];
  generateUrl: (filters: [string, string][], basePath: string) => string;
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
  basePath,
  isOpen,
  toggle,
  archiveFilter,
}) => {
  const isMounted = useIsMounted();

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

  return (
    <div
      className={`
        fixed 
        flex flex-col 
        top-0 right-0 
        h-full 
        pt-${NAVBAR_HEIGHT} md:px-2 md:pb-3
        w-full md:w-[25rem]
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
          w-full shadow-2xl md:rounded-2xl 
          border-2
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

          <div className="space-y-3 mt-4 flex flex-col justify-center items-center">
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

          <CommandGroup className="w-[24rem] md:w-[22rem]">
            {filterCategory.options.map((option, i) => (
              <Link
                key={i}
                href={generateUrl(
                  [
                    ...filterCategories.map(
                      (category) =>
                        [category.urlParam, category.selectedValue] as [
                          string,
                          string,
                        ],
                    ), // Asserting the type as [string, string]
                    [filterCategory.urlParam, option.slug],
                    [archiveFilter.paramName, archiveFilter.status.toString()],
                  ],
                  basePath,
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
