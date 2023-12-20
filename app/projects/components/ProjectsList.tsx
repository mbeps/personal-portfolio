"use client";

import generateUrl from "@/actions/generateUrl";

import stringToSlug from "@/actions/stringToSlug";
import FilterOverlay from "@/components/Filters/FilterPanel/FilterPanel";
import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import ToggleFilterButton from "@/components/Filters/Page/ToggleFilterButton";
import SearchInput from "@/components/Inputs/SearchInput";
import FilterCategory from "@/types/filters/FilterCategory";
import FilterOption from "@/types/filters/FilterOption";
import Project from "@/types/projects";
import { Skill } from "@/types/skills";
import Fuse from "fuse.js";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { ArchiveToggle } from "../../../components/Filters/ArchiveToggle";
import ProjectsListSection from "./ProjectListSection";

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
  const selectedSection = searchParams.get(sectionParamName) || "all";
  const selectedSkillCategory =
    searchParams.get(skillCategoryParamName) || "all";
  const selectedGeneralSkill = searchParams.get(generalSkillParamName) || "all";
  const selectedSoftSkill = searchParams.get(softSkillParamName) || "all";

  const searchTerm = searchParams.get(searchParamName) || "";
  const showArchived =
    (searchParams.get(archivedParamName) || "false") === "true";

  //^ Modal Controls
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
      "technologySkills.skill",
      "technologySkills.category",
      "technologySkills.skill.skill",
      "softSkills.skill",
      "softSkills.category",
      "extraTechnicalGeneralSkills.skill",
      "extraTechnicalGeneralSkills.category",
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
    // .sort((a, b) => a.entryName.localeCompare(b.entryName)),
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
        (project.technologySkills || []).map((skill: Skill) => ({
          slug: skill.slug,
          entryName: skill.skill,
        }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const categories: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allProjects
      .flatMap(
        (project: Project) =>
          project.technologySkills
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
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const generalSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allProjects
      .flatMap((project: Project) =>
        project.technologySkills.flatMap((skill: Skill) =>
          skill.skills
            ? skill.skills.map((subSkill: Skill) => ({
                slug: subSkill.slug,
                entryName: subSkill.skill,
              }))
            : []
        )
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const softSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...allProjects
      .flatMap((project: Project) =>
        (project.softSkills || []).map((skill: Skill) => ({
          slug: skill.slug,
          entryName: skill.skill,
        }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  //^ Filtering Logic
  /**
   * Filters the projects based on the the filter options.
   * Both language and type can be filtered.
   * If 'All' is selected, then all projects are displayed.
   * Archived projects are not displayed by default.
   */
  const filteredProjects = searchedProjects.filter((project: Project) => {
    const matchesType =
      stringToSlug(selectedSection) === "all" ||
      stringToSlug(project.type) === stringToSlug(selectedSection);

    const matchesProgrammingLanguage =
      selectedLanguage === "all" ||
      project.programmingLanguage.slug === selectedLanguage;

    const matchesTechnology =
      selectedTechnology === "all" ||
      (project.technologySkills || []).some(
        (skill) => skill.slug === selectedTechnology
      );

    const matchesCategory =
      stringToSlug(selectedSkillCategory) === "all" ||
      (project.technologySkills || []).some(
        (skill) =>
          stringToSlug(skill.category) === stringToSlug(selectedSkillCategory)
      );

    const matchesGeneralSkill =
      selectedGeneralSkill === "all" ||
      (project.technologySkills || []).some(
        (skill) =>
          (skill.skillType === "general" &&
            stringToSlug(skill.slug) === stringToSlug(selectedGeneralSkill)) ||
          (skill.skills || []).some(
            (nestedSkill) =>
              stringToSlug(nestedSkill.slug) ===
              stringToSlug(selectedGeneralSkill)
          )
      );

    const matchesSoftSkill =
      selectedSoftSkill === "all" ||
      (project.softSkills || []).some(
        (skill) => stringToSlug(skill.slug) === stringToSlug(selectedSoftSkill)
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
   * Checks if any filters are applied.
   */
  const areFiltersApplied =
    selectedSection !== "all" ||
    selectedTechnology !== "all" ||
    selectedLanguage !== "all" ||
    selectedSkillCategory !== "all" ||
    selectedGeneralSkill !== "all" ||
    selectedSoftSkill !== "all" ||
    searchTerm !== "" ||
    showArchived;

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
          <ToggleFilterButton toggleFilter={handleToggleFilter} />
          {/* Clear Button */}
          <ClearAllFiltersButton
            areFiltersApplied={areFiltersApplied}
            basePath={basePath}
          />
        </div>
      </div>

      {/* Toggle to display archived projects */}
      <ArchiveToggle
        generateUrl={generateUrl}
        showArchived={showArchived}
        filterProps={{
          [sectionParamName]: selectedSection,
          [technologyParamName]: selectedTechnology,
          [languageParamName]: selectedLanguage,
          [skillCategoryParamName]: selectedSkillCategory,
          [generalSkillParamName]: selectedGeneralSkill,
          [softSkillParamName]: selectedSoftSkill,
          [searchParamName]: searchTerm,
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
        archiveFilter={{
          paramName: archivedParamName,
          status: showArchived,
        }}
      />
    </>
  );
};

export default ProjectsList;
