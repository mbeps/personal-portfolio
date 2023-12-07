"use client";

import React from "react";
import Modal from "@/components/Modal/Modal";
import RadioButton from "@/components/Inputs/RadioButton";
import ClearAllFiltersButton from "@/components/Filters/Modal/ClearAllFiltersButton";
import CloseFilterModalButton from "@/components/Filters/Modal/CloseFilterModalButton";
import Link from "next/link";
import FilterParams from "@/types/FilterParams";
import { ArchiveToggle } from "../ArchiveToggle";
import Grid from "@/components/Atoms/Grid";

export interface FilterCategory {
  name: string;
  selectedValue: string;
  options: string[];
}

interface FilterModalProps {
  filterCategories: FilterCategory[];
  resetFilters: () => void;
  generateUrl: (filters: FilterParams, basePath: string) => string;
  showArchived: boolean;
  isFilterModalOpen: boolean;
  handleCloseModals: () => void;
  areFiltersApplied: boolean;
  basePath: string;
  description: string;
}

const FilterModal: React.FC<FilterModalProps> = ({
  filterCategories,
  resetFilters,
  generateUrl,
  showArchived,
  isFilterModalOpen,
  handleCloseModals,
  areFiltersApplied,
  basePath,
  description,
}) => {
  const filterParams: FilterParams = filterCategories.reduce(
    (acc, category) => ({
      ...acc,
      [category.name.toLowerCase()]: category.selectedValue,
    }),
    { archived: showArchived }
  );

  return (
    <div>
      <Modal
        isOpen={isFilterModalOpen}
        onClose={handleCloseModals}
        title={"Filters"}
        className="w-full md:max-w-3x lg:max-w-4xl max-h-[70vh] min-h-[50vh]"
      >
        <div
          className="
            px-8 md:px-0
            flex flex-row 
            justify-center 
						mb-4 -mt-4  
          "
        >
          <div className="flex flex-row w-full justify-center space-x-2 ">
            <p className="text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          </div>
        </div>

        {/* Filter Options */}
        <Grid
          items={filterCategories.map((category) => (
            <div key={category.name} className="w-full">
              <label
                htmlFor={`${category.name}-dropdown`}
                className="font-semibold text-lg"
              >
                {category.name}
              </label>
              <div className="h-64 md:h-78 overflow-y-auto space-y-2">
                {category.options.map((option) => (
                  <Link
                    href={generateUrl(
                      {
                        ...filterParams,
                        [category.name.toLowerCase()]: option,
                        archived: true,
                      },
                      basePath
                    )}
                    key={option}
                  >
                    <RadioButton
                      id={option}
                      name={category.name}
                      value={option}
                      checked={
                        category.selectedValue.toLowerCase() ===
                        option.toLowerCase()
                      }
                      label={option}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        />

        <ArchiveToggle
          generateUrl={generateUrl}
          showArchived={showArchived}
          filterProps={filterParams}
          basePath={basePath}
        />

        {/* Bottom Buttons */}
        <div className="w-full flex flex-row justify-center mt-4">
          <div className="flex flex-col md:flex-row w-full md:w-1/2 px-4 md:px-0 py-4 md:py-2 md:space-x-2 space-y-2 md:space-y-0 justify-center items-center">
            <ClearAllFiltersButton
              resetFilters={resetFilters}
              areFiltersApplied={areFiltersApplied}
            />
            <CloseFilterModalButton handleCloseModals={handleCloseModals} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FilterModal;
