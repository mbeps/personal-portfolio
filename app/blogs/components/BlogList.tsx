"use client";

import generateUrl from "@/actions/generateUrl";
import FilterModal, {
  FilterCategory,
} from "@/components/Filters/Modal/FIlterModal";
import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import OpenFilterModalButton from "@/components/Filters/Page/OpenFilterModalButton";
import SearchInput from "@/components/Inputs/SearchInput";
import { BlogMetadata } from "@/types/blog";
import Fuse from "fuse.js";
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // Add this import for Next.js router
import { useState } from "react";
import BlogListSection from "./BlogListSection";
import { Skill } from "@/types/skills";

interface BlogListProps {
  blogs: BlogMetadata[];
}

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to filter and search the blogs.
 * @returns (JSX.Element): page with all blogs
 */
export const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  //^ Hooks
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const basePath = usePathname();

  //^ URL Params Strings
  const blogSectionParamName = "category";
  const skillCategoryParamName = "skill";
  const technicalSkillParamName = "technical";
  const generalSkillParamName = "general";
  const searchParamName = "search";

  //^ URL Params Reader
  const selectedBlogSection = (
    searchParams.get(blogSectionParamName) || "all"
  ).toLowerCase();
  const selectedSkillCategory = (
    searchParams.get(skillCategoryParamName) || "all"
  ).toLowerCase();
  const selectedTechnicalSkill = (
    searchParams.get(technicalSkillParamName) || "all"
  ).toLowerCase();
  const selectedGeneralSkill = (
    searchParams.get(generalSkillParamName) || "all"
  ).toLowerCase();
  const searchTerm = (searchParams.get(searchParamName) || "").toLowerCase();

  /**
   * Opens the modal to filter the projects.
   */
  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  /**
   * Closes the modals.
   * These modals are for filtering and displaying more projects.
   */
  const handleCloseModals = () => {
    setIsFilterModalOpen(false);
  };

  //^ Search Settings
  /**
   * Fuse.js options for fuzzy search.
   * These are the only properties that are searched.
   * These are the same ones from the `BlogMetadata` type.
   */
  const searchOptions = {
    keys: ["title", "subtitle", "category", "skills.skill", "skills.category"],
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
   * @param blogs (BlogMetadata[]) - list of blogs
   * @returns (Record<string, BlogMetadata[]>) - blogs grouped by category (key)
   */
  const groupBlogsByType = (
    blogs: BlogMetadata[]
  ): Record<string, BlogMetadata[]> => {
    return blogs.reduce<Record<string, BlogMetadata[]>>((grouped, blog) => {
      (grouped[blog.category] = grouped[blog.category] || []).push(blog);
      return grouped;
    }, {});
  };

  //^ Filter Options List
  /**
   * List of all blog categories.
   * These are used as options for filtering.
   */
  const blogCategories: string[] = [
    "All",
    ...blogs
      .map((blog: BlogMetadata) => blog.category)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  const skillCategories: string[] = [
    "All",
    ...blogs
      .flatMap((blog: BlogMetadata) =>
        blog.skills.map((skill: Skill) => skill.category)
      )
      .filter((value, index, self) => value && self.indexOf(value) === index),
  ];

  const hardSkills: string[] = [
    "All",
    ...Array.from(
      new Set(
        blogs.flatMap((blog: BlogMetadata) =>
          (blog.skills || [])
            .filter((skill: Skill) => skill.skillType === "hard")
            .map((skill: Skill) => skill.skill)
        )
      )
    ),
  ];

  const generalSkills: string[] = [
    "All",
    ...Array.from(
      new Set(
        blogs.flatMap((blog: BlogMetadata) =>
          (blog.skills || [])
            .filter((skill: Skill) => skill.skillType === "general")
            .map((skill: Skill) => skill.skill)
        )
      )
    ),
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
          [searchParamName]: newSearchTerm,
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
      blog.category.toLowerCase() === selectedBlogSection;
    const matchesSkillCategory =
      selectedSkillCategory === "all" ||
      (blog.skills || []).some(
        (skill) => skill.category.toLowerCase() === selectedSkillCategory
      );
    const matchesHardSkill =
      selectedTechnicalSkill === "all" ||
      (blog.skills || []).some(
        (skill) =>
          skill.skill.toLowerCase() === selectedTechnicalSkill &&
          skill.skillType === "hard"
      );
    const matchesGeneralSkill =
      selectedGeneralSkill === "all" ||
      (blog.skills || []).some(
        (skill) =>
          skill.skill.toLowerCase() === selectedGeneralSkill &&
          skill.skillType === "general"
      );

    return (
      matchesBlogSection &&
      matchesSkillCategory &&
      matchesHardSkill &&
      matchesGeneralSkill
    );
  });

  const groupedBlogs = groupBlogsByType(filteredBlogs);

  const resetFilters = () => {
    router.push(
      generateUrl(
        {
          [blogSectionParamName]: "all",
          [skillCategoryParamName]: "all",
          [technicalSkillParamName]: "all",
          [generalSkillParamName]: "all",
          [searchParamName]: "",
        },
        basePath
      )
    );
  };

  const areFiltersApplied =
    selectedBlogSection.toLowerCase() !== "all" ||
    selectedSkillCategory.toLowerCase() !== "all" ||
    selectedTechnicalSkill.toLowerCase() !== "all" ||
    selectedGeneralSkill.toLowerCase() !== "all" ||
    searchTerm !== "";

  const filterCategories: FilterCategory[] = [
    {
      name: "Section",
      urlParam: blogSectionParamName,
      selectedValue: selectedBlogSection,
      options: blogCategories,
    },
    {
      name: "Skill",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: skillCategories,
    },
    {
      name: "Technical Skill",
      urlParam: technicalSkillParamName,
      selectedValue: selectedTechnicalSkill,
      options: hardSkills,
    },
    {
      name: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generalSkills,
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
          <OpenFilterModalButton
            handleOpenFilterModal={handleOpenFilterModal}
          />
          {/* Clear Button */}
          <ClearAllFiltersButton
            resetFilters={resetFilters}
            areFiltersApplied={areFiltersApplied}
          />
        </div>
      </div>

      {/* Blog List */}
      <BlogListSection groupedBlogs={groupedBlogs} />

      {/* Filter Modal */}
      <FilterModal
        filterCategories={filterCategories}
        resetFilters={resetFilters}
        generateUrl={generateUrl}
        showArchived={true}
        handleCloseModals={handleCloseModals}
        isFilterModalOpen={isFilterModalOpen}
        areFiltersApplied={areFiltersApplied}
        basePath={basePath}
        description={`
          Filters are applied automatically as you select them. Searching and
          filtering automatically show archived certificates.
        `}
      />
    </>
  );
};

export default BlogList;
