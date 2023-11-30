"use client";

import { ArchiveToggle } from "@/app/projects/components/ArchiveToggle";
import ClearAllFiltersButton from "@/components/Filters/Modal/ClearAllFiltersButton";
import CloseFilterModalButton from "@/components/Filters/Modal/CloseFilterModalButton";
import RadioButton from "@/components/Inputs/RadioButton";
import Modal from "@/components/Modal/Modal";
import FilterParams from "@/types/FilterParams";
import Link from "next/link";
import React from "react";

type CredentialFilterModalProps = {
  generateUrl: (filters: FilterParams, basePath: string) => string;
  areFiltersApplied: boolean;
  resetFilters: () => void;
  isFilterModalOpen: boolean;
  handleCloseModals: () => void;
  certificateCategories: string[];
  certificateIssuers: string[];
  selectedCategory: string;
  selectedIssuer: string;
  searchTerm: string;
  showArchived: boolean;
  basePath: string;
};

const CredentialFilterModal: React.FC<CredentialFilterModalProps> = ({
  areFiltersApplied,
  certificateCategories,
  certificateIssuers,
  generateUrl,
  handleCloseModals,
  isFilterModalOpen,
  resetFilters,
  searchTerm,
  selectedCategory,
  selectedIssuer,
  showArchived,
  basePath,
}) => {
  const filterParams: FilterParams = {
    issuer: selectedIssuer,
    category: selectedCategory,
    search: searchTerm,
    archived: showArchived,
  };

  return (
    <Modal
      isOpen={isFilterModalOpen}
      onClose={handleCloseModals}
      title="Certificate Filters"
      className="sm:max-w-3xl w-full sm:w-full max-h-[70vh] min-h-[50vh]"
    >
      {/* Modal Content Here */}
      <div className="px-8 md:px-0 flex flex-row justify-center mb-4">
        <p className="text-neutral-600 dark:text-neutral-400">
          Filters are applied automatically as you select them. Searching and
          filtering automatically show archived certificates.
        </p>
      </div>

      {/* Filter Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-5 md:px-0">
        {/* Issuer Filter */}
        <div>
          <label htmlFor="issuer-dropdown" className="font-semibold text-lg">
            Issuer
          </label>
          <div className="h-48 md:h-64 overflow-y-auto space-y-2">
            {certificateIssuers.map((issuer) => (
              <Link
                href={generateUrl(
                  {
                    ...filterParams,
                    issuer,
                    archived: true,
                  },
                  basePath
                )}
                key={issuer}
              >
                <RadioButton
                  id={issuer}
                  name="certificateIssuer"
                  value={issuer}
                  checked={selectedIssuer === issuer}
                  label={issuer}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label htmlFor="category-dropdown" className="font-semibold text-lg">
            Category
          </label>
          <div className="h-48 md:h-64 overflow-y-auto space-y-2">
            {certificateCategories.map((category) => (
              <Link
                key={category}
                href={generateUrl(
                  {
                    ...filterParams,
                    category,
                    archived: true,
                  },
                  basePath
                )}
              >
                <RadioButton
                  key={category}
                  id={category}
                  name="certificateCategory"
                  value={category}
                  checked={selectedCategory === category}
                  label={category}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-0">
        <ArchiveToggle
          generateUrl={generateUrl}
          showArchived={showArchived}
          filterProps={filterParams}
          basePath={basePath}
        />
      </div>

      {/* Filter Modal Bottom Buttons */}
      <div className="w-full flex flex-row justify-center mt-4 ">
        <div
          className="
              flex flex-col md:flex-row 
              w-full md:w-1/2 
              px-4 md:px-0
              py-4 md:py-2
              md:space-x-2 space-y-2 md:space-y-0
              justify-center items-center"
        >
          {/* Clear Filters Button */}
          <ClearAllFiltersButton
            resetFilters={resetFilters}
            areFiltersApplied={areFiltersApplied}
          />
          {/* Close Modal Button */}
          <CloseFilterModalButton handleCloseModals={handleCloseModals} />
        </div>
      </div>
    </Modal>
  );
};

export default CredentialFilterModal;
