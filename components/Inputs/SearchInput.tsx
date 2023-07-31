"use client";

import React, { InputHTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
  ...props
}) => (
  <div className="relative w-full md:flex-grow md:order-last">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search"
      className="
        w-full
        p-2 pl-10
        border-2
        bg-neutral-100 dark:bg-neutral-800
        text-neutral-700 dark:text-neutral-200
        border-transparent focus:border-red-500 dark:focus:border-red-900
        hover:border-red-400 dark:hover:border-red-800
        focus:outline-none
        rounded-xl
				shadow-md hover:shadow-lg focus:shadow-lg
        transition-all ease-out duration-300
      "
      {...props}
    />
    <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-700 dark:text-neutral-200" />
  </div>
);

export default SearchInput;
