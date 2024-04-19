"use client";

import generateUrl from "@/actions/generateUrl";
import checkForArchivedMaterials from "@/actions/material/checkForArchivedMaterials";
import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/actions/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/actions/material/filter/filterMaterialBySkillCategory";
import generateFilterOptionsByCategory from "@/actions/material/filterOptions/generateFilterOptionsByCategory";
import { generateFilterOptionsBySkillCategories } from "@/actions/material/filterOptions/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/filterOptions/generateFilterOptionsBySkillType";
import generateFilterOptionsForProgrammingLanguages from "@/actions/material/filterOptions/generateFilterOptionsForProgrammingLanguages";
import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import stringToSlug from "@/actions/stringToSlug";
import FilterSection from "@/components/Filters/FilterSection";
import ProjectsList from "@/components/MaterialLists/ProjectsList";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabase from "@/database/projects";
import skillDatabase from "@/database/skills";
import ProjectKeysEnum from "@/enums/DatabaseKeysEnums/ProjectKeysEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import useFuseSearch from "@/hooks/useFuseSearch";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

/**
 * Displays a list of all projects that I have worked on.
 * Also allows the user to search and filter the projects.
 * These projects are displayed into categories.
 * Because this uses hooks, it is a client-side only component.
 *
 * @returns Component showing all the projects, search bar and filters.
 */
const ProjectsView: React.FC = () => {
  //^ Hooks
  const searchParams = useSearchParams();
  const basePath: string = usePathname();
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
  const selectedTechnology: string =
    searchParams.get(technologyParamName) || "all";
  const selectedLanguage: string = searchParams.get(languageParamName) || "all";
  const selectedSection: string = searchParams.get(sectionParamName) || "all";
  const selectedSkillCategory =
    searchParams.get(skillCategoryParamName) || "all";
  const selectedGeneralSkill: string =
    searchParams.get(generalSkillParamName) || "all";
  const selectedSoftSkill: string =
    searchParams.get(softSkillParamName) || "all";

  const searchTerm: string = searchParams.get(searchParamName) || "";
  const showArchived: boolean =
    (searchParams.get(archivedParamName) || "false") === "true";

  //^ Search Settings
  /**
   * Fuse.js options for fuzzy search.
   * These are the only properties that are searched.
   * These are the same ones from the Project type.
   */
  const searchOptions: string[] = [
    "name",
    "category",
    "skills.name",
    "skills.category",
    "skills.relatedSkills.name",
    "skills.relatedSkills.category",
  ];

  let filteredProjectsSlugArray: ProjectKeysEnum[] = useFuseSearch(
    projectDatabase,
    searchTerm,
    searchOptions
  ) as ProjectKeysEnum[];

  //^ Filtering Logic

  // Filter by project type category
  if (stringToSlug(selectedSection) !== "all") {
    filteredProjectsSlugArray = filterMaterialByCategory<ProjectInterface>(
      stringToSlug(selectedSection),
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by programming language
  if (selectedLanguage !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkill(
      selectedLanguage as SkillKeysEnum,
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by technology (assuming you have a similar function for technologies)
  if (selectedTechnology !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkill<ProjectInterface>(
      selectedTechnology as SkillKeysEnum,
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by skill category
  if (stringToSlug(selectedSkillCategory) !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkillCategory<ProjectInterface>(
      filteredProjectsSlugArray,
      projectDatabase,
      stringToSlug(selectedSkillCategory),
      skillDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkill<ProjectInterface>(
      selectedGeneralSkill as SkillKeysEnum,
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkill<ProjectInterface>(
      selectedSoftSkill as SkillKeysEnum,
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by archived status
  filteredProjectsSlugArray = filterMaterialByArchivedStatus<ProjectInterface>(
    showArchived,
    filteredProjectsSlugArray,
    projectDatabase
  ) as ProjectKeysEnum[];

  /**
   * Projects categorized by type.
   */
  const groupedProjects: MaterialGroupInterface[] = groupMaterialsByCategory(
    filteredProjectsSlugArray,
    projectDatabase
  );

  /**
   * Updates the search term in the URL.
   * This is used when the user types in the search input.
   * @param newSearchTerm (string): new search term
   */
  const updateSearchTerm = (newSearchTerm: string) => {
    router.push(
      generateUrl(
        [
          { entryName: sectionParamName, slug: selectedSection },
          { entryName: technologyParamName, slug: selectedTechnology },
          { entryName: languageParamName, slug: selectedLanguage },
          { entryName: skillCategoryParamName, slug: selectedSkillCategory },
          { entryName: generalSkillParamName, slug: selectedGeneralSkill },
          { entryName: softSkillParamName, slug: selectedSoftSkill },
          { entryName: searchParamName, slug: newSearchTerm },
          { entryName: archivedParamName, slug: true.toString() },
        ],
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
      options:
        generateFilterOptionsByCategory<ProjectInterface>(projectDatabase),
    },
    {
      sectionName: "Programming Language",
      urlParam: languageParamName,
      selectedValue: selectedLanguage,
      options: generateFilterOptionsForProgrammingLanguages<ProjectInterface>(
        projectDatabase,
        skillDatabase
      ),
    },
    {
      sectionName: "Technology",
      urlParam: technologyParamName,
      selectedValue: selectedTechnology,
      options: generateFilterOptionsBySkillType<ProjectInterface>(
        projectDatabase,
        skillDatabase,
        SkillTypesEnum.Technology
      ),
    },
    {
      sectionName: "Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: generateFilterOptionsBySkillCategories<ProjectInterface>(
        projectDatabase,
        skillDatabase
      ),
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generateFilterOptionsBySkillType<ProjectInterface>(
        projectDatabase,
        skillDatabase,
        SkillTypesEnum.Technical
      ),
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: generateFilterOptionsBySkillType<ProjectInterface>(
        projectDatabase,
        skillDatabase,
        SkillTypesEnum.Soft
      ),
    },
  ];

  return (
    <>
      <FilterSection
        name={PROJECTS_PAGE.label}
        basePath={basePath}
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        filterCategories={filterCategories}
        showArchived={showArchived}
        generateUrl={generateUrl}
        areFiltersApplied={areFiltersApplied}
        hasArchivedMaterials={checkForArchivedMaterials(projectDatabase)}
      />

      {/* List of projects */}
      <ProjectsList groupedMaterial={groupedProjects} />
    </>
  );
};

export default ProjectsView;
