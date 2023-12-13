"use client";

import generateUrl from "@/actions/generateUrl";
import stringToSlug from "@/actions/stringToSlug";

import ClearAllFiltersButton from "@/components/Filters/Page/ClearAllFiltersButton";
import OpenFilterModalButton from "@/components/Filters/Page/OpenFilterModalButton";
import RadioButton from "@/components/Inputs/RadioButton";
import SearchInput from "@/components/Inputs/SearchInput";
import Overlay from "@/components/Sheet/Sheet";
import HeadingFour from "@/components/Text/HeadingFour";
import { BlogMetadata } from "@/types/blog";
import { Skill } from "@/types/skills";
import Fuse from "fuse.js";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // Add this import for Next.js router
import { useState } from "react";
import BlogListSection from "./BlogListSection";

export interface FilterCategory {
  name: string;
  urlParam: string;
  selectedValue: string;
  options: { slug: string; skill: string }[];
}

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

  //^ URL Params Reader
  const selectedBlogSection = searchParams.get(blogSectionParamName) || "all";
  const selectedSkillCategory =
    searchParams.get(skillCategoryParamName) || "all";
  const selectedTechnicalSkill =
    searchParams.get(technicalSkillParamName) || "all";
  const selectedGeneralSkill = searchParams.get(generalSkillParamName) || "all";
  const selectedSoftSkill = searchParams.get(softSkillParamName) || "all";
  const searchTerm = searchParams.get(searchParamName) || "";

  /**
   * Opens the modal to filter the projects.
   */
  const handleOpenFilter = () => {
    setIsFilterModalOpen(true);
  };

  /**
   * Closes the modals.
   * These modals are for filtering and displaying more projects.
   */
  const handleCloseFilter = () => {
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
  const blogCategories: { slug: string; skill: string }[] = [
    { slug: "all", skill: "All" },
    ...blogs
      .map((blog: BlogMetadata) => ({
        slug: stringToSlug(blog.category),
        skill: blog.category,
      }))
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.slug === value.slug) === index
      ),
  ];

  const skillCategories: { slug: string; skill: string }[] = [
    { slug: "all", skill: "All" },
    ...blogs
      .flatMap((blog: BlogMetadata) =>
        blog.skills.map((skill: Skill) => ({
          slug: stringToSlug(skill.category),
          skill: skill.skill,
        }))
      )
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.slug === value.slug) === index
      ),
  ];

  const hardSkills: { slug: string; skill: string }[] = [
    { slug: "all", skill: "All" },
    ...Array.from(
      new Set(
        blogs.flatMap((blog: BlogMetadata) =>
          (blog.skills || [])
            .filter((skill: Skill) => skill.skillType === "hard")
            .map((skill: Skill) => ({ slug: skill.slug, skill: skill.skill }))
        )
      )
    ),
  ];

  const generalSkills: { slug: string; skill: string }[] = [
    { slug: "all", skill: "All" },
    ...Array.from(
      new Set(
        blogs.flatMap((blog: BlogMetadata) =>
          (blog.skills || [])
            .filter((skill: Skill) => skill.skillType === "general")
            .map((skill: Skill) => ({ slug: skill.slug, skill: skill.skill }))
        )
      )
    ),
  ];

  const softSkills: { slug: string; skill: string }[] = [
    { slug: "all", skill: "All" },
    ...Array.from(
      new Set(
        blogs.flatMap((blog: BlogMetadata) =>
          (blog.skills || [])
            .filter((skill: Skill) => skill.skillType === "soft")
            .map((skill: Skill) => ({ slug: skill.slug, skill: skill.skill }))
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
          [softSkillParamName]: selectedSoftSkill,
          [searchParamName]: newSearchTerm, // only thing that changes
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
      (blog.skills || []).some(
        (skill) =>
          stringToSlug(skill.category) === stringToSlug(selectedSkillCategory)
      );
    const matchesHardSkill =
      selectedTechnicalSkill === "all" ||
      (blog.skills || []).some(
        (skill) =>
          skill.slug === selectedTechnicalSkill && skill.skillType === "hard"
      );
    const matchesGeneralSkill =
      selectedGeneralSkill === "all" ||
      (blog.skills || []).some(
        (skill) =>
          skill.slug === selectedGeneralSkill && skill.skillType === "general"
      );
    const matchesSoftSkill =
      selectedSoftSkill === "all" ||
      (blog.skills || []).some(
        (skill) =>
          skill.slug === selectedSoftSkill && skill.skillType === "soft"
      );

    return (
      matchesBlogSection &&
      matchesSkillCategory &&
      matchesHardSkill &&
      matchesGeneralSkill &&
      matchesSoftSkill
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
          [softSkillParamName]: "all",
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
    selectedSoftSkill.toLowerCase() !== "all" ||
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
    {
      name: "Soft Skill",
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
          <OpenFilterModalButton handleOpenFilterModal={handleOpenFilter} />
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
      <Overlay
        isOpen={isFilterOpen}
        toggle={handleCloseFilter}
        className="w-full md:w-[30rem] rounded-xl m-0 md:m-4 bg-white dark:bg-neutral-900 pt-20"
      >
        {filterCategories.map((filterCategory, index) => (
          <div key={index}>
            <HeadingFour title={filterCategory.name} />
            <ul>
              {filterCategory.options.map((option, i) => {
                // Create an object with the currently selected options
                const selectedOptions = {
                  [blogSectionParamName]: selectedBlogSection,
                  [skillCategoryParamName]: selectedSkillCategory,
                  [technicalSkillParamName]: selectedTechnicalSkill,
                  [generalSkillParamName]: selectedGeneralSkill,
                  [softSkillParamName]: selectedSoftSkill,
                  [searchParamName]: searchTerm,
                };

                return (
                  <li key={i}>
                    <Link
                      href={generateUrl(
                        {
                          ...selectedOptions,
                          [filterCategory.urlParam]: option.slug,
                        },
                        basePath
                      )}
                    >
                      <RadioButton
                        id={option.slug}
                        name={filterCategory.name}
                        value={option.slug}
                        checked={
                          filterCategory.selectedValue.toLowerCase() ===
                          option.slug.toLowerCase()
                        }
                        label={option.skill}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </Overlay>
    </>
  );
};

export default BlogList;
