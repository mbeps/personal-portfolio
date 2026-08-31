"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import FilterSection from "@/components/filters/filter-section";
import ProjectsList from "@/components/material-lists/projects-list";
import { ROUTES } from "@/constants/routes";
import type ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import projectDatabaseMap from "@/database/projects/project-database-map";
import type ProjectInterface from "@/database/projects/project-interface";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import useMaterialFilterState from "@/hooks/use-material-filter-state";
import checkForArchivedMaterials from "@/lib/material/check-for-archived-materials";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filter-material-by-archived-status";
import filterMaterialByCategory from "@/lib/material/filter/filter-material-by-category";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import filterMaterialBySkillCategory from "@/lib/material/filter/filter-material-by-skill-category";
import filterProjectsByType from "@/lib/material/filter/filter-projects-by-type";
import generateFilterOptionsByCategory from "@/lib/material/filter-options/generate-filter-options-by-category";
import { generateFilterOptionsBySkillCategories } from "@/lib/material/filter-options/generate-filter-options-by-skill-categories";
import generateFilterOptionsBySkillType from "@/lib/material/filter-options/generate-filter-options-by-skill-type";
import generateFilterOptionsByType from "@/lib/material/filter-options/generate-filter-options-by-type";
import generateFilterOptionsForProgrammingLanguages from "@/lib/material/filter-options/generate-filter-options-for-programming-languages";
import stringToSlug from "@/lib/string-to-slug";

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

  const searchOptions: string[] = ["name", "category", "skills", "type"];

  const {
    searchTerm,
    setSearchTerm,
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
            projectDatabaseMap,
          ) as ProjectDatabaseKeys[],
      },
      {
        sectionName: "Programming Language",
        urlParam: languageParamName,
        options: generateFilterOptionsForProgrammingLanguages<ProjectInterface>(
          projectDatabaseMap,
          skillDatabaseMap,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<ProjectInterface>(
            value as SkillDatabaseKeys,
            keys,
            projectDatabaseMap,
          ) as ProjectDatabaseKeys[],
      },
      {
        sectionName: "Technology",
        urlParam: technologyParamName,
        options: generateFilterOptionsBySkillType<ProjectInterface>(
          projectDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technology,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<ProjectInterface>(
            value as SkillDatabaseKeys,
            keys,
            projectDatabaseMap,
          ) as ProjectDatabaseKeys[],
      },
      {
        sectionName: "Category",
        urlParam: skillCategoryParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsBySkillCategories<ProjectInterface>(
          projectDatabaseMap,
          skillDatabaseMap,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkillCategory<ProjectInterface>(
            keys,
            projectDatabaseMap,
            value,
            skillDatabaseMap,
          ) as ProjectDatabaseKeys[],
      },
      {
        sectionName: "General Skill",
        urlParam: generalSkillParamName,
        options: generateFilterOptionsBySkillType<ProjectInterface>(
          projectDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technical,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<ProjectInterface>(
            value as SkillDatabaseKeys,
            keys,
            projectDatabaseMap,
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
            projectDatabaseMap,
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
          projectDatabaseMap,
        ) as ProjectDatabaseKeys[],
    },
  });

  return (
    <>
      <FilterSection
        name={ROUTES.PROJECTS.name}
        basePath={basePath}
        searchFilter={{
          searchTerm: searchTerm,
          onChange: setSearchTerm,
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
