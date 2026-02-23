"use client";

import checkForArchivedMaterials from "@/lib/material/checkForArchivedMaterials";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filterMaterialByArchivedStatus";
import filterMaterialByCategory from "@/lib/material/filter/filterMaterialByCategory";
import filterMaterialBySkill from "@/lib/material/filter/filterMaterialBySkill";
import filterMaterialBySkillCategory from "@/lib/material/filter/filterMaterialBySkillCategory";
import generateFilterOptionsByCategory from "@/lib/material/filter-options/generateFilterOptionsByCategory";
import { generateFilterOptionsBySkillCategories } from "@/lib/material/filter-options/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/lib/material/filter-options/generateFilterOptionsBySkillType";
import stringToSlug from "@/lib/stringToSlug";
import FilterSection from "@/components/filters/FilterSection";
import BlogsList from "@/components/material-lists/BlogsList";
import { BLOG_PAGE } from "@/constants/pages";
import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import BlogInterface from "@/database/blogs/BlogInterface";
import blogsDatabaseMap from "@/database/blogs/BlogsDatabaseMap";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";
import { usePathname } from "next/navigation";
import useMaterialFilterState from "@/hooks/useMaterialFilterState";

/**
 * Client view that wires Fuse search, category filters, and archive toggles to the shared `BlogsList`.
 * This is the canonical config for blog filtering, so URL params, drawer options, and grouped output stay in sync across tabs.
 *
 * @returns Filter shell plus grouped blog cards.
 */
export const BlogsView: React.FC = () => {
  const basePath: string = usePathname();

  const blogSectionParamName = "category";
  const skillCategoryParamName = "skill";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";

  const searchParamName = "search";
  const archivedParamName = "archived";

  const searchOptions: string[] = ["name", "category", "skills"];

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
        options:
          generateFilterOptionsByCategory<BlogInterface>(blogsDatabaseMap),
        applyFilter: (value, keys) =>
          filterMaterialByCategory<BlogInterface>(
            value,
            keys,
            blogsDatabaseMap,
          ) as BlogDatabaseKeys[],
      },
      {
        sectionName: "Skill Category",
        urlParam: skillCategoryParamName,
        valueParser: stringToSlug,
        options: generateFilterOptionsBySkillCategories<BlogInterface>(
          blogsDatabaseMap,
          skillDatabaseMap,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkillCategory<BlogInterface>(
            keys,
            blogsDatabaseMap,
            value,
            skillDatabaseMap,
          ) as BlogDatabaseKeys[],
      },
      {
        sectionName: "Technical Skill",
        urlParam: technicalSkillParamName,
        options: generateFilterOptionsBySkillType<BlogInterface>(
          blogsDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technology,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<BlogInterface>(
            value as SkillDatabaseKeys,
            keys,
            blogsDatabaseMap,
          ) as BlogDatabaseKeys[],
      },
      {
        sectionName: "General Skill",
        urlParam: generalSkillParamName,
        options: generateFilterOptionsBySkillType<BlogInterface>(
          blogsDatabaseMap,
          skillDatabaseMap,
          SkillTypesEnum.Technical,
        ),
        applyFilter: (value, keys) =>
          filterMaterialBySkill<BlogInterface>(
            value as SkillDatabaseKeys,
            keys,
            blogsDatabaseMap,
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
          blogsDatabaseMap,
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
