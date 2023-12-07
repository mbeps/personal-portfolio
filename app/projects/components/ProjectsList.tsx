"use client";

import generateUrl from "@/actions/generateUrl";
import FilterModal, {
  FilterCategory,
} from "@/components/Filters/Modal/FIlterModal";
import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import OpenFilterModalButton from "@/components/Filters/Page/OpenFilterModalButton";
import SearchInput from "@/components/Inputs/SearchInput";
import Project from "@/types/projects";
import Fuse from "fuse.js";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { ArchiveToggle } from "../../../components/Filters/ArchiveToggle";
import ProjectsListSection from "./ProjectListSection";
import { Skill } from "@/types/skills";

type ProjectsListProps = {
  allProjects: Project[];
};

const ProjectsList: React.FC<ProjectsListProps> = ({ allProjects }) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const selectedTechnology = (
    searchParams.get("technology") || "all"
  ).toLowerCase();
  const selectedLanguage = (
    searchParams.get("language") || "all"
  ).toLowerCase();
  const selectedType = (searchParams.get("type") || "All").toLowerCase();
  const searchTerm = (searchParams.get("search") || "").toLowerCase();
  const showArchived =
    (searchParams.get("archived") || "false").toLowerCase() === "true";
  const selectedSkillCategory = (
    searchParams.get("category") || "All"
  ).toLowerCase();
  const basePath = usePathname();

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
    keys: [
      "name",
      "programmingLanguage.skill",
      "skills.skill",
      "skills.category",
      "tags",
    ],
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
      .map((project: Project) => project.programmingLanguage.skill)
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
        allProjects.flatMap(
          (project: Project) =>
            project.skills?.map((tech: Skill) => tech.skill) || []
        )
      )
    ),
  ];

  const categories: string[] = [
    "All",
    ...Array.from(
      new Set(
        allProjects.flatMap(
          (project: Project) =>
            project.skills
              ?.map((skill: Skill) => skill.category)
              .filter(Boolean) || []
        )
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
          category: selectedSkillCategory,
        },
        basePath
      )
    );
  };

  /**
   * Filters the projects based on the the filter options.
   * Both language and type can be filtered.
   * If 'All' is selected, then all projects are displayed.
   * Archived projects are not displayed by default.
   */
  const filteredProjects = searchedProjects.filter((project: Project) => {
    const matchesType =
      selectedType === "all" || project.type.toLowerCase() === selectedType;
    const matchesTechnology =
      selectedTechnology === "all" ||
      (project.skills || [])
        .map((tech: Skill) => tech.skill.toLowerCase())
        .includes(selectedTechnology);
    const matchesLanguage =
      selectedLanguage === "all" ||
      project.programmingLanguage.skill.toLowerCase() === selectedLanguage;
    const matchesArchivedStatus = showArchived || !project.archived;
    const matchesSkillCategory =
      selectedSkillCategory === "all" ||
      project.skills.some(
        (skill) => skill.category?.toLowerCase() === selectedSkillCategory
      );

    return (
      matchesType &&
      matchesTechnology &&
      matchesLanguage &&
      matchesArchivedStatus &&
      matchesSkillCategory
    );
  });

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
      generateUrl(
        {
          type: "all",
          technology: "all",
          language: "all",
          search: "",
          archived: false,
          category: "all",
        },
        basePath
      )
    );
  };
  /**
   * Checks if any filters are applied.
   */
  const areFiltersApplied =
    selectedType.toLowerCase() !== "all" ||
    selectedLanguage.toLowerCase() !== "all" ||
    selectedTechnology.toLowerCase() !== "all" ||
    searchTerm !== "";
  selectedSkillCategory.toLowerCase() !== "all";

  const filterCategories: FilterCategory[] = [
    {
      name: "Type",
      selectedValue: selectedType,
      options: projectTypes,
    },
    {
      name: "Language",
      selectedValue: selectedLanguage,
      options: programmingLanguages,
    },
    {
      name: "Technology",
      selectedValue: selectedTechnology,
      options: technologies,
    },
    {
      name: "Category",
      selectedValue: selectedSkillCategory,
      options: categories,
    },
  ];

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

      {/* List of projects */}
      <ProjectsListSection groupedProjects={groupedProjects} />
      {/* Filter Modal */}
      <FilterModal
        filterCategories={filterCategories}
        resetFilters={resetFilters}
        generateUrl={generateUrl} // Ensure you have this function defined or imported
        showArchived={showArchived}
        isFilterModalOpen={isFilterModalOpen}
        handleCloseModals={handleCloseModals}
        areFiltersApplied={areFiltersApplied}
        basePath={basePath}
        description={`
        Filters are applied automatically as you select them. Searching
        and filtering automatically show archived projects.`}
      />
    </>
  );
};

export default ProjectsList;
