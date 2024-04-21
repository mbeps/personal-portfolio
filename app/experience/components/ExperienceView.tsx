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
import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import stringToSlug from "@/actions/stringToSlug";
import FilterSection from "@/components/Filters/FilterSection";
import WorkList from "@/components/MaterialLists/WorkList";
import RoleDatabaseKeys from "@/database/Roles/RoleDatabaseKeys";
import rolesDatabase from "@/database/Roles/RoleDatabaseMap";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import ExperienceTypeEnum from "@/enums/ExperienceTypeEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import useFuseSearch from "@/hooks/useFuseSearch";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import RoleInterface from "@/database/Roles/RoleInterface";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to filter and search the blogs.
 * These blogs are displayed into categories.
 * Because this uses hooks, it is a client-side only component.
 *
 * @returns Component showing all blogs, search bar and filters
 */
export const BlogsView: React.FC = () => {
  //^ Hooks
  const searchParams = useSearchParams();
  const basePath: string = usePathname();

  //^ URL Params Strings
  const categoryParamName = "category";
  const workTypeParamName = "type";
  const skillCategoryParamName = "skill";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";

  const searchParamName = "search";
  const archivedParamName = "archived";

  //^ URL Params Reader
  const selectedWorkSection: string =
    searchParams.get(categoryParamName) || "all";
  const selectedWorkType: string = searchParams.get(workTypeParamName) || "all";
  const selectedSkillCategory: string =
    searchParams.get(skillCategoryParamName) || "all";
  const selectedTechnicalSkill: string =
    searchParams.get(technicalSkillParamName) || "all";
  const selectedGeneralSkill: string =
    searchParams.get(generalSkillParamName) || "all";
  const selectedSoftSkill: string =
    searchParams.get(softSkillParamName) || "all";

  const searchTerm: string = searchParams.get(searchParamName) || "";
  const showArchived: boolean =
    (searchParams.get(archivedParamName) || "false").toLowerCase() === "true";

  // Define your search options
  const searchOptions: string[] = [
    "name",
    "category",
    "skills.name",
    "skills.category",
    "skills.relatedSkills.name",
    "skills.relatedSkills.category",
  ];

  // Use the custom hook to perform the search
  let filteredWorkKeysArray: RoleDatabaseKeys[] = useFuseSearch(
    rolesDatabase,
    searchTerm,
    searchOptions
  ) as RoleDatabaseKeys[];

  //^ Filtering Logic
  // Filter by category
  if (selectedWorkSection !== "all") {
    filteredWorkKeysArray = filterMaterialByCategory<RoleInterface>(
      stringToSlug(selectedWorkSection),
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleDatabaseKeys[];
  }

  if (selectedWorkType !== "all") {
    filteredWorkKeysArray = filterRolesByType<RoleInterface>(
      stringToSlug(selectedWorkType) as ExperienceTypeEnum,
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleDatabaseKeys[];
  }

  // Filter by skill category
  if (selectedSkillCategory !== "all") {
    filteredWorkKeysArray = filterMaterialBySkillCategory<RoleInterface>(
      filteredWorkKeysArray,
      rolesDatabase,
      stringToSlug(selectedSkillCategory),
      skillDatabaseMap
    ) as RoleDatabaseKeys[];
  }

  // Filter by hard skill
  if (selectedTechnicalSkill !== "all") {
    filteredWorkKeysArray = filterMaterialBySkill<RoleInterface>(
      selectedTechnicalSkill as SkillDatabaseKeys,
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleDatabaseKeys[];
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredWorkKeysArray = filterMaterialBySkill<RoleInterface>(
      selectedGeneralSkill as SkillDatabaseKeys,
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleDatabaseKeys[];
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredWorkKeysArray = filterMaterialBySkill<RoleInterface>(
      selectedSoftSkill as SkillDatabaseKeys,
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleDatabaseKeys[];
  }

  // Filter by archived status
  filteredWorkKeysArray = filterMaterialByArchivedStatus<RoleInterface>(
    showArchived,
    filteredWorkKeysArray,
    rolesDatabase
  ) as RoleDatabaseKeys[];

  const groupedBlogs: MaterialGroupInterface[] = groupMaterialsByCategory(
    filteredWorkKeysArray,
    rolesDatabase
  );

  const areFiltersApplied: boolean =
    selectedWorkSection !== "all" ||
    selectedWorkType !== "all" ||
    selectedSkillCategory !== "all" ||
    selectedTechnicalSkill !== "all" ||
    selectedGeneralSkill !== "all" ||
    selectedSoftSkill !== "all" ||
    searchTerm !== "" ||
    showArchived;

  //^ Filter Categories
  const filterCategories: FilterCategory[] = [
    {
      sectionName: "Section",
      urlParam: categoryParamName,
      selectedValue: selectedWorkSection,
      options: generateFilterOptionsByCategory<RoleInterface>(rolesDatabase),
    },
    {
      sectionName: "Employment Type",
      urlParam: workTypeParamName,
      selectedValue: selectedWorkType,
      options: generateFilterOptionsByRoleType<RoleInterface>(rolesDatabase),
    },
    {
      sectionName: "Skill Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: generateFilterOptionsBySkillCategories<RoleInterface>(
        rolesDatabase,
        skillDatabaseMap
      ),
    },
    {
      sectionName: "Technical Skill",
      urlParam: technicalSkillParamName,
      selectedValue: selectedTechnicalSkill,
      options: generateFilterOptionsBySkillType<RoleInterface>(
        rolesDatabase,
        skillDatabaseMap,
        SkillTypesEnum.Technology
      ),
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generateFilterOptionsBySkillType<RoleInterface>(
        rolesDatabase,
        skillDatabaseMap,
        SkillTypesEnum.Technical
      ),
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: generateFilterOptionsBySkillType<RoleInterface>(
        rolesDatabase,
        skillDatabaseMap,
        SkillTypesEnum.Soft
      ),
    },
  ];

  return (
    <>
      <FilterSection
        name="Roles"
        basePath={basePath}
        searchFilter={{
          searchTerm: searchTerm,
          searchParamName: searchParamName,
        }}
        archiveFilter={{
          paramName: archivedParamName,
          showArchived: showArchived,
          hasArchivedMaterials: checkForArchivedMaterials(rolesDatabase),
        }}
        filterCategories={filterCategories}
        areFiltersApplied={areFiltersApplied}
      />

      {/* Work List */}
      <WorkList groupedMaterial={groupedBlogs} />
    </>
  );
};

export default BlogsView;
