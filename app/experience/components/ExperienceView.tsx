"use client";

import checkForArchivedMaterials from "@/actions/material/checkForArchivedMaterials";
import filterRolesByType from "@/actions/material/experience/filterRolesByType";
import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/actions/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/actions/material/filter/filterMaterialBySkillCategory";
import generateFilterOptionsByCategory from "@/actions/material/filterOptions/generateFilterOptionsByCategory";
import { generateFilterOptionsByRoleType } from "@/actions/material/filterOptions/generateFilterOptionsByRoleType";
import { generateFilterOptionsBySkillCategories } from "@/actions/material/filterOptions/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/filterOptions/generateFilterOptionsBySkillType";
import stringToSlug from "@/actions/stringToSlug";
import FilterSection from "@/components/Filters/FilterSection";
import WorkList from "@/components/MaterialLists/WorkList";
import RoleDatabaseKeys from "@/database/Roles/RoleDatabaseKeys";
import rolesDatabase from "@/database/Roles/RoleDatabaseMap";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import ExperienceTypeEnum from "@/enums/Experience/ExperienceTypeEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import RoleInterface from "@/database/Roles/RoleInterface";
import { usePathname } from "next/navigation";
import useMaterialFilterState from "@/hooks/useMaterialFilterState";

/**
 * Client view for the experience archive that coordinates Fuse search, skill-based filtering, and the archive toggle.
 * Ensures role listings behave just like other material lists by reusing the shared hook and FilterSection component.
 *
 * @returns Filter UI plus grouped role cards.
 */
export const ExperienceView: React.FC = () => {
  const basePath: string = usePathname();

  const categoryParamName = "category";
  const workTypeParamName = "type";
  const skillCategoryParamName = "skill";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";

  const searchParamName = "search";
  const archivedParamName = "archived";

  const searchOptions: string[] = [
    "name",
    "company",
    "type",
    "category",
    "skills.name",
    "skills.category",
    "skills.relatedSkills.name",
    "skills.relatedSkills.category",
  ];

  const {
    searchTerm,
    groupedMaterials,
    filterCategories,
    archiveFilter,
    areFiltersApplied,
  } = useMaterialFilterState<RoleDatabaseKeys, RoleInterface>({
    databaseMap: rolesDatabase,
    searchParamName,
    searchKeys: searchOptions,
    filterCategories: [
      {
        sectionName: "Section",
        urlParam: categoryParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsByCategory<RoleInterface>(rolesDatabase),
        applyFilter: (value, keys) =>
          filterMaterialByCategory<RoleInterface>(
            value,
            keys,
            rolesDatabase
          ) as RoleDatabaseKeys[],
      },
      {
        sectionName: "Employment Type",
        urlParam: workTypeParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsByRoleType<RoleInterface>(rolesDatabase),
        applyFilter: (value, keys) =>
          filterRolesByType<RoleInterface>(
            value as ExperienceTypeEnum,
            keys,
            rolesDatabase
          ) as RoleDatabaseKeys[],
      },
      {
        sectionName: "Skill Category",
        urlParam: skillCategoryParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsBySkillCategories<RoleInterface>(
          rolesDatabase,
          skillDatabaseMap
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkillCategory<RoleInterface>(
            keys,
            rolesDatabase,
            value,
            skillDatabaseMap
          ) as RoleDatabaseKeys[],
      },
      {
        sectionName: "Technical Skill",
        urlParam: technicalSkillParamName,
        options: generateFilterOptionsBySkillType<RoleInterface>(
          rolesDatabase,
          skillDatabaseMap,
          SkillTypesEnum.Technology
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<RoleInterface>(
            value as SkillDatabaseKeys,
            keys,
            rolesDatabase
          ) as RoleDatabaseKeys[],
      },
      {
        sectionName: "General Skill",
        urlParam: generalSkillParamName,
        options: generateFilterOptionsBySkillType<RoleInterface>(
          rolesDatabase,
          skillDatabaseMap,
          SkillTypesEnum.Technical
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<RoleInterface>(
            value as SkillDatabaseKeys,
            keys,
            rolesDatabase
          ) as RoleDatabaseKeys[],
      },
      {
        sectionName: "Soft Skill",
        urlParam: softSkillParamName,
        options: generateFilterOptionsBySkillType<RoleInterface>(
          rolesDatabase,
          skillDatabaseMap,
          SkillTypesEnum.Soft
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<RoleInterface>(
            value as SkillDatabaseKeys,
            keys,
            rolesDatabase
          ) as RoleDatabaseKeys[],
      },
    ],
    archiveFilter: {
      paramName: archivedParamName,
      hasArchivedMaterials: checkForArchivedMaterials(rolesDatabase),
      valueParser: (value) => value.toLowerCase(),
      applyFilter: (showArchived, keys) =>
        filterMaterialByArchivedStatus<RoleInterface>(
          showArchived,
          keys,
          rolesDatabase
        ) as RoleDatabaseKeys[],
    },
  });

  return (
    <>
      <FilterSection
        name="Roles"
        basePath={basePath}
        searchFilter={{
          searchTerm: searchTerm,
          searchParamName: searchParamName,
        }}
        archiveFilter={archiveFilter}
        filterCategories={filterCategories}
        areFiltersApplied={areFiltersApplied}
      />

      {/* Work List */}
      <WorkList groupedMaterial={groupedMaterials} />
    </>
  );
};

export default ExperienceView;
