import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";
import RadioButton from "../../Inputs/RadioButton";
import HeadingFour from "../../Text/HeadingFour";
import HeadingThree from "../../Text/HeadingThree";
import FilterCategory from "@/types/FilterCategory";

interface FilterOverlayProps {
  filterCategories: FilterCategory[];
  generateUrl: (params: Record<string, string>, basePath: string) => string;
  basePath: string;
  isOpen: boolean;
  toggle: () => void;
}

const FilterOverlay: React.FC<FilterOverlayProps> = ({
  filterCategories,
  generateUrl,
  basePath,
  isOpen,
  toggle,
}) => {
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
      className={`fixed top-0 right-0 h-screen w-full md:w-[25rem] z-20 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-all duration-700 ease-in-out bg-none flex flex-col px-2 pb-3`}
    >
      <div
        className={`mt-auto h-[calc(100vh-6rem)] shadow-2xl rounded-2xl w-full border-1.5 border-neutral-200 dark:border-neutral-700 overflow-y-auto px-4 py-4 bg-neutral-100 dark:bg-black transition-all duration-700 ease-in-out`}
      >
        <div className="flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <HeadingThree title="Filters" />
            <button onClick={toggle}>
              <span className="sr-only">Close</span>
              <IoClose
                className="h-7 w-7 hover:text-red-500 transition-colors duration-500 ease-in-out"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {filterCategories.map((filterCategory, index) => (
          <div key={index}>
            <HeadingFour title={filterCategory.sectionName} />
            <ul>
              {filterCategory.options.map((option, i) => {
                const selectedOptions = filterCategories.reduce(
                  (acc, currentCategory) => {
                    return {
                      ...acc,
                      [currentCategory.urlParam]: currentCategory.selectedValue,
                    };
                  },
                  {}
                );

                return (
                  <li key={i}>
                    <Link
                      href={generateUrl(
                        {
                          ...selectedOptions,
                          [filterCategory.urlParam]: option.slug,
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
                          handleRadioButtonChange(e, filterCategory.sectionName)
                        }
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterOverlay;
