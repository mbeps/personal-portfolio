"use client";

import generateUrl from "@/actions/generateUrl";

import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import SearchInput from "@/components/Inputs/SearchInput";
import Project from "@/types/projects";
import Fuse from "fuse.js";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { ArchiveToggle } from "../../../components/Filters/ArchiveToggle";
import ProjectsListSection from "./ProjectListSection";
import { Skill } from "@/types/skills";
import FilterOption from "@/types/FilterOption";
import stringToSlug from "@/actions/stringToSlug";
import FilterCategory from "@/types/FilterCategory";
import OpenFilterButton from "@/components/Filters/Page/OpenFilterPanelButton";
import FilterOverlay from "@/components/Filters/FilterPanel/FilterPanel";
import HeadingFour from "@/components/Text/HeadingFour";

type ProjectsListProps = {
  allProjects: Project[];
};

const ProjectsList: React.FC<ProjectsListProps> = ({ allProjects }) => {
  //^ Hooks
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
  const selectedTechnology = searchParams.get(technologyParamName) || "all";
  const selectedLanguage = searchParams.get(languageParamName) || "all";
  const selectedSection = searchParams.get(sectionParamName) || "All";
  const selectedSkillCategory =
    searchParams.get(skillCategoryParamName) || "All";
  const selectedGeneralSkill = searchParams.get(generalSkillParamName) || "all";
  const selectedSoftSkill = searchParams.get(softSkillParamName) || "all";

  const searchTerm = searchParams.get(searchParamName) || "";
  const showArchived =
    (searchParams.get(archivedParamName) || "false").toLowerCase() === "true";

  //^ Modal Controls
  /**
   * Opens the modal to filter the projects.
   */
  const handleOpenFilterModal = () => {
    setIsFilterOpen(true);
  };

  /**
   * Closes the modals.
   * These modals are for filtering and displaying more projects.
   */
  const handleCloseModals = () => {
    setIsFilterOpen(false);
  };

  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
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
  const projectTypes: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allProjects
      .map((project: Project) => ({
        slug: stringToSlug(project.type),
        entryName: project.type,
      }))
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.slug === value.slug) === index
      ),
  ];

  /**
   * List of programming languages to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique programming languages to the list.
   * Programming languages are from the 'programmingLanguage' property of each project.
   */
  const programmingLanguages: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allProjects
      .map((project: Project) => ({
        slug: project.programmingLanguage.slug,
        entryName: project.programmingLanguage.skill,
      }))
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
  ];

  /**
   * List of technologies to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique technologies to the list.
   * Technologies are from the 'technologies' property of each project.
   */
  const technologies: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allProjects
      .flatMap((project: Project) =>
        (project.skills || [])
          .filter((skill: Skill) => skill.skillType === "hard")
          .map((skill: Skill) => ({
            slug: skill.slug,
            entryName: skill.skill,
          }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
  ];

  const categories: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allProjects
      .flatMap(
        (project: Project) =>
          project.skills
            ?.map((skill: Skill) => ({
              slug: stringToSlug(skill.category),
              entryName: skill.category,
            }))
            .filter(Boolean) || []
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
  ];

  const generalSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allProjects
      .flatMap((project: Project) =>
        (project.skills || [])
          .filter((skill: Skill) => skill.skillType === "general")
          .map((skill: Skill) => ({
            slug: skill.slug,
            entryName: skill.skill,
          }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
  ];

  const softSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allProjects
      .flatMap((project: Project) =>
        (project.skills || [])
          .filter((skill: Skill) => skill.skillType === "soft")
          .map((skill: Skill) => ({
            slug: skill.slug,
            entryName: skill.skill,
          }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[]),
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
          [searchParamName]: newSearchTerm, // only this changes
          [archivedParamName]: true.toString(),
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
      selectedSection.toLowerCase() === "all" ||
      stringToSlug(project.type).toLowerCase() ===
        stringToSlug(selectedSection).toLowerCase();

    const matchesProgrammingLanguage =
      selectedLanguage.toLowerCase() === "all" ||
      stringToSlug(project.programmingLanguage.slug).toLowerCase() ===
        stringToSlug(selectedLanguage).toLowerCase();

    const matchesTechnology =
      selectedTechnology.toLowerCase() === "all" ||
      (project.skills || []).some(
        (skill) =>
          skill.skillType === "hard" &&
          stringToSlug(skill.slug).toLowerCase() ===
            stringToSlug(selectedTechnology).toLowerCase()
      );

    const matchesCategory =
      selectedSkillCategory.toLowerCase() === "all" ||
      (project.skills || []).some(
        (skill) =>
          stringToSlug(skill.category).toLowerCase() ===
          stringToSlug(selectedSkillCategory).toLowerCase()
      );

    const matchesGeneralSkill =
      selectedGeneralSkill.toLowerCase() === "all" ||
      (project.skills || []).some(
        (skill) =>
          skill.skillType === "general" &&
          stringToSlug(skill.slug).toLowerCase() ===
            stringToSlug(selectedGeneralSkill).toLowerCase()
      );

    const matchesSoftSkill =
      selectedSoftSkill.toLowerCase() === "all" ||
      (project.skills || []).some(
        (skill) =>
          skill.skillType === "soft" &&
          stringToSlug(skill.slug).toLowerCase() ===
            stringToSlug(selectedSoftSkill).toLowerCase()
      );

    const matchesArchivedStatus = showArchived || !project.archived;

    return (
      matchesType &&
      matchesProgrammingLanguage &&
      matchesTechnology &&
      matchesCategory &&
      matchesGeneralSkill &&
      matchesSoftSkill &&
      matchesArchivedStatus
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
          [archivedParamName]: false.toString(),
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
      sectionName: "Section",
      urlParam: sectionParamName,
      selectedValue: selectedSection,
      options: projectTypes,
    },
    {
      sectionName: "Programming Language",
      urlParam: languageParamName,
      selectedValue: selectedLanguage,
      options: programmingLanguages,
    },
    {
      sectionName: "Technology",
      urlParam: technologyParamName,
      selectedValue: selectedTechnology,
      options: technologies,
    },
    {
      sectionName: "Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: categories,
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generalSkills,
    },
    {
      sectionName: "Soft Skill",
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
          <OpenFilterButton handleOpenFilterModal={handleOpenFilterModal} />
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
      <FilterOverlay
        isOpen={isFilterOpen}
        toggle={handleToggleFilter}
        filterCategories={filterCategories}
        generateUrl={generateUrl}
        basePath={basePath}
      />
    </>
  );
};

export default ProjectsList;
