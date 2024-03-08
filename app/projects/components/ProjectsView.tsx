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
import filterProjectsByProgrammingLanguage from "@/actions/material/projects/filterProjectsByProgrammingLanguage";
import generateFilterOptionsForProgrammingLanguages from "@/actions/material/projects/generateFilterOptionsForProgrammingLanguages";
import stringToSlug from "@/actions/stringToSlug";
import { ArchiveToggle } from "@/components/Filters/ArchiveToggle";
import FilterOverlay from "@/components/Filters/FilterPanel";
import SearchInput from "@/components/Inputs/SearchInput";
import ProjectsList from "@/components/MaterialLists/ProjectsList";
import { Button } from "@/components/shadcn/ui/button";
import FilterCategory from "@/interfaces/filters/FilterCategory";
import FilterOption from "@/interfaces/filters/FilterOption";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import { SkillTypesEnum } from "@/enums/SkillTypesEnum";
import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import Fuse from "fuse.js";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";

type ProjectsListProps = {
  allProjects: ProjectInterface[];
};

const ProjectsView: React.FC<ProjectsListProps> = ({ allProjects }) => {
  //^ Hooks
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const searchParams = useSearchParams();
  const basePath = usePathname();
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
  const selectedTechnology = searchParams.get(technologyParamName) || "all";
  const selectedLanguage = searchParams.get(languageParamName) || "all";
  const selectedSection = searchParams.get(sectionParamName) || "all";
  const selectedSkillCategory =
    searchParams.get(skillCategoryParamName) || "all";
  const selectedGeneralSkill = searchParams.get(generalSkillParamName) || "all";
  const selectedSoftSkill = searchParams.get(softSkillParamName) || "all";

  const searchTerm = searchParams.get(searchParamName) || "";
  const showArchived =
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
  const searchOptions = {
    keys: [
      "name",
      "category",
      "skills.name",
      "skills.category",
      "skills.relatedSkills.name",
      "skills.relatedSkills.category",
    ],
    threshold: 0.3, // Lower threshold means more results
  };

  /**
   * Fuse object that is used to search the projects.
   * @param allProjects (Project[]): list of all projects
   * @param options (Fuse.IFuseOptions<Project>): options for fuzzy search
   */
  const fuse = new Fuse(allProjects, searchOptions);

  /**
   * List of projects that match the search term.
   */
  const searchedProjects = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : allProjects;

  //^ Filter Options List
  /**
   * List of project types to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique project types to the list.
   * Project types are from the 'type' property of each project.
   */
  const projectTypes =
    generateFilterOptionsByCategory<ProjectInterface>(allProjects);

  /**
   * List of programming languages to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique programming languages to the list.
   * Programming languages are from the 'programmingLanguage' property of each project.
   */
  const programmingLanguages =
    generateFilterOptionsForProgrammingLanguages<ProjectInterface>(allProjects);

  /**
   * List of technologies to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique technologies to the list.
   * Technologies are from the 'technologies' property of each project.
   */
  const technologies = generateFilterOptionsBySkillType<ProjectInterface>(
    allProjects,
    SkillTypesEnum.Hard,
    SkillCategoriesEnum.ProgrammingLanguages
  );

  const categories =
    generateFilterOptionsBySkillCategories<ProjectInterface>(allProjects);

  const generalSkills: FilterOption[] =
    generateFilterOptionsBySkillType<ProjectInterface>(
      allProjects,
      SkillTypesEnum.General
    );

  const softSkills: FilterOption[] =
    generateFilterOptionsBySkillType<ProjectInterface>(
      allProjects,
      SkillTypesEnum.Soft
    );

  //^ Filtering Logic
  /**
   * Filters the projects based on the the filter options.
   * Both language and type can be filtered.
   * If 'All' is selected, then all projects are displayed.
   * Archived projects are not displayed by default.
   */
  let filteredProjects = searchedProjects;

  // Filter by project type category
  if (stringToSlug(selectedSection) !== "all") {
    filteredProjects = filterMaterialByCategory<ProjectInterface>(
      stringToSlug(selectedSection),
      filteredProjects
    );
  }

  // Filter by programming language
  if (selectedLanguage !== "all") {
    filteredProjects = filterProjectsByProgrammingLanguage(
      selectedLanguage,
      filteredProjects
    );
  }

  // Filter by technology (assuming you have a similar function for technologies)
  if (selectedTechnology !== "all") {
    filteredProjects = filterMaterialBySkill<ProjectInterface>(
      selectedTechnology,
      filteredProjects,
      SkillTypesEnum.Hard
    );
  }

  // Filter by skill category
  if (stringToSlug(selectedSkillCategory) !== "all") {
    filteredProjects = filterMaterialBySkillCategory<ProjectInterface>(
      stringToSlug(selectedSkillCategory),
      filteredProjects
    );
  }

  // Filter by general skill
  if (selectedGeneralSkill !== "all") {
    filteredProjects = filterMaterialBySkill<ProjectInterface>(
      selectedGeneralSkill,
      filteredProjects,
      SkillTypesEnum.General
    );
  }

  // Filter by soft skill
  if (selectedSoftSkill !== "all") {
    filteredProjects = filterMaterialBySkill<ProjectInterface>(
      selectedSoftSkill,
      filteredProjects,
      SkillTypesEnum.Soft
    );
  }

  // Filter by archived status
  filteredProjects = filterMaterialByArchivedStatus<ProjectInterface>(
    showArchived,
    filteredProjects
  );

  /**
   * Projects categorized by type.
   */
  const groupedProjects = groupMaterialsByCategory(filteredProjects);

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
      options: projectTypes,
    },
    {
      sectionName: "Programming Language",
      urlParam: languageParamName,
      selectedValue: selectedLanguage,
      options: programmingLanguages,
    },
    {
      sectionName: "Technology",
      urlParam: technologyParamName,
      selectedValue: selectedTechnology,
      options: technologies,
    },
    {
      sectionName: "Category",
      urlParam: skillCategoryParamName,
      selectedValue: selectedSkillCategory,
      options: categories,
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
