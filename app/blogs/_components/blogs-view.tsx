"use client";

import { usePathname } from "next/navigation";
import FilterSection from "@/components/filters/filter-section";
import BlogsList from "@/components/material-lists/blogs-list";
import { ROUTES } from "@/constants/routes";
import type BlogDatabaseKeys from "@/database/blogs/blog-database-keys";
import type BlogInterface from "@/database/blogs/blog-interface";
import blogsDatabaseMap from "@/database/blogs/blogs-database-map";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";
import useMaterialFilterState from "@/hooks/use-material-filter-state";
import checkForArchivedMaterials from "@/lib/material/check-for-archived-materials";
import filterMaterialByArchivedStatus from "@/lib/material/filter/filter-material-by-archived-status";
import filterMaterialByCategory from "@/lib/material/filter/filter-material-by-category";
import filterMaterialBySkill from "@/lib/material/filter/filter-material-by-skill";
import filterMaterialBySkillCategory from "@/lib/material/filter/filter-material-by-skill-category";
import generateFilterOptionsByCategory from "@/lib/material/filter-options/generate-filter-options-by-category";
import { generateFilterOptionsBySkillCategories } from "@/lib/material/filter-options/generate-filter-options-by-skill-categories";
import generateFilterOptionsBySkillType from "@/lib/material/filter-options/generate-filter-options-by-skill-type";
import stringToSlug from "@/lib/string-to-slug";

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
    setSearchTerm,
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
        name={ROUTES.BLOGS.name}
        basePath={basePath}
        searchFilter={{
          searchTerm: searchTerm,
          onChange: setSearchTerm,
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
