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
  //^ Hooks
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const basePath = usePathname();
  const router = useRouter();

  //^ URL Params Strings
  const technologyParamName = "technology";
  const languageParamName = "language";
  const sectionParamName = "type";
  const skillCategoryParamName = "category";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";

  const archivedParamName = "archived";
  const searchParamName = "search";

  //^ URL Params Reader
  const selectedTechnology = (
    searchParams.get(technologyParamName) || "all"
  ).toLowerCase();
  const selectedLanguage = (
    searchParams.get(languageParamName) || "all"
  ).toLowerCase();
  const selectedSection = (
    searchParams.get(sectionParamName) || "All"
  ).toLowerCase();
  const selectedSkillCategory = (
    searchParams.get(skillCategoryParamName) || "All"
  ).toLowerCase();
  const selectedGeneralSkill = (
    searchParams.get(generalSkillParamName) || "all"
  ).toLowerCase();
  const selectedSoftSkill = (
    searchParams.get(softSkillParamName) || "all"
  ).toLowerCase();

  const searchTerm = (searchParams.get(searchParamName) || "").toLowerCase();
  const showArchived =
    (searchParams.get(archivedParamName) || "false").toLowerCase() === "true";

  //^ Modal Controls
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

  //^ Search Settings
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
   * List of projects that match the search term.
   */
  const searchedProjects = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : allProjects;

  //^ Group By Type
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

  //^ Filter Options List
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
        allProjects.flatMap((project: Project) =>
          (project.skills || [])
            .filter((skill: Skill) => skill.skillType === "hard")
            .map((skill: Skill) => skill.skill)
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

  const generalSkills: string[] = [
    "All",
    ...Array.from(
      new Set(
        allProjects.flatMap((project: Project) =>
          (project.skills || [])
            .filter((skill: Skill) => skill.skillType === "general")
            .map((skill: Skill) => skill.skill)
        )
      )
    ),
  ];

  const softSkills: string[] = [
    "All",
    ...Array.from(
      new Set(
        allProjects.flatMap((project: Project) =>
          (project.skills || [])
            .filter((skill: Skill) => skill.skillType === "soft")
            .map((skill: Skill) => skill.skill)
        )
      )
    ),
  ];

  //^ Filtering Logic
  /**
   * Updates the search term in the URL.
   * This is used when the user types in the search input.
   * @param newSearchTerm (string): new search term
   */
  const updateSearchTerm = (newSearchTerm: string) => {
    router.push(
      generateUrl(
        {
          [sectionParamName]: selectedSection,
          [technologyParamName]: selectedTechnology,
          [languageParamName]: selectedLanguage,
          [skillCategoryParamName]: selectedSkillCategory,
          [generalSkillParamName]: selectedGeneralSkill,
          [softSkillParamName]: selectedSoftSkill,
          [searchParamName]: newSearchTerm,
          [archivedParamName]: true,
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
      selectedSection === "all" ||
      project.type.toLowerCase() === selectedSection;
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
    const matchesGeneralSkill =
      selectedGeneralSkill === "all" ||
      project.skills.some(
        (skill) =>
          skill.skillType === "general" &&
          skill.skill.toLowerCase() === selectedGeneralSkill
      );
    const matchesSoftSkill =
      selectedSoftSkill === "all" ||
      project.skills.some(
        (skill) =>
          skill.skillType === "soft" &&
          skill.skill.toLowerCase() === selectedSoftSkill
      );

    return (
      matchesType &&
      matchesTechnology &&
      matchesLanguage &&
      matchesArchivedStatus &&
      matchesSkillCategory &&
      matchesGeneralSkill &&
      matchesSoftSkill
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
          [sectionParamName]: "all",
          [technologyParamName]: "all",
          [languageParamName]: "all",
          [skillCategoryParamName]: "all",
          [generalSkillParamName]: "all",
          [softSkillParamName]: "all",
          [searchParamName]: "",
          [archivedParamName]: false,
        },
        basePath
      )
    );
  };
  /**
   * Checks if any filters are applied.
   */
  const areFiltersApplied =
    selectedSection.toLowerCase() !== "all" ||
    selectedLanguage.toLowerCase() !== "all" ||
    selectedTechnology.toLowerCase() !== "all" ||
    selectedSkillCategory.toLowerCase() !== "all" ||
    selectedGeneralSkill.toLowerCase() !== "all" ||
    selectedSoftSkill.toLowerCase() !== "all" ||
    searchTerm !== "";

  const filterCategories: FilterCategory[] = [
    {
      name: "Section",
      urlParam: sectionParamName,
      selectedValue: selectedSection,
      options: projectTypes,
    },
    {
      name: "Programming Language",
      urlParam: languageParamName,
      selectedValue: selectedLanguage,
      options: programmingLanguages,
    },
    {
      name: "Technology",
      urlParam: technologyParamName,
      selectedValue: selectedTechnology,
      options: technologies,
    },
    {
      name: "Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: categories,
    },
    {
      name: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generalSkills,
    },
    {
      name: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: softSkills,
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
          type: selectedSection,
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
