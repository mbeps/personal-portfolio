"use client";

import generateUrl from "@/actions/generateUrl";
import generateFilterOptionsByCategory from "@/actions/material/filterOptions/generateFilterOptionsByCategory";
import { generateFilterOptionsBySkillCategories } from "@/actions/material/filterOptions/generateFilterOptionsBySkillCategories";
import generateFilterOptionsBySkillType from "@/actions/material/filterOptions/generateFilterOptionsBySkillType";
import groupMaterialsByCategory from "@/actions/material/group/groupMaterialsByCategory";
import generateFilterOptionsForProgrammingLanguages from "@/actions/material/filterOptions/generateFilterOptionsForProgrammingLanguages";
import stringToSlug from "@/actions/stringToSlug";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import FilterOverlay from "@/components/Filters/FilterPanel";
import SearchInput from "@/components/Inputs/SearchInput";
import ProjectsList from "@/components/MaterialLists/ProjectsList";
import { Button } from "@/components/shadcn/ui/button";
import projectDatabase from "@/database/projects";
import skillDatabase from "@/database/skills";
import ProjectKeysEnum from "@/enums/DatabaseKeysEnums/ProjectKeysEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import useFuseSearch from "@/hooks/useFuseSearch";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import MaterialGroupInterface from "@/interfaces/material/MaterialGroupInterface";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import filterMaterialBySkill from "@/actions/material/filter/filterMaterialBySkill";
import filterMaterialByCategory from "@/actions/material/filter/filterMaterialByCategory";
import filterMaterialBySkillCategory from "@/actions/material/filter/filterMaterialBySkillCategory";
import filterMaterialByArchivedStatus from "@/actions/material/filter/filterMaterialByArchivedStatus";

