"use client";

import Button from "@/components/Atoms/Button";
import RadioButton from "@/components/Inputs/RadioButton";
import SearchInput from "@/components/Inputs/SearchInput";
import Modal from "@/components/Modal/Modal";
import HeadingOne from "@/components/Text/HeadingOne";
import Project from "@/types/projects";
import Fuse from "fuse.js";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import ProjectSection from "./ProjectSection";

type ProjectsListProps = {
  allProjects: Project[];
};

const ProjectsList: React.FC<ProjectsListProps> = ({ allProjects }) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const selectedTechnology = searchParams.get("technology") || "All";
  const selectedLanguage = searchParams.get("language") || "All";
  const selectedType = searchParams.get("type") || "All";
  const searchTerm = searchParams.get("search") || "";

  const router = useRouter();

  /**
   * Generates the URL for the projects page.
   * These are the URL parameters that are used for filtering and searching.
   * Once filters and search are applied, the URL is updated.
   */
  const generateUrl = (
    type: string,
    technology: string,
    language: string,
    search: string
  ) => {
    // Validate and encode filter values
    const validatedType = encodeURIComponent(type.trim());
    const validatedTechnology = encodeURIComponent(technology.trim());
    const validatedLanguage = encodeURIComponent(language.trim());
    const validatedSearch = encodeURIComponent(search.trim());

    // Construct and return the URL
    return `/projects/?type=${validatedType}&technology=${validatedTechnology}&language=${validatedLanguage}&search=${validatedSearch}`;
  };

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

  /**
   * Fuse.js options for fuzzy search.
   * These are the only properties that are searched.
   * These are the same ones from the Project type.
   */
  const options = {
    keys: ["name", "programmingLanguage", "tags", "technologies"], // Only search these properties
    threshold: 0.3, // Lower threshold means more results
  };

  /**
   * Fuse object that is used to search the projects.
   * @param allProjects (Project[]): list of all projects
   * @param options (Fuse.IFuseOptions<Project>): options for fuzzy search
   */
  const fuse = new Fuse(allProjects, options);

  /**
   * Groups the projects by type.
   * Each project type is a key in the object.
   * @param projects (Project[]): list of projects to be grouped by type
   * @returns (Record<string, Project[]>): object with project types as keys and list of projects as values
   */
  const groupProjectsByType = (
    projects: Project[]
  ): Record<string, Project[]> => {
    return projects.reduce<Record<string, Project[]>>((grouped, project) => {
      (grouped[project.type] = grouped[project.type] || []).push(project);
      return grouped;
    }, {});
  };

  /**
   * List of projects that match the search term.
   */
  const searchedProjects = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : allProjects;

  //^ List of options
  /**
   * List of project types to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique project types to the list.
   * Project types are from the 'type' property of each project.
   */
  const projectTypes: string[] = [
    "All",
    ...allProjects
      .map((project: Project) => project.type)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  /**
   * List of programming languages to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique programming languages to the list.
   * Programming languages are from the 'programmingLanguage' property of each project.
   */
  const programmingLanguages: string[] = [
    "All",
    ...allProjects
      .map((project: Project) => project.programmingLanguage)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  /**
   * List of technologies to be displayed in the filter.
   * Adds 'All' as the first option.
   * Appends all unique technologies to the list.
   * Technologies are from the 'technologies' property of each project.
   */
  const technologies: string[] = [
    "All",
    ...Array.from(
      new Set(
        allProjects.flatMap((project: Project) => project.technologies || [])
      )
    ),
  ];

  /**
   * Updates the search term in the URL.
   * This is used when the user types in the search input.
   * @param newSearchTerm (string): new search term
   */
  const updateSearchTerm = (newSearchTerm: string) => {
    // Update the URL parameter to reflect the new search term
    router.push(
      generateUrl(
        selectedType,
        selectedTechnology,
        selectedLanguage,
        newSearchTerm
      )
    );
  };

  /**
   * Filters the projects based on the the filter options.
   * Both language and type can be filtered.
   * If 'All' is selected, then all projects are displayed.
   */
  const filteredProjects = searchedProjects.filter(
    (project) =>
      (selectedType === "All" || project.type === selectedType) &&
      (selectedLanguage === "All" ||
        project.programmingLanguage === selectedLanguage) &&
      (selectedTechnology === "All" ||
        (project.technologies &&
          project.technologies.includes(selectedTechnology)))
  );

  /**
   * Projects categorized by type.
   */
  const groupedProjects = groupProjectsByType(filteredProjects);

  /**
   * Resets all the filters.
   * This is used when the user clicks on the 'Reset' button.
   */
  const resetFilters = () => {
    router.push(generateUrl("All", "All", "All", ""));
  };

  /**
   * Checks if any filters are applied.
   */
  const areFiltersApplied =
    selectedType !== "All" ||
    selectedLanguage !== "All" ||
    selectedTechnology !== "All" ||
    searchTerm !== "";

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Projects" />

        <div className="flex flex-col-reverse md:flex-row items-center w-full mt-12 p-2 gap-4">
          {/* Buttons */}
          <div className="flex flex-row md:flex-1 gap-2 w-full">
            {/* Filter Button */}
            <Button
              variant="outlined"
              onClick={handleOpenFilterModal}
              className={`
                px-4 py-2 w-full
                text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize hover:text-neutral-700 dark:hover:text-neutral-200
                rounded-xl
                shadow-md hover:shadow-lg focus:shadow-lg
                bg-neutral-100 dark:bg-neutral-800 
                hover:bg-neutral-100 dark:hover:bg-neutral-800
                border-2 border-transparent dark:border-transparent
                hover:border-red-500 dark:hover:border-red-800
                transition-all duration-500 ease-in-out
              `}
            >
              <div className="flex items-center space-x-2">
                <BsFilterLeft
                  fontSize={24}
                  className="text-neutral-700 dark:text-neutral-200"
                />
                <span>Filter</span>
              </div>
            </Button>
            {/* Clear Button */}
            <Button
              variant="outlined"
              onClick={resetFilters}
              disabled={!areFiltersApplied}
              className={`
                px-4 py-2 w-full
                text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize hover:text-neutral-700 dark:hover:text-neutral-200
                rounded-xl
                shadow-md hover:shadow-lg focus:shadow-lg
                bg-neutral-100 dark:bg-neutral-800 
                hover:bg-neutral-100 dark:hover:bg-neutral-800
                border-2 border-transparent dark:border-transparent
                hover:border-red-500 dark:hover:border-red-800
                transition-all duration-500 ease-in-out
              `}
            >
              <div className="flex items-center space-x-2">
                <MdClear
                  fontSize={24}
                  className="text-neutral-700 dark:text-neutral-200"
                />
                <span>Reset</span>
              </div>
            </Button>
          </div>

          {/* Search input */}
          <div className="w-full md:flex-1">
            <SearchInput
              searchTerm={searchTerm}
              updateSearchTerm={updateSearchTerm}
              placeholder="Search project name or metadata"
            />
          </div>
        </div>

        {/* List of projects */}
        <div className="flex flex-col space-y-20 mt-14">
          {Object.keys(groupedProjects).length > 0 ? (
            Object.keys(groupedProjects).map(
              (type) =>
                type !== "All" && (
                  <ProjectSection
                    key={type}
                    title={type}
                    projects={groupedProjects[type]}
                  />
                )
            )
          ) : (
            <div className="flex justify-center min-w-full mt-14">
              <h2 className="text-2xl font-bold">No projects</h2>
            </div>
          )}
        </div>

        {/* Filter Modal */}
        <Modal
          isOpen={isFilterModalOpen}
          onClose={handleCloseModals}
          title={"Filter"}
          className="sm:max-w-4xl w-full sm:w-full max-h-[70vh] min-h-[50vh]"
        >
          <div
            className="
            px-8 md:px-0
            flex flex-row 
            justify-center mb-4  
"
          >
            <div className="flex flex-row w-full md:w-1/2 space-x-2 ">
              <Button
                variant="outlined"
                onClick={() => {
                  if (handleCloseModals) handleCloseModals();
                  resetFilters();
                }}
                className="py-1.5 px-6 w-full"
              >
                Cancel
              </Button>
              <Button
                variant="filled"
                onClick={handleCloseModals}
                disabled={!areFiltersApplied}
                className="py-1.5 px-6 w-full"
              >
                Apply
              </Button>
            </div>
          </div>
          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="px-8 md:px-0">
              {/* Category Filter */}
              <label htmlFor="type-dropdown" className="font-semibold text-lg">
                Category
              </label>
              <div className="h-64 md:h-80 overflow-y-auto space-y-2">
                {projectTypes.map((type) => (
                  <Link
                    href={generateUrl(
                      type,
                      selectedTechnology,
                      selectedLanguage,
                      searchTerm
                    )}
                    key={type}
                  >
                    <RadioButton
                      key={type}
                      id={type}
                      name="projectType"
                      value={type}
                      checked={selectedType === type}
                      label={type}
                    />
                  </Link>
                ))}
              </div>
            </div>
            {/* Language Filter */}
            <div className="px-8 md:px-0">
              <label
                htmlFor="language-dropdown"
                className="font-semibold text-lg"
              >
                Language
              </label>
              <div className="h-64 md:h-80 overflow-y-auto space-y-2">
                {programmingLanguages.map((language) => (
                  <Link
                    href={generateUrl(
                      selectedType,
                      selectedTechnology,
                      language,
                      searchTerm
                    )}
                    key={language}
                  >
                    <RadioButton
                      key={language}
                      id={language}
                      name="programmingLanguage"
                      value={language}
                      checked={selectedLanguage === language}
                      label={language}
                    />
                  </Link>
                ))}
              </div>
            </div>
            {/* Technology Filter */}
            <div className="px-8 md:px-0">
              <label
                htmlFor="language-dropdown"
                className="font-semibold text-lg block"
              >
                Technologies
              </label>
              <div className="h-64 md:h-80 overflow-y-auto space-y-2">
                {technologies.map((technology) => (
                  <Link
                    href={generateUrl(
                      selectedType,
                      technology,
                      selectedLanguage,
                      searchTerm
                    )}
                    key={technology}
                  >
                    <RadioButton
                      key={technology}
                      id={technology}
                      name="technology"
                      value={technology}
                      checked={selectedTechnology === technology}
                      label={technology}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ProjectsList;
