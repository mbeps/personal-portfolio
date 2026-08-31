"use client";

import { usePathname } from "next/navigation";
import FilterSection from "@/components/filters/filter-section";
import WorkList from "@/components/material-lists/work-list";
import type RoleDatabaseKeys from "@/database/roles/role-database-keys";
import rolesDatabase from "@/database/roles/role-database-map";
import type RoleInterface from "@/database/roles/role-interface";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import type ExperienceTypeEnum from "@/enums/experience/experience-type-enum";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import useMaterialFilterState from "@/hooks/use-material-filter-state";
import checkForArchivedMaterials from "@/lib/material/check-for-archived-materials";
import filterRolesByType from "@/lib/material/experience/filter-roles-by-type";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filter-material-by-archived-status";
import filterMaterialByCategory from "@/lib/material/filter/filter-material-by-category";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import filterMaterialBySkillCategory from "@/lib/material/filter/filter-material-by-skill-category";
import generateFilterOptionsByCategory from "@/lib/material/filter-options/generate-filter-options-by-category";
import { generateFilterOptionsByRoleType } from "@/lib/material/filter-options/generate-filter-options-by-role-type";
import { generateFilterOptionsBySkillCategories } from "@/lib/material/filter-options/generate-filter-options-by-skill-categories";
import generateFilterOptionsBySkillType from "@/lib/material/filter-options/generate-filter-options-by-skill-type";
import stringToSlug from "@/lib/string-to-slug";

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
    setSearchTerm,
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
          onChange: setSearchTerm,
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
