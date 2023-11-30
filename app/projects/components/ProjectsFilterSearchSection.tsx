"use client";

import generateUrl from "@/actions/generateUrl";
import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import OpenFilterModalButton from "@/components/Filters/Page/OpenFilterModalButton";
import SearchInput from "@/components/Inputs/SearchInput";
import Project from "@/types/projects";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { ArchiveToggle } from "./ArchiveToggle";
import ProjectFilterModal from "./ProjectFilterModal";

type ProjectsFilterSearchSectionProps = {
  allProjects: Project[];
};

const ProjectsFilterSearchSection: React.FC<
  ProjectsFilterSearchSectionProps
> = ({ allProjects }) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const selectedTechnology = searchParams.get("technology") || "All";
  const selectedLanguage = searchParams.get("language") || "All";
  const selectedType = searchParams.get("type") || "All";
  const searchTerm = searchParams.get("search") || "";
  const showArchived = searchParams.get("archived") === "true" || false;
  const basePath = "/projects";

  const router = useRouter();

  /**
   * Opens the modal to filter the projects.
   */
  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  /**
   * Closes the modals.
   * These modals are for filtering and displaying more projects.
   */
  const handleCloseModals = () => {
    setIsFilterModalOpen(false);
  };

  //^ List of options
  /**
   * List of project types to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique project types to the list.
   * Project types are from the 'type' property of each project.
   */
  const projectTypes: string[] = [
    "All",
    ...allProjects
      .map((project: Project) => project.type)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  /**
   * List of programming languages to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique programming languages to the list.
   * Programming languages are from the 'programmingLanguage' property of each project.
   */
  const programmingLanguages: string[] = [
    "All",
    ...allProjects
      .map((project: Project) => project.programmingLanguage)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  /**
   * List of technologies to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique technologies to the list.
   * Technologies are from the 'technologies' property of each project.
   */
  const technologies: string[] = [
    "All",
    ...Array.from(
      new Set(
        allProjects.flatMap((project: Project) => project.technologies || [])
      )
    ),
  ];

  /**
   * Updates the search term in the URL.
   * This is used when the user types in the search input.
   * @param newSearchTerm (string): new search term
   */
  const updateSearchTerm = (newSearchTerm: string) => {
    // Update the URL parameter to reflect the new search term
    router.push(
      generateUrl(
        {
          type: selectedType,
          technology: selectedTechnology,
          language: selectedLanguage,
          search: newSearchTerm,
          archived: true,
        },
        basePath
      )
    );
  };

  /**
   * Resets all the filters.
   * This is used when the user clicks on the 'Reset' button.
   */
  const resetFilters = () => {
    router.push(
      generateUrl(
        {
          type: "All",
          technology: "All",
          language: "All",
          search: "",
          archived: false,
        },
        basePath
      )
    );
  };
  /**
   * Checks if any filters are applied.
   */
  const areFiltersApplied =
    selectedType !== "All" ||
    selectedLanguage !== "All" ||
    selectedTechnology !== "All" ||
    searchTerm !== "";

  return (
    <>
      <div className="flex flex-col md:flex-row items-center w-full mt-12 p-2 gap-4">
        {/* Search input */}
        <div className="w-full md:flex-1">
          <SearchInput
            searchTerm={searchTerm}
            updateSearchTerm={updateSearchTerm}
            placeholder="Search project name or metadata"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row md:flex-1 gap-2 w-full">
          {/* Filter Button */}
          <OpenFilterModalButton
            handleOpenFilterModal={handleOpenFilterModal}
          />
          {/* Clear Button */}
          <ClearAllFiltersButton
            areFiltersApplied={areFiltersApplied}
            resetFilters={resetFilters}
          />
        </div>
      </div>

      {/* Toggle to display archived projects */}
      <ArchiveToggle
        generateUrl={generateUrl}
        showArchived={showArchived}
        filterProps={{
          type: selectedType,
          technology: selectedTechnology,
          language: selectedLanguage,
          search: searchTerm,
        }}
        basePath={basePath}
      />

      {/* Filter Modal */}
      <ProjectFilterModal
        generateUrl={generateUrl}
        resetFilters={resetFilters}
        selectedTechnology={selectedTechnology}
        selectedType={selectedType}
        selectedLanguage={selectedLanguage}
        searchTerm={searchTerm}
        showArchived={showArchived}
        isFilterModalOpen={isFilterModalOpen}
        handleCloseModals={handleCloseModals}
        projectTypes={projectTypes}
        programmingLanguages={programmingLanguages}
        technologies={technologies}
        areFiltersApplied={areFiltersApplied}
        basePath={basePath}
      />
    </>
  );
};

export default ProjectsFilterSearchSection;
