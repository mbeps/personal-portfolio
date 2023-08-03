"use client";

import React, { InputHTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { MdClear } from "react-icons/md";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  className?: string;
}

/**
 * Component for a search input element.
 * Allows the user to search for a specific term by inputting text.
 * @param searchTerm (string): The current search term inputted by the user.
 * @param setSearchTerm (function): A function that sets the search term.
 * @param props (object): The props of the input element.
 * @param className (string): The custom classes to be applied to the input element.
 * @returns (JSX.Element): A search input element.
 */
const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
  className, // Destructuring the new prop
  ...props
}) => {
  const combinedClassName = twMerge(
    `
      w-full
      p-2 pl-10
      border-2
      bg-neutral-100 dark:bg-neutral-800
      text-neutral-700 dark:text-neutral-200
      border-transparent focus:border-red-500 dark:focus:border-red-900
      hover:border-red-500 dark:hover:border-red-800
      focus:outline-none
      rounded-xl
			shadow-md hover:shadow-lg focus:shadow-lg
      transition-all ease-out duration-500
    `,
    className // Merge user-provided className
  );

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="relative w-full md:flex-grow md:order-last">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className={combinedClassName}
        {...props}
      />
      <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-700 dark:text-neutral-200" />
      {searchTerm && (
        <MdClear
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-700 dark:text-neutral-200 cursor-pointer hover:text-red-500 dark:hover:text-red-800 transition-all ease-out duration-300 hover:scale-125"
          onClick={handleClearSearch}
        />
      )}
    </div>
  );
};

export default SearchInput;
