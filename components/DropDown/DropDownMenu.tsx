import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Button from "../Button/Button";

interface FilterOption {
  slug: string;
  entryName: string;
}

interface DropdownProps {
  selected: string;
  options: FilterOption[];
  onSelect: (value: string) => void; // Function to handle option selection
  className?: string;
  width?: number | string;
}

const Dropdown: React.FC<DropdownProps> = ({
  selected,
  options,
  onSelect,
  className = "",
  width = "48", // Default width
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={`w-${width}`}>
        <Button
          variant="outlined"
          className={`
            px-3 py-2 w-full
            flex
            text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize md:hover:text-neutral-700 dark:md:hover:text-neutral-200
            rounded-xl
            shadow-md md:hover:shadow-lg focus:shadow-lg
            bg-neutral-100 dark:bg-neutral-800
            md:hover:bg-neutral-100 dark:md:hover:bg-neutral-800
            border-2 border-transparent dark:border-transparent
            md:hover:border-red-500 dark:md:hover:border-red-800
            transition-all duration-500 ease-in-out
          `}
        >
          <div className="flex items-start justify-between space-x-2 w-full">
            <span>Category</span>
            <BsChevronDown
              fontSize={16}
              className="text-neutral-700 dark:text-neutral-200 mt-1"
            />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 ">
        {options.map((option, index) => (
          <DropdownMenuItem
            key={index}
            className={`
              ${option.slug === selected ? "font-bold" : ""}`}
            onSelect={() => onSelect(option.slug)}
          >
            {option.entryName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
