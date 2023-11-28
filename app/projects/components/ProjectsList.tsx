"use client";

import Button from "@/components/Atoms/Button";
import SearchInput from "@/components/Inputs/SearchInput";
import HeadingOne from "@/components/Text/HeadingOne";
import Project from "@/types/projects";
import Fuse from "fuse.js";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { ArchiveToggle } from "./ArchiveToggle";
import ProjectFilterModal from "./ProjectFilterModal";
import ProjectsListSection from "./ProjectListSection";
import FilterParams from "@/types/FilterParams";
import generateUrl from "@/actions/generateUrl";
import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import OpenFilterModalButton from "@/components/Filters/Page/OpenFilterModalButton";

type ProjectsListProps = {
  allProjects: Project[];
};

const ProjectsList: React.FC<ProjectsListProps> = ({ allProjects }) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const selectedTechnology = searchParams.get("technology") || "All";
  const selectedLanguage = searchParams.get("language") || "All";
  const selectedType = searchParams.get("type") || "All";
  const searchTerm = searchParams.get("search") || "";
  const showArchived = searchParams.get("archived") === "true" || false;

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

  /**
   * Fuse.js options for fuzzy search.
   * These are the only properties that are searched.
   * These are the same ones from the Project type.
   */
  const searchOptions = {
    keys: ["name", "programmingLanguage", "tags", "technologies"], // Only search these properties
    threshold: 0.3, // Lower threshold means more results
  };

  /**
   * Fuse object that is used to search the projects.
   * @param allProjects (Project[]): list of all projects
   * @param options (Fuse.IFuseOptions<Project>): options for fuzzy search
   */
  const fuse = new Fuse(allProjects, searchOptions);

  /**
   * Groups the projects by type.
   * Each project type is a key in the object.
   * @param projects (Project[]): list of projects to be grouped by type
   * @returns (Record<string, Project[]>): object with project types as keys and list of projects as values
   */
  const groupProjectsByType = (
    projects: Project[]
  ): Record<string, Project[]> => {
    return projects.reduce<Record<string, Project[]>>((grouped, project) => {
      (grouped[project.type] = grouped[project.type] || []).push(project);
      return grouped;
    }, {});
  };

  /**
   * List of projects that match the search term.
   */
  const searchedProjects = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : allProjects;

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
      generateUrl({
        type: selectedType,
        technology: selectedTechnology,
        language: selectedLanguage,
        search: newSearchTerm,
        archived: true,
      })
    );
  };

  /**
   * Filters the projects based on the the filter options.
   * Both language and type can be filtered.
   * If 'All' is selected, then all projects are displayed.
   * Archived projects are not displayed by default.
   */
  const filteredProjects = searchedProjects.filter(
    (project) =>
      (showArchived || !project.archived) &&
      (selectedType === "All" || project.type === selectedType) &&
      (selectedLanguage === "All" ||
        project.programmingLanguage === selectedLanguage) &&
      (selectedTechnology === "All" ||
        (project.technologies &&
          project.technologies.includes(selectedTechnology)))
  );

  /**
   * Projects categorized by type.
   */
  const groupedProjects = groupProjectsByType(filteredProjects);

  /**
   * Resets all the filters.
   * This is used when the user clicks on the 'Reset' button.
   */
  const resetFilters = () => {
    router.push(
      generateUrl({
        type: "All",
        technology: "All",
        language: "All",
        search: "",
        archived: false,
      })
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
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Projects" />

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
        />

        {/* List of projects */}
        <ProjectsListSection groupedProjects={groupedProjects} />
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
        />
      </div>
    </section>
  );
};

export default ProjectsList;
