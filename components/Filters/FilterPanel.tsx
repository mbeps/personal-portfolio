"use client";

import ExpandCollapseButton from "@/components/Button/ExpandCollapseButton";
import FilterCategory from "@/types/filters/FilterCategory";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import RadioButton from "../Inputs/RadioButton";
import HeadingFour from "../Text/HeadingFour";
import HeadingThree from "../Text/HeadingThree";

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
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (sectionName: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const handleRadioButtonChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionName: string
  ) => {
    console.log(
      `Radio button in section ${sectionName} changed to ${e.target.value}`
    );
  };

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
          h-[calc(100vh-6rem)] 
          w-full shadow-2xl md:rounded-2xl 
          border-1.5 
          border-neutral-200 dark:border-neutral-700 
          bg-neutral-100 dark:bg-black 
          overflow-y-hidden 
          transition-all duration-700 ease-in-out"
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
            <div key={index}>
              <div className="border-b-2 border-neutral-200 dark:border-neutral-800 my-4"></div>
              <HeadingFour title={filterCategory.sectionName} />
              <ul>
                {filterCategory.options
                  .slice(
                    0,
                    expandedSections[filterCategory.sectionName]
                      ? filterCategory.options.length
                      : 5
                  )
                  .map((option, i) => (
                    <li key={i} className="space-x-2">
                      <Link
                        href={generateUrl(
                          {
                            ...filterCategories.reduce(
                              (acc, currentCategory) => ({
                                ...acc,
                                [currentCategory.urlParam]:
                                  currentCategory.selectedValue,
                              }),
                              {}
                            ),
                            [filterCategory.urlParam]: option.slug,
                            [archiveFilter.paramName]: "true",
                          },
                          basePath
                        )}
                      >
                        <RadioButton
                          id={option.slug}
                          name={filterCategory.sectionName}
                          value={option.slug}
                          checked={
                            filterCategory.selectedValue.toLowerCase() ===
                            option.slug.toLowerCase()
                          }
                          label={option.entryName}
                          onChange={(e) =>
                            handleRadioButtonChange(
                              e,
                              filterCategory.sectionName
                            )
                          }
                        />
                      </Link>
                    </li>
                  ))}
              </ul>
              {filterCategory.options.length > 5 && (
                <ExpandCollapseButton
                  isExpanded={expandedSections[filterCategory.sectionName]}
                  onToggle={() => toggleSection(filterCategory.sectionName)}
                  className="your-custom-class-if-needed"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterOverlay;