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
import blogDatabase from "@/database/blogs";
import skillDatabase from "@/database/skills";
import BlogKeysEnum from "@/enums/DatabaseKeysEnums/BlogKeysEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import useFuseSearch from "@/hooks/useFuseSearch";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import BlogInterface from "@/interfaces/material/BlogInterface";
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
    "issuer",
    "skills.name",
    "skills.category",
    "skills.relatedSkills.name",
    "skills.relatedSkills.category",
  ];

  // Use the custom hook to perform the search
  let filteredBlogsSlugArray: BlogKeysEnum[] = useFuseSearch(
    blogDatabase,
    searchTerm,
    searchOptions
  ) as BlogKeysEnum[];

  //^ Filtering Logic
  // Filter by blog category
  if (selectedBlogSection !== "all") {
    filteredBlogsSlugArray = filterMaterialByCategory<BlogInterface>(
      stringToSlug(selectedBlogSection),
      filteredBlogsSlugArray,
      blogDatabase
    ) as BlogKeysEnum[];
  }

  // Filter by skill category
  if (selectedSkillCategory !== "all") {
    filteredBlogsSlugArray = filterMaterialBySkillCategory<BlogInterface>(
      filteredBlogsSlugArray,
      blogDatabase,
      stringToSlug(selectedSkillCategory),
      skillDatabase
    ) as BlogKeysEnum[];
  }

  // Filter by hard skill
  if (selectedTechnicalSkill !== "all") {
    filteredBlogsSlugArray = filterMaterialBySkill<BlogInterface>(
      selectedTechnicalSkill as SkillKeysEnum,
      filteredBlogsSlugArray,
      blogDatabase
    ) as BlogKeysEnum[];
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredBlogsSlugArray = filterMaterialBySkill<BlogInterface>(
      selectedGeneralSkill as SkillKeysEnum,
      filteredBlogsSlugArray,
      blogDatabase
    ) as BlogKeysEnum[];
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredBlogsSlugArray = filterMaterialBySkill<BlogInterface>(
      selectedSoftSkill as SkillKeysEnum,
      filteredBlogsSlugArray,
      blogDatabase
    ) as BlogKeysEnum[];
  }

  // Filter by archived status
  filteredBlogsSlugArray = filterMaterialByArchivedStatus<BlogInterface>(
    showArchived,
    filteredBlogsSlugArray,
    blogDatabase
  ) as BlogKeysEnum[];

  const groupedBlogs: MaterialGroupInterface[] = groupMaterialsByCategory(
    filteredBlogsSlugArray,
    blogDatabase
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
      options: generateFilterOptionsByCategory<BlogInterface>(blogDatabase),
    },
    {
      sectionName: "Skill Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: generateFilterOptionsBySkillCategories<BlogInterface>(
        blogDatabase,
        skillDatabase
      ),
    },
    {
      sectionName: "Technical Skill",
      urlParam: technicalSkillParamName,
      selectedValue: selectedTechnicalSkill,
      options: generateFilterOptionsBySkillType<BlogInterface>(
        blogDatabase,
        skillDatabase,
        SkillTypesEnum.Technology
      ),
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generateFilterOptionsBySkillType<BlogInterface>(
        blogDatabase,
        skillDatabase,
        SkillTypesEnum.Technical
      ),
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: generateFilterOptionsBySkillType<BlogInterface>(
        blogDatabase,
        skillDatabase,
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
          hasArchivedMaterials: checkForArchivedMaterials(blogDatabase),
        }}
      />

      {/* Blog List */}
      <BlogsList groupedMaterial={groupedBlogs} />
    </>
  );
};

export default BlogsView;
