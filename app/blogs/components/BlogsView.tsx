"use client";

import checkForArchivedMaterials from "@/actions/material/checkForArchivedMaterials";
import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/actions/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/actions/material/filter/filterMaterialBySkillCategory";
import generateFilterOptionsByCategory from "@/actions/material/filterOptions/generateFilterOptionsByCategory";
import { generateFilterOptionsBySkillCategories } from "@/actions/material/filterOptions/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/filterOptions/generateFilterOptionsBySkillType";
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
import { usePathname } from "next/navigation";
import useMaterialFilterState from "@/hooks/useMaterialFilterState";

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to filter and search the blogs.
 * These blogs are displayed into categories.
 * Because this uses hooks, it is a client-side only component.
 *
 * @returns Component showing all blogs, search bar and filters
 */
export const BlogsView: React.FC = () => {
  const basePath: string = usePathname();

  const blogSectionParamName = "category";
  const skillCategoryParamName = "skill";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";

  const searchParamName = "search";
  const archivedParamName = "archived";

  const searchOptions: string[] = [
    "name",
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
  } = useMaterialFilterState<BlogDatabaseKeys, BlogInterface>({
    databaseMap: blogsDatabaseMap,
    searchParamName,
    searchKeys: searchOptions,
    filterCategories: [
      {
        sectionName: "Section",
        urlParam: blogSectionParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsByCategory<BlogInterface>(
          blogsDatabaseMap
        ),
        applyFilter: (value, keys) =>
          filterMaterialByCategory<BlogInterface>(
            value,
            keys,
            blogsDatabaseMap
          ) as BlogDatabaseKeys[],
      },
      {
        sectionName: "Skill Category",
        urlParam: skillCategoryParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsBySkillCategories<BlogInterface>(
          blogsDatabaseMap,
          skillDatabaseMap
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkillCategory<BlogInterface>(
            keys,
            blogsDatabaseMap,
            value,
            skillDatabaseMap
          ) as BlogDatabaseKeys[],
      },
      {
        sectionName: "Technical Skill",
        urlParam: technicalSkillParamName,
        options: generateFilterOptionsBySkillType<BlogInterface>(
          blogsDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technology
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<BlogInterface>(
            value as SkillDatabaseKeys,
            keys,
            blogsDatabaseMap
          ) as BlogDatabaseKeys[],
      },
      {
        sectionName: "General Skill",
        urlParam: generalSkillParamName,
        options: generateFilterOptionsBySkillType<BlogInterface>(
          blogsDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technical
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<BlogInterface>(
            value as SkillDatabaseKeys,
            keys,
            blogsDatabaseMap
          ) as BlogDatabaseKeys[],
      },
      {
        sectionName: "Soft Skill",
        urlParam: softSkillParamName,
        options: generateFilterOptionsBySkillType<BlogInterface>(
          blogsDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Soft
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<BlogInterface>(
            value as SkillDatabaseKeys,
            keys,
            blogsDatabaseMap
          ) as BlogDatabaseKeys[],
      },
    ],
    archiveFilter: {
      paramName: archivedParamName,
      hasArchivedMaterials: checkForArchivedMaterials(blogsDatabaseMap),
      valueParser: (value) => value.toLowerCase(),
      applyFilter: (showArchived, keys) =>
        filterMaterialByArchivedStatus<BlogInterface>(
          showArchived,
          keys,
          blogsDatabaseMap
        ) as BlogDatabaseKeys[],
    },
  });

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
        archiveFilter={archiveFilter}
      />

      {/* Blog List */}
      <BlogsList groupedMaterial={groupedMaterials} />
    </>
  );
};

export default BlogsView;
