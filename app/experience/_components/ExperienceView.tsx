"use client";

import checkForArchivedMaterials from "@/lib/material/checkForArchivedMaterials";
import filterRolesByType from "@/lib/material/experience/filterRolesByType";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/lib/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/lib/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/lib/material/filter/filterMaterialBySkillCategory";
import generateFilterOptionsByCategory from "@/lib/material/filter-options/generateFilterOptionsByCategory";
import { generateFilterOptionsByRoleType } from "@/lib/material/filter-options/generateFilterOptionsByRoleType";
import { generateFilterOptionsBySkillCategories } from "@/lib/material/filter-options/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/lib/material/filter-options/generateFilterOptionsBySkillType";
import stringToSlug from "@/lib/stringToSlug";
import FilterSection from "@/components/filters/FilterSection";
import WorkList from "@/components/material-lists/WorkList";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import rolesDatabase from "@/database/roles/RoleDatabaseMap";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import ExperienceTypeEnum from "@/enums/experience/ExperienceTypeEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import RoleInterface from "@/database/roles/RoleInterface";
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

  const searchParamName = "search";
  const archivedParamName = "archived";

  const searchOptions: string[] = [
    "name",
    "company",
    "type",
    "category",
    "skills",
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
            rolesDatabase,
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
            rolesDatabase,
          ) as RoleDatabaseKeys[],
      },
      {
        sectionName: "Skill Category",
        urlParam: skillCategoryParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsBySkillCategories<RoleInterface>(
          rolesDatabase,
          skillDatabaseMap,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkillCategory<RoleInterface>(
            keys,
            rolesDatabase,
            value,
            skillDatabaseMap,
          ) as RoleDatabaseKeys[],
      },
      {
        sectionName: "Technical Skill",
        urlParam: technicalSkillParamName,
        options: generateFilterOptionsBySkillType<RoleInterface>(
          rolesDatabase,
          skillDatabaseMap,
          SkillTypesEnum.Technology,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<RoleInterface>(
            value as SkillDatabaseKeys,
            keys,
            rolesDatabase,
          ) as RoleDatabaseKeys[],
      },
      {
        sectionName: "General Skill",
        urlParam: generalSkillParamName,
        options: generateFilterOptionsBySkillType<RoleInterface>(
          rolesDatabase,
          skillDatabaseMap,
          SkillTypesEnum.Technical,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<RoleInterface>(
            value as SkillDatabaseKeys,
            keys,
            rolesDatabase,
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
          rolesDatabase,
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
