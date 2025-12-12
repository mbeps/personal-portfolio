"use client";

import useIsMounted from "@/hooks/useIsMounted";
import { Search, SendHorizontal, X } from "lucide-react";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface SearchInputProps {
  searchTerm: string;
  updateSearchTerm: (newSearchTerm: string) => void;
  placeholder?: string;
  className?: string;
}

/**
 * Controlled search field used by every listing filter; keeps a local buffer so typing is instant before pushing to the URL.
 *
 * @param searchTerm Value synced with the router query string.
 * @param updateSearchTerm Callback that triggers Fuse search when the user commits.
 * @param placeholder Optional hint text.
 * @param className Extra Tailwind classes.
 * @returns Search input with clear and submit affordances.
 */
const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  updateSearchTerm,
  placeholder = "Search",
  className,
  ...props
}) => {
  const [localSearchTerm, setLocalSearchTerm] = React.useState(searchTerm);
  const isMounted: boolean = useIsMounted();

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  if (!isMounted) {
    return null;
  }

  // This function was modified to only clear the local input field
  function handleClearSearch(): void {
    setLocalSearchTerm("");
  }

  function handleSearch(): void {
    updateSearchTerm(localSearchTerm);
  }

  const combinedClassName: string = twMerge(
    `
      w-full h-12
      px-2 pl-12
      border 
      overflow-auto
      bg-neutral-100 dark:bg-neutral-800
      text-neutral-700 dark:text-neutral-200
      border-neutral-300 dark:border-neutral-700 
      focus:border-red-500 dark:focus:border-red-900
      hover:border-red-500 dark:hover:border-red-800
      focus:outline-hidden
      rounded-xl
      shadow-xs hover:shadow-lg focus:shadow-lg
      transition-all ease-out duration-500
    `,
    className
  );

  const isSearchDisabled: boolean = !localSearchTerm;

  return (
    <div className="relative w-full md:grow md:order-last">
      <input
        type="text"
        value={localSearchTerm}
        onChange={(event) => setLocalSearchTerm(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder={placeholder}
        className={combinedClassName}
        {...props}
      />
      <Search
        className="
          absolute 
          left-4 top-1/2 
          transform -translate-y-1/2 
          text-neutral-500 dark:text-neutral-200
        "
      />

      <div
        className="
          absolute right-2 top-1/2 
          bg-inherit
          transform -translate-y-1/2 
          flex flex-row items-end
          space-x-2
          pr-2
          p-1
          "
      >
        {localSearchTerm && (
          <X
            className="
            text-neutral-500 cursor-pointer hover:text-red-500 dark:hover:text-red-800 
            transition-all ease-out duration-300 hover:scale-125
            "
            onClick={handleClearSearch}
          />
        )}
        <button
          className={`
          text-neutral-500 
          ${
            isSearchDisabled
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          } 
          transition-all ease-out duration-300 hover:scale-125
          `}
          onClick={handleSearch}
          disabled={isSearchDisabled}
        >
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
