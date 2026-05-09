"use client";

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
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Button } from "../shadcn/ui/button";

interface FilterOptionItemComboboxProps {
  selectedFilterCategory: FilterCategory;
}

/**
 * Desktop filter selector used inside the drawer, combining a searchable command palette style list with the nuqs setter.
 * Calls the category's onChange setter directly when the user selects an option.
 *
 * @param selectedFilterCategory Filter group currently rendered.
 * @returns Popover trigger and list of filter options.
 */
const FilterOptionItemCombobox: React.FC<FilterOptionItemComboboxProps> = ({
  selectedFilterCategory,
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
              return (
                <button
                  key={i}
                  className="w-full"
                  onClick={() => {
                    selectedFilterCategory.onChange(option.slug);
                    setOpen(false);
                  }}
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
                </button>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default FilterOptionItemCombobox;
