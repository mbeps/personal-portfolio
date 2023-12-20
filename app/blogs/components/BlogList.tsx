"use client";

import generateUrl from "@/actions/generateUrl";
import stringToSlug from "@/actions/stringToSlug";

import FilterOverlay from "@/components/Filters/FilterPanel";
import ClearAllFiltersButton from "@/components/Filters/ClearAllFiltersButton";
import SearchInput from "@/components/Inputs/SearchInput";
import { Blog } from "@/types/blog";
import Skill from "@/types/skills";
import Fuse from "fuse.js";
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // Add this import for Next.js router
import { useState } from "react";
import BlogListSection from "./BlogListSection";
import ToggleFilterButton from "@/components/Filters/ToggleFilterButton";
import FilterOption from "@/types/filters/FilterOption";
import FilterCategory from "@/types/filters/FilterCategory";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";

interface BlogListProps {
  blogs: Blog[];
}

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to filter and search the blogs.
 * @returns (JSX.Element): page with all blogs
 */
export const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  //^ Hooks
  const [isFilterOpen, setIsFilterModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const basePath = usePathname();

  //^ URL Params Strings
  const blogSectionParamName = "category";
  const skillCategoryParamName = "skill";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";

  const searchParamName = "search";
  const archivedParamName = "archived";

  //^ URL Params Reader
  const selectedBlogSection = searchParams.get(blogSectionParamName) || "all";
  const selectedSkillCategory =
    searchParams.get(skillCategoryParamName) || "all";
  const selectedTechnicalSkill =
    searchParams.get(technicalSkillParamName) || "all";
  const selectedGeneralSkill = searchParams.get(generalSkillParamName) || "all";
  const selectedSoftSkill = searchParams.get(softSkillParamName) || "all";

  const searchTerm = searchParams.get(searchParamName) || "";
  const showArchived =
    (searchParams.get(archivedParamName) || "false").toLowerCase() === "true";

  const handleToggleFilter = () => {
    setIsFilterModalOpen(!isFilterOpen);
  };

  //^ Search Settings
  /**
   * Fuse.js options for fuzzy search.
   * These are the only properties that are searched.
   * These are the same ones from the `Blog` type.
   */
  const searchOptions = {
    keys: [
      "title",
      "subtitle",
      "category",
      "technicalSkills.skill",
      "technicalSkills.category",
      "technicalSkills.skill.skill",
      "softSkills.skill",
      "softSkills.category",
    ],
    threshold: 0.3,
  };

  const fuse = new Fuse(blogs, searchOptions);

  /**
   * Searches the blogs using the search term.
   * Only searches the title, subtitle, and category.
   */
  const searchedBlogs = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : blogs;

  //^ Group By Category
  /**
   * Groups the blogs by category.
   * This is used to display the blogs in sections.
   * @param blogs (Blog[]) - list of blogs
   * @returns (Record<string, Blog[]>) - blogs grouped by category (key)
   */
  const groupBlogsByType = (blogs: Blog[]): Record<string, Blog[]> => {
    return blogs.reduce<Record<string, Blog[]>>((grouped, blog) => {
      (grouped[blog.category] = grouped[blog.category] || []).push(blog);
      return grouped;
    }, {});
  };

  //^ Filter Options List

  const blogCategories: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...blogs
      .map((blog: Blog) => ({
        slug: stringToSlug(blog.category),
        entryName: blog.category,
      }))
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.slug === value.slug) === index
      )
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const skillCategories: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...blogs
      .flatMap((blog: Blog) =>
        blog.technicalSkills.map((skill: Skill) => ({
          slug: stringToSlug(skill.category),
          entryName: skill.category,
        }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const hardSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...blogs
      .flatMap((blog: Blog) =>
        (blog.technicalSkills || [])
          .filter((skill: Skill) => skill.skillType === "hard")
          .map((skill: Skill) => ({ slug: skill.slug, entryName: skill.name }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const generalSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...blogs
      .flatMap((blog: Blog) =>
        (blog.technicalSkills || [])
          .filter((skill: Skill) => skill.skillType === "general")
          .map((skill: Skill) => ({ slug: skill.slug, entryName: skill.name }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  const softSkills: FilterOption[] = [
    { slug: "all", entryName: "All" },
    ...blogs
      .flatMap((blog: Blog) =>
        (blog.technicalSkills || [])
          .filter((skill: Skill) => skill.skillType === "soft")
          .map((skill: Skill) => ({ slug: skill.slug, entryName: skill.name }))
      )
      .reduce((unique, item) => {
        return unique.findIndex((v) => v.slug === item.slug) !== -1
          ? unique
          : [...unique, item];
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];

  //^ Filtering Logic
  /**
   * Updates the search term in the URL.
   * This updates the state which changes the blogs being displayed.
   * @param newSearchTerm (string) - new search term
   */
  const updateSearchTerm = (newSearchTerm: string) => {
    router.push(
      generateUrl(
        {
          [blogSectionParamName]: selectedBlogSection,
          [skillCategoryParamName]: selectedSkillCategory,
          [technicalSkillParamName]: selectedTechnicalSkill,
          [softSkillParamName]: selectedSoftSkill,
          [searchParamName]: newSearchTerm, // only thing that changes
          [archivedParamName]: true.toString(),
        },
        basePath
      )
    );
  };

  /**
   * Filters the blogs by category selected by the user.
   */
  const filteredBlogs = searchedBlogs.filter((blog) => {
    const matchesBlogSection =
      selectedBlogSection === "all" ||
      stringToSlug(blog.category) === stringToSlug(selectedBlogSection);
    const matchesSkillCategory =
      selectedSkillCategory === "all" ||
      (blog.technicalSkills || []).some(
        (skill) =>
          stringToSlug(skill.category) === stringToSlug(selectedSkillCategory)
      );
    const matchesHardSkill =
      selectedTechnicalSkill === "all" ||
      (blog.technicalSkills || []).some(
        (skill) =>
          skill.slug === selectedTechnicalSkill && skill.skillType === "hard"
      );
    const matchesGeneralSkill =
      selectedGeneralSkill === "all" ||
      (blog.technicalSkills || []).some(
        (skill) =>
          skill.slug === selectedGeneralSkill && skill.skillType === "general"
      );
    const matchesSoftSkill =
      selectedSoftSkill === "all" ||
      (blog.technicalSkills || []).some(
        (skill) =>
          skill.slug === selectedSoftSkill && skill.skillType === "soft"
      );
    const matchesArchivedStatus = showArchived || !blog.archived;

    return (
      matchesBlogSection &&
      matchesSkillCategory &&
      matchesHardSkill &&
      matchesGeneralSkill &&
      matchesSoftSkill &&
      matchesArchivedStatus
    );
  });

  const groupedBlogs = groupBlogsByType(filteredBlogs);

  const areFiltersApplied =
    selectedBlogSection !== "all" ||
    selectedSkillCategory !== "all" ||
    selectedTechnicalSkill !== "all" ||
    selectedGeneralSkill !== "all" ||
    selectedSoftSkill !== "all" ||
    searchTerm !== "";

  const filterCategories: FilterCategory[] = [
    {
      sectionName: "Section",
      urlParam: blogSectionParamName,
      selectedValue: selectedBlogSection,
      options: blogCategories,
    },
    {
      sectionName: "Skill Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: skillCategories,
    },
    {
      sectionName: "Technical Skill",
      urlParam: technicalSkillParamName,
      selectedValue: selectedTechnicalSkill,
      options: hardSkills,
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generalSkills,
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: softSkills,
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row items-center w-full mt-12 p-2 gap-4">
        {/* Search input */}
        <div className="w-full md:flex-1">
          <SearchInput
            searchTerm={searchTerm}
            updateSearchTerm={updateSearchTerm}
            placeholder="Search blog name or metadata"
          />
        </div>
        {/* Buttons */}
        <div className="flex flex-row md:flex-1 gap-2 w-full">
          {/* Filter Button */}
          <ToggleFilterButton toggleFilter={handleToggleFilter} />
          {/* Clear Button */}
          <ClearAllFiltersButton
            areFiltersApplied={areFiltersApplied}
            basePath={basePath}
          />
        </div>
      </div>

      {/* Toggle to display archived projects */}
      <ArchiveToggle
        generateUrl={generateUrl}
        showArchived={showArchived}
        filterProps={{
          [blogSectionParamName]: selectedBlogSection,
          [skillCategoryParamName]: selectedSkillCategory,
          [technicalSkillParamName]: selectedTechnicalSkill,
          [softSkillParamName]: selectedSoftSkill,
          [searchParamName]: searchTerm,
        }}
        basePath={basePath}
      />

      {/* Blog List */}
      <BlogListSection groupedBlogs={groupedBlogs} />

      {/* Filter Modal */}
      <FilterOverlay
        isOpen={isFilterOpen}
        toggle={handleToggleFilter}
        filterCategories={filterCategories}
        generateUrl={generateUrl}
        basePath={basePath}
        archiveFilter={{
          paramName: archivedParamName,
          status: showArchived,
        }}
      />
    </>
  );
};

export default BlogList;
