"use client";

import checkForArchivedMaterials from "@/actions/material/checkForArchivedMaterials";
import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/actions/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/actions/material/filter/filterMaterialBySkillCategory";
import generateFilterOptionsByCategory from "@/actions/material/filterOptions/generateFilterOptionsByCategory";
import { generateFilterOptionsBySkillCategories } from "@/actions/material/filterOptions/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/filterOptions/generateFilterOptionsBySkillType";
import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import stringToSlug from "@/actions/stringToSlug";
import FilterSection from "@/components/Filters/FilterSection";
import BlogsList from "@/components/MaterialLists/BlogsList";
import { BLOG_PAGE } from "@/constants/pages";
import BlogDatabaseKeys from "@/database/Blogs/BlogDatabaseKeys";
import BlogInterface from "@/database/Blogs/BlogInterface";
import blogsDatabaseMap from "@/database/Blogs/BlogsDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import useFuseMaterialSearch from "@/hooks/useFuseSearch/useFuseMaterialSearch";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
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
  const blogSectionParamName = "category";
  const skillCategoryParamName = "skill";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";

  const searchParamName = "search";
  const archivedParamName = "archived";

  //^ URL Params Reader
  const selectedBlogSection: string =
    searchParams.get(blogSectionParamName) || "all";
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
  let filteredBlogsSlugArray: BlogDatabaseKeys[] = useFuseMaterialSearch(
    blogsDatabaseMap,
    searchTerm,
    searchOptions
  ) as BlogDatabaseKeys[];

  //^ Filtering Logic
  // Filter by blog category
  if (selectedBlogSection !== "all") {
    filteredBlogsSlugArray = filterMaterialByCategory<BlogInterface>(
      stringToSlug(selectedBlogSection),
      filteredBlogsSlugArray,
      blogsDatabaseMap
    ) as BlogDatabaseKeys[];
  }

  // Filter by skill category
  if (selectedSkillCategory !== "all") {
    filteredBlogsSlugArray = filterMaterialBySkillCategory<BlogInterface>(
      filteredBlogsSlugArray,
      blogsDatabaseMap,
      stringToSlug(selectedSkillCategory),
      skillDatabaseMap
    ) as BlogDatabaseKeys[];
  }

  // Filter by hard skill
  if (selectedTechnicalSkill !== "all") {
    filteredBlogsSlugArray = filterMaterialBySkill<BlogInterface>(
      selectedTechnicalSkill as SkillDatabaseKeys,
      filteredBlogsSlugArray,
      blogsDatabaseMap
    ) as BlogDatabaseKeys[];
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredBlogsSlugArray = filterMaterialBySkill<BlogInterface>(
      selectedGeneralSkill as SkillDatabaseKeys,
      filteredBlogsSlugArray,
      blogsDatabaseMap
    ) as BlogDatabaseKeys[];
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredBlogsSlugArray = filterMaterialBySkill<BlogInterface>(
      selectedSoftSkill as SkillDatabaseKeys,
      filteredBlogsSlugArray,
      blogsDatabaseMap
    ) as BlogDatabaseKeys[];
  }

  // Filter by archived status
  filteredBlogsSlugArray = filterMaterialByArchivedStatus<BlogInterface>(
    showArchived,
    filteredBlogsSlugArray,
    blogsDatabaseMap
  ) as BlogDatabaseKeys[];

  const groupedBlogs: MaterialGroupInterface[] = groupMaterialsByCategory(
    filteredBlogsSlugArray,
    blogsDatabaseMap
  );

  const areFiltersApplied: boolean =
    selectedBlogSection !== "all" ||
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
      urlParam: blogSectionParamName,
      selectedValue: selectedBlogSection,
      options: generateFilterOptionsByCategory<BlogInterface>(blogsDatabaseMap),
    },
    {
      sectionName: "Skill Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: generateFilterOptionsBySkillCategories<BlogInterface>(
        blogsDatabaseMap,
        skillDatabaseMap
      ),
    },
    {
      sectionName: "Technical Skill",
      urlParam: technicalSkillParamName,
      selectedValue: selectedTechnicalSkill,
      options: generateFilterOptionsBySkillType<BlogInterface>(
        blogsDatabaseMap,
        skillDatabaseMap,
        SkillTypesEnum.Technology
      ),
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generateFilterOptionsBySkillType<BlogInterface>(
        blogsDatabaseMap,
        skillDatabaseMap,
        SkillTypesEnum.Technical
      ),
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: generateFilterOptionsBySkillType<BlogInterface>(
        blogsDatabaseMap,
        skillDatabaseMap,
        SkillTypesEnum.Soft
      ),
    },
  ];

  return (
    <>
      <FilterSection
        name={BLOG_PAGE.label}
        basePath={basePath}
        searchFilter={{
          searchTerm: searchTerm,
          searchParamName: searchParamName,
        }}
        filterCategories={filterCategories}
        areFiltersApplied={areFiltersApplied}
        archiveFilter={{
          paramName: archivedParamName,
          showArchived: showArchived,
          hasArchivedMaterials: checkForArchivedMaterials(blogsDatabaseMap),
        }}
      />

      {/* Blog List */}
      <BlogsList groupedMaterial={groupedBlogs} />
    </>
  );
};

export default BlogsView;
