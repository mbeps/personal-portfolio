"use client";

import Button from "@/components/Atoms/Button";
import RadioButton from "@/components/Inputs/RadioButton";
import Modal from "@/components/Modal/Modal";
import Link from "next/link";
import React from "react";
import { AiOutlineClear } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { ArchiveToggle } from "./ArchiveToggle";
import FilterParams from "@/types/FilterParams";
import ClearAllFiltersButton from "@/components/Filters/Modal/ClearAllFiltersButton";
import CloseFilterModalButton from "@/components/Filters/Modal/CloseFilterModalButton";

interface ProjectFilterModalProps {
  resetFilters: () => void;
  generateUrl: (filters: FilterParams) => string;
  selectedTechnology: string;
  selectedType: string;
  selectedLanguage: string;
  searchTerm: string;
  showArchived: boolean;
  isFilterModalOpen: boolean;
  handleCloseModals: () => void;
  projectTypes: string[];
  programmingLanguages: string[];
  technologies: string[];
  areFiltersApplied: boolean;
}

/**
 * Modal used for filtering projects.
 * User can filter by type, language, and technology.
 * Users can also toggle to show archived projects.
 * Applying filters automatically shows archived projects.
 * @param resetFilters () => void - function to reset filters
 * @param generateUrl (type: string, technology: string, language: string, search: string, showArchived?: boolean) => string - function to generate URL for storing filters as state
 * @param selectedTechnology (string) - selected technology
 * @param selectedType (string) - selected type
 * @param selectedLanguage (string) - selected language
 * @param searchTerm (string) - search term
 * @param showArchived (boolean) - boolean to check if archived projects are shown
 * @param isFilterModalOpen (boolean) - boolean to check if filter modal is open
 * @param handleCloseModals () => void - function to close modals
 * @param projectTypes (string[]) - list of project types
 * @param programmingLanguages (string[]) - list of programming languages
 * @param technologies (string[]) - list of technologies
 * @param areFiltersApplied (boolean) - boolean to check if filters are applied
 * @returns (JSX.Element) - filter modal for projects
 */
const ProjectFilterModal: React.FC<ProjectFilterModalProps> = ({
  generateUrl,
  resetFilters,
  selectedTechnology,
  selectedType,
  selectedLanguage,
  searchTerm,
  showArchived,
  isFilterModalOpen,
  handleCloseModals,
  projectTypes,
  programmingLanguages,
  technologies,
  areFiltersApplied,
}) => {
  const filterParams: FilterParams = {
    type: selectedType,
    technology: selectedTechnology,
    language: selectedLanguage,
    search: searchTerm,
    archived: showArchived,
  };
  return (
    <div>
      {" "}
      <Modal
        isOpen={isFilterModalOpen}
        onClose={handleCloseModals}
        title={"Project Filters"}
        className="sm:max-w-4xl w-full sm:w-full max-h-[70vh] min-h-[50vh]"
      >
        <div
          className="
            px-8 md:px-0
            flex flex-row 
            justify-center mb-4  
          "
        >
          <div className="flex flex-row w-full justify-center space-x-2 ">
            <p className="text-neutral-600 dark:text-neutral-400">
              Filters are applied automatically as you select them. Searching
              and filtering automatically show archived projects.
            </p>
          </div>
        </div>
        {/* Filter Options */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-3 
            gap-2 
            px-5 md:px-0
            "
        >
          <div>
            {/* Category Filter */}
            <label htmlFor="type-dropdown" className="font-semibold text-lg">
              Category
            </label>
            <div className="h-64 md:h-80 overflow-y-auto space-y-2">
              {projectTypes.map((type) => (
                <Link
                  href={generateUrl({
                    ...filterParams,
                    type,
                    archived: true,
                  })}
                  key={type}
                >
                  <RadioButton
                    id={type}
                    name="projectType"
                    value={type}
                    checked={selectedType === type}
                    label={type}
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* Language Filter */}
          <div>
            <label
              htmlFor="language-dropdown"
              className="font-semibold text-lg"
            >
              Language
            </label>
            <div className="h-64 md:h-80 overflow-y-auto space-y-2">
              {programmingLanguages.map((language) => (
                <Link
                  href={generateUrl({
                    ...filterParams,
                    language,
                    archived: true,
                  })}
                  key={language}
                >
                  <RadioButton
                    id={language}
                    name="projectType"
                    value={language}
                    checked={selectedLanguage === language}
                    label={language}
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* Technology Filter */}
          <div>
            <label
              htmlFor="language-dropdown"
              className="font-semibold text-lg block"
            >
              Technologies
            </label>
            <div className="h-64 md:h-80 overflow-y-auto space-y-2">
              {technologies.map((technology) => (
                <Link
                  href={generateUrl({
                    ...filterParams,
                    technology,
                    archived: true,
                  })}
                  key={technology}
                >
                  <RadioButton
                    id={technology}
                    name="projectType"
                    value={technology}
                    checked={selectedTechnology === technology}
                    label={technology}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Toggle to display archived projects */}

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
            <ClearAllFiltersButton
              resetFilters={resetFilters}
              areFiltersApplied={areFiltersApplied}
            />
            {/* Close Modal Button */}
            <CloseFilterModalButton handleCloseModals={handleCloseModals} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectFilterModal;
