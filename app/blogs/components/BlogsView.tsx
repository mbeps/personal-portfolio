"use client";

import generateUrl from "@/actions/generateUrl";
import filterMaterialByArchivedStatus, {
  filterMaterialByCategory,
  filterMaterialBySkill,
  filterMaterialBySkillCategory,
} from "@/actions/material/filterMaterials";
import generateFilterOptionsByCategory from "@/actions/material/generateFilterOptionsByCategory";
import generateFilterOptionsBySkillCategories from "@/actions/material/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/generateFilterOptionsBySkillType";
import groupMaterialsByCategory from "@/actions/material/groupMaterialsByCategory";
import stringToSlug from "@/actions/stringToSlug";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import FilterOverlay from "@/components/Filters/FilterPanel";
import SearchInput from "@/components/Inputs/SearchInput";
import BlogsList from "@/components/MaterialLists/BlogsList";
import { Button } from "@/components/shadcn/ui/button";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import BlogInterface from "@/interfaces/material/BlogInterface";
import Fuse from "fuse.js";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";

interface BlogListProps {
  blogs: BlogInterface[];
}

/**
 * Displays a list of all blogs that can be opened.
 * Also allows the user to filter and search the blogs.
 * @returns (JSX.Element): page with all blogs
 */
export const BlogsView: React.FC<BlogListProps> = ({ blogs }) => {
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
  // TODO: Update this to work with combined skills
  const searchOptions = {
    keys: [
      "name",
      "category",
      "issuer",
      "skills.name",
      "skills.category",
      "skills.relatedSkills.name",
      "skills.relatedSkills.category",
      "programmingLanguage.name",
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

  //^ Filter Options List

  const blogCategories: FilterOption[] =
    generateFilterOptionsByCategory<BlogInterface>(blogs);

  const skillCategories: FilterOption[] =
    generateFilterOptionsBySkillCategories<BlogInterface>(blogs);

  const hardSkills: FilterOption[] =
    generateFilterOptionsBySkillType<BlogInterface>(blogs, "hard");

  const generalSkills: FilterOption[] =
    generateFilterOptionsBySkillType<BlogInterface>(blogs, "general");

  const softSkills: FilterOption[] =
    generateFilterOptionsBySkillType<BlogInterface>(blogs, "soft");

  //^ Filtering Logic
  /**
   * Updates the search term in the URL.
   * This updates the state which changes the blogs being displayed.
   * @param newSearchTerm (string) - new search term
   */
  const updateSearchTerm = (newSearchTerm: string) => {
    router.push(
      generateUrl(
        [
          { entryName: blogSectionParamName, slug: selectedBlogSection },
          { entryName: skillCategoryParamName, slug: selectedSkillCategory },
          { entryName: technicalSkillParamName, slug: selectedTechnicalSkill },
          { entryName: softSkillParamName, slug: selectedSoftSkill },
          { entryName: searchParamName, slug: newSearchTerm },
          { entryName: archivedParamName, slug: true.toString() },
        ],
        basePath,
      ),
    );
  };

  //^ Filtering Logic
  let filteredBlogs = searchedBlogs;

  // Filter by blog category
  if (selectedBlogSection !== "all") {
    filteredBlogs = filterMaterialByCategory<BlogInterface>(
      stringToSlug(selectedBlogSection),
      filteredBlogs,
    );
  }

  // Filter by skill category
  if (selectedSkillCategory !== "all") {
    filteredBlogs = filterMaterialBySkillCategory<BlogInterface>(
      stringToSlug(selectedSkillCategory),
      filteredBlogs,
    );
  }

  // Filter by hard skill
  if (selectedTechnicalSkill !== "all") {
    filteredBlogs = filterMaterialBySkill<BlogInterface>(
      selectedTechnicalSkill,
      filteredBlogs,
      "hard",
    );
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredBlogs = filterMaterialBySkill<BlogInterface>(
      selectedGeneralSkill,
      filteredBlogs,
      "general",
    );
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredBlogs = filterMaterialBySkill<BlogInterface>(
      selectedSoftSkill,
      filteredBlogs,
      "soft",
    );
  }

  // Filter by archived status
  filteredBlogs = filterMaterialByArchivedStatus<BlogInterface>(
    showArchived,
    filteredBlogs,
  );

  const groupedBlogs = groupMaterialsByCategory(filteredBlogs);

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
      <div className="flex flex-col md:flex-row items-center w-full mt-12 py-2 gap-4">
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
          <Button
            variant="default"
            onClick={handleToggleFilter}
            className="w-full flex justify-start"
          >
            <div className="flex items-center space-x-2">
              <BsFilterLeft
                fontSize={24}
                className="text-neutral-700 dark:text-neutral-200"
              />
              <span>Filters</span>
            </div>
          </Button>

          {/* Clear Button */}
          <Link href={basePath} className="w-full">
            <Button
              variant="default"
              disabled={!areFiltersApplied}
              className="w-full flex justify-start"
            >
              <div className="flex items-center space-x-2">
                <AiOutlineClear
                  fontSize={24}
                  className="text-neutral-700 dark:text-neutral-200"
                />
                <span>Clear All</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Toggle to display archived projects */}
      <ArchiveToggle
        generateUrl={generateUrl}
        showArchived={showArchived}
        filterProps={[
          { entryName: blogSectionParamName, slug: selectedBlogSection },
          { entryName: skillCategoryParamName, slug: selectedSkillCategory },
          { entryName: technicalSkillParamName, slug: selectedTechnicalSkill },
          { entryName: generalSkillParamName, slug: selectedGeneralSkill },
          { entryName: softSkillParamName, slug: selectedSoftSkill },
          { entryName: searchParamName, slug: searchTerm },
        ]}
        basePath={basePath}
      />

      {/* Blog List */}
      <BlogsList groupedBlogs={groupedBlogs} />

      {/* Filter Modal */}
      <FilterOverlay
        isOpen={isFilterOpen}
        toggle={handleToggleFilter}
        filterCategories={filterCategories}
        basePath={basePath}
        archiveFilter={{
          paramName: archivedParamName,
          status: showArchived,
        }}
        areFiltersApplied={areFiltersApplied}
      />
    </>
  );
};

export default BlogsView;