const ProjectsView: React.FC = () => {
  //^ Hooks
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const basePath: string = usePathname();
  const router = useRouter();

  //^ URL Params Strings
  const technologyParamName = "technology";
  const languageParamName = "language";
  const sectionParamName = "type";
  const skillCategoryParamName = "category";
  const generalSkillParamName = "general";
  const softSkillParamName = "soft";

  const archivedParamName = "archived";
  const searchParamName = "search";

  //^ URL Params Reader
  const selectedTechnology: string =
    searchParams.get(technologyParamName) || "all";
  const selectedLanguage: string = searchParams.get(languageParamName) || "all";
  const selectedSection: string = searchParams.get(sectionParamName) || "all";
  const selectedSkillCategory =
    searchParams.get(skillCategoryParamName) || "all";
  const selectedGeneralSkill: string =
    searchParams.get(generalSkillParamName) || "all";
  const selectedSoftSkill: string =
    searchParams.get(softSkillParamName) || "all";

  const searchTerm: string = searchParams.get(searchParamName) || "";
  const showArchived: boolean =
    (searchParams.get(archivedParamName) || "false") === "true";

  //^ Modal Controls
  const handleToggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  //^ Search Settings
  /**
   * Fuse.js options for fuzzy search.
   * These are the only properties that are searched.
   * These are the same ones from the Project type.
   */
  const searchOptions = [
    "name",
    "category",
    "skills.name",
    "skills.category",
    "skills.relatedSkills.name",
    "skills.relatedSkills.category",
  ];

  let filteredProjectsSlugArray: ProjectKeysEnum[] = useFuseSearch(
    projectDatabase,
    searchTerm,
    searchOptions
  ) as ProjectKeysEnum[];

  //^ Filtering Logic

  // Filter by project type category
  if (stringToSlug(selectedSection) !== "all") {
    filteredProjectsSlugArray = filterMaterialByCategory<ProjectInterface>(
      stringToSlug(selectedSection),
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by programming language
  if (selectedLanguage !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkill(
      selectedLanguage as SkillKeysEnum,
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by technology (assuming you have a similar function for technologies)
  if (selectedTechnology !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkill<ProjectInterface>(
      selectedTechnology as SkillKeysEnum,
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by skill category
  if (stringToSlug(selectedSkillCategory) !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkillCategory<ProjectInterface>(
      filteredProjectsSlugArray,
      projectDatabase,
      stringToSlug(selectedSkillCategory),
      skillDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkill<ProjectInterface>(
      selectedGeneralSkill as SkillKeysEnum,
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredProjectsSlugArray = filterMaterialBySkill<ProjectInterface>(
      selectedSoftSkill as SkillKeysEnum,
      filteredProjectsSlugArray,
      projectDatabase
    ) as ProjectKeysEnum[];
  }

  // Filter by archived status
  filteredProjectsSlugArray = filterMaterialByArchivedStatus<ProjectInterface>(
    showArchived,
    filteredProjectsSlugArray,
    projectDatabase
  ) as ProjectKeysEnum[];

  /**
   * Projects categorized by type.
   */
  const groupedProjects: MaterialGroupInterface[] = groupMaterialsByCategory(
    filteredProjectsSlugArray,
    projectDatabase
  );

  /**
   * Updates the search term in the URL.
   * This is used when the user types in the search input.
   * @param newSearchTerm (string): new search term
   */
  const updateSearchTerm = (newSearchTerm: string) => {
    router.push(
      generateUrl(
        [
          { entryName: sectionParamName, slug: selectedSection },
          { entryName: technologyParamName, slug: selectedTechnology },
          { entryName: languageParamName, slug: selectedLanguage },
          { entryName: skillCategoryParamName, slug: selectedSkillCategory },
          { entryName: generalSkillParamName, slug: selectedGeneralSkill },
          { entryName: softSkillParamName, slug: selectedSoftSkill },
          { entryName: searchParamName, slug: newSearchTerm },
          { entryName: archivedParamName, slug: true.toString() },
        ],
        basePath
      )
    );
  };

  /**
   * Checks if any filters are applied.
   */
  const areFiltersApplied =
    selectedSection !== "all" ||
    selectedTechnology !== "all" ||
    selectedLanguage !== "all" ||
    selectedSkillCategory !== "all" ||
    selectedGeneralSkill !== "all" ||
    selectedSoftSkill !== "all" ||
    searchTerm !== "" ||
    showArchived;

  const filterCategories: FilterCategory[] = [
    {
      sectionName: "Section",
      urlParam: sectionParamName,
      selectedValue: selectedSection,
      options:
        generateFilterOptionsByCategory<ProjectInterface>(projectDatabase),
    },
    {
      sectionName: "Programming Language",
      urlParam: languageParamName,
      selectedValue: selectedLanguage,
      options: generateFilterOptionsForProgrammingLanguages<ProjectInterface>(
        projectDatabase,
        skillDatabase
      ),
    },
    {
      sectionName: "Technology",
      urlParam: technologyParamName,
      selectedValue: selectedTechnology,
      options: generateFilterOptionsBySkillType<ProjectInterface>(
        projectDatabase,
        skillDatabase,
        SkillTypesEnum.Hard
      ),
    },
    {
      sectionName: "Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: generateFilterOptionsBySkillCategories<ProjectInterface>(
        projectDatabase,
        skillDatabase
      ),
    },
    {
      sectionName: "General Skill",
      urlParam: generalSkillParamName,
      selectedValue: selectedGeneralSkill,
      options: generateFilterOptionsBySkillType<ProjectInterface>(
        projectDatabase,
        skillDatabase,
        SkillTypesEnum.General
      ),
    },
    {
      sectionName: "Soft Skill",
      urlParam: softSkillParamName,
      selectedValue: selectedSoftSkill,
      options: generateFilterOptionsBySkillType<ProjectInterface>(
        projectDatabase,
        skillDatabase,
        SkillTypesEnum.Soft
      ),
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
            placeholder="Search project name or metadata"
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
          { entryName: sectionParamName, slug: selectedSection },
          { entryName: technologyParamName, slug: selectedTechnology },
          { entryName: languageParamName, slug: selectedLanguage },
          { entryName: skillCategoryParamName, slug: selectedSkillCategory },
          { entryName: generalSkillParamName, slug: selectedGeneralSkill },
          { entryName: softSkillParamName, slug: selectedSoftSkill },
          { entryName: searchParamName, slug: searchTerm },
        ]}
        basePath={basePath}
      />

      {/* List of projects */}
      <ProjectsList groupedMaterial={groupedProjects} />

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

export default ProjectsView;
