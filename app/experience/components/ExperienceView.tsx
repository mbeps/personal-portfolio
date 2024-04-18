"use client";

import generateUrl from "@/actions/generateUrl";
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
import rolesDatabase from "@/database/roles";
import skillDatabase from "@/database/skills";
import RoleKeyEnum from "@/enums/DatabaseKeysEnums/RoleKeyEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import ExperienceTypeEnum from "@/enums/ExperienceType";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import useFuseSearch from "@/hooks/useFuseSearch";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import RoleInterface from "@/interfaces/material/RoleInterface";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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
  const [isFilterOpen, setIsFilterModalOpen] = useState(false);
  const router = useRouter();
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

  function handleToggleFilter() {
    setIsFilterModalOpen(!isFilterOpen);
  }

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
  let filteredWorkKeysArray: RoleKeyEnum[] = useFuseSearch(
    rolesDatabase,
    searchTerm,
    searchOptions
  ) as RoleKeyEnum[];

  //^ Filtering Logic
  /**
   * Updates the search term in the URL.
   * This updates the state which changes the blogs being displayed.
   * @param newSearchTerm (string) - new search term
   */
  function updateSearchTerm(newSearchTerm: string): void {
    router.push(
      generateUrl(
        [
          { entryName: categoryParamName, slug: selectedWorkSection },
          { entryName: workTypeParamName, slug: selectedWorkType },
          { entryName: skillCategoryParamName, slug: selectedSkillCategory },
          { entryName: technicalSkillParamName, slug: selectedTechnicalSkill },
          { entryName: softSkillParamName, slug: selectedSoftSkill },
          { entryName: searchParamName, slug: newSearchTerm },
          { entryName: archivedParamName, slug: true.toString() },
        ],
        basePath
      )
    );
  }

  //^ Filtering Logic

  // Filter by category
  if (selectedWorkSection !== "all") {
    filteredWorkKeysArray = filterMaterialByCategory<RoleInterface>(
      stringToSlug(selectedWorkSection),
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleKeyEnum[];
  }

  if (selectedWorkType !== "all") {
    filteredWorkKeysArray = filterRolesByType<RoleInterface>(
      stringToSlug(selectedWorkType) as ExperienceTypeEnum,
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleKeyEnum[];
  }

  // Filter by skill category
  if (selectedSkillCategory !== "all") {
    filteredWorkKeysArray = filterMaterialBySkillCategory<RoleInterface>(
      filteredWorkKeysArray,
      rolesDatabase,
      stringToSlug(selectedSkillCategory),
      skillDatabase
    ) as RoleKeyEnum[];
  }

  // Filter by hard skill
  if (selectedTechnicalSkill !== "all") {
    filteredWorkKeysArray = filterMaterialBySkill<RoleInterface>(
      selectedTechnicalSkill as SkillKeysEnum,
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleKeyEnum[];
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredWorkKeysArray = filterMaterialBySkill<RoleInterface>(
      selectedGeneralSkill as SkillKeysEnum,
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleKeyEnum[];
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredWorkKeysArray = filterMaterialBySkill<RoleInterface>(
      selectedSoftSkill as SkillKeysEnum,
      filteredWorkKeysArray,
      rolesDatabase
    ) as RoleKeyEnum[];
  }

  // Filter by archived status
  filteredWorkKeysArray = filterMaterialByArchivedStatus<RoleInterface>(
    showArchived,
    filteredWorkKeysArray,
    rolesDatabase
  ) as RoleKeyEnum[];

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
    searchTerm !== "";

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
        skillDatabase
      ),
    },
    {
      sectionName: "Technical Skill",
      urlParam: technicalSkillParamName,
      selectedValue: selectedTechnicalSkill,
      options: generateFilterOptionsBySkillType<RoleInterface>(
        rolesDatabase,
        skillDatabase,
        SkillTypesEnum.Hard
      ),
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generateFilterOptionsBySkillType<RoleInterface>(
        rolesDatabase,
        skillDatabase,
        SkillTypesEnum.General
      ),
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: generateFilterOptionsBySkillType<RoleInterface>(
        rolesDatabase,
        skillDatabase,
        SkillTypesEnum.Soft
      ),
    },
  ];

  return (
    <>
      <FilterSection
        basePath={basePath}
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        handleToggleFilter={handleToggleFilter}
        isFilterOpen={isFilterOpen}
        filterCategories={filterCategories}
        showArchived={showArchived}
        generateUrl={generateUrl}
        areFiltersApplied={areFiltersApplied}
      />

      {/* Work List */}
      <WorkList groupedMaterial={groupedBlogs} />
    </>
  );
};

export default BlogsView;
