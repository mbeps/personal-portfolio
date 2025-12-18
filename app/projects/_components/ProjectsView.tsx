"use client";

import checkForArchivedMaterials from "@/lib/material/checkForArchivedMaterials";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/lib/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/lib/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/lib/material/filter/filterMaterialBySkillCategory";
import generateFilterOptionsByCategory from "@/lib/material/filter-options/generateFilterOptionsByCategory";
import { generateFilterOptionsBySkillCategories } from "@/lib/material/filter-options/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/lib/material/filter-options/generateFilterOptionsBySkillType";
import generateFilterOptionsForProgrammingLanguages from "@/lib/material/filter-options/generateFilterOptionsForProgrammingLanguages";
import stringToSlug from "@/lib/stringToSlug";
import FilterSection from "@/components/filters/FilterSection";
import ProjectsList from "@/components/material-lists/ProjectsList";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabaseMap from "@/database/projects/ProjectDatabaseMap";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import ProjectInterface from "@/database/projects/ProjectInterface";
import React from "react";
import { usePathname } from "next/navigation";
import filterProjectsByType from "@/lib/material/filter/filterProjectsByType";
import generateFilterOptionsByType from "@/lib/material/filter-options/generateFilterOptionsByType";
import useMaterialFilterState from "@/hooks/useMaterialFilterState";

/**
 * Client-side projects list that orchestrates language, technology, category, and archive filters via the shared hook.
 * This is the canonical configuration for project filtering, ensuring URL state, Fuse search, and MaterialList stay aligned.
 *
 * @returns Filter shell plus grouped project cards.
 */
const ProjectsView: React.FC = () => {
  const basePath: string = usePathname();

  const technologyParamName = "technology";
  const languageParamName = "language";
  const sectionParamName = "section";
  const typeParamName = "type";
  const skillCategoryParamName = "category";
  const generalSkillParamName = "general";

  const archivedParamName = "archived";
  const searchParamName = "search";

  const searchOptions: string[] = [
    "name",
    "category",
    "skills.name",
    "skills.category",
    "skills.relatedSkills.name",
    "skills.relatedSkills.category",
    "type",
  ];

  const {
    searchTerm,
    filterCategories,
    groupedMaterials,
    archiveFilter,
    areFiltersApplied,
  } = useMaterialFilterState<ProjectDatabaseKeys, ProjectInterface>({
    databaseMap: projectDatabaseMap,
    searchParamName,
    searchKeys: searchOptions,
    filterCategories: [
      {
        sectionName: "Section",
        urlParam: sectionParamName,
        valueParser: stringToSlug,
        options:
          generateFilterOptionsByCategory<ProjectInterface>(projectDatabaseMap),
        applyFilter: (value, keys) =>
          filterMaterialByCategory<ProjectInterface>(
            value,
            keys,
            projectDatabaseMap
          ) as ProjectDatabaseKeys[],
      },
      {
        sectionName: "Programming Language",
        urlParam: languageParamName,
        options: generateFilterOptionsForProgrammingLanguages<ProjectInterface>(
          projectDatabaseMap,
          skillDatabaseMap
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<ProjectInterface>(
            value as SkillDatabaseKeys,
            keys,
            projectDatabaseMap
          ) as ProjectDatabaseKeys[],
      },
      {
        sectionName: "Technology",
        urlParam: technologyParamName,
        options: generateFilterOptionsBySkillType<ProjectInterface>(
          projectDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technology
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<ProjectInterface>(
            value as SkillDatabaseKeys,
            keys,
            projectDatabaseMap
          ) as ProjectDatabaseKeys[],
      },
      {
        sectionName: "Category",
        urlParam: skillCategoryParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsBySkillCategories<ProjectInterface>(
          projectDatabaseMap,
          skillDatabaseMap
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkillCategory<ProjectInterface>(
            keys,
            projectDatabaseMap,
            value,
            skillDatabaseMap
          ) as ProjectDatabaseKeys[],
      },
      {
        sectionName: "General Skill",
        urlParam: generalSkillParamName,
        options: generateFilterOptionsBySkillType<ProjectInterface>(
          projectDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technical
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<ProjectInterface>(
            value as SkillDatabaseKeys,
            keys,
            projectDatabaseMap
          ) as ProjectDatabaseKeys[],
      },
      {
        sectionName: "Type of Project",
        urlParam: typeParamName,
        valueParser: stringToSlug,
        options:
          generateFilterOptionsByType<ProjectInterface>(projectDatabaseMap),
        applyFilter: (value, keys) =>
          filterProjectsByType<ProjectInterface>(
            value,
            keys,
            projectDatabaseMap
          ) as ProjectDatabaseKeys[],
      },
    ],
    archiveFilter: {
      paramName: archivedParamName,
      hasArchivedMaterials: checkForArchivedMaterials(projectDatabaseMap),
      applyFilter: (showArchived, keys) =>
        filterMaterialByArchivedStatus<ProjectInterface>(
          showArchived,
          keys,
          projectDatabaseMap
        ) as ProjectDatabaseKeys[],
    },
  });

  return (
    <>
      <FilterSection
        name={PROJECTS_PAGE.label}
        basePath={basePath}
        searchFilter={{
          searchTerm: searchTerm,
          searchParamName: searchParamName,
        }}
        filterCategories={filterCategories}
        archiveFilter={archiveFilter}
        areFiltersApplied={areFiltersApplied}
      />

      {/* List of projects */}
      <ProjectsList groupedMaterial={groupedMaterials} showType={true} />
    </>
  );
};

export default ProjectsView;
