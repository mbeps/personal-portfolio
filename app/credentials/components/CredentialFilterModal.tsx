"use client";

import { ArchiveToggle } from "@/app/projects/components/ArchiveToggle";
import Button from "@/components/Atoms/Button";
import RadioButton from "@/components/Inputs/RadioButton";
import Modal from "@/components/Modal/Modal";
import FilterParams from "@/types/FilterParams";
import Link from "next/link";
import React from "react";
import { AiOutlineClear } from "react-icons/ai";
import { MdClear } from "react-icons/md";

type CredentialFilterModalProps = {
  generateUrl: (filters: FilterParams) => string;
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
                href={generateUrl({
                  ...filterParams,
                  issuer,
                  archived: !showArchived,
                })}
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
                href={generateUrl({
                  ...filterParams,
                  category,
                  archived: !showArchived,
                })}
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
          <Button
            variant="outlined"
            onClick={resetFilters}
            disabled={!areFiltersApplied}
            className="w-full"
          >
            <div className="flex items-center justify-center space-x-2">
              <AiOutlineClear fontSize={24} />
              <span>Clear</span>
            </div>
          </Button>
          {/* Close Modal Button */}
          <Button
            variant="filled"
            onClick={handleCloseModals}
            className="w-full"
          >
            <div className="flex items-center justify-center space-x-2">
              <MdClear fontSize={24} />
              <span>Close</span>
            </div>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CredentialFilterModal;