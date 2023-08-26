"use client";

import Button from "@/components/Atoms/Button";
import Checkbox from "@/components/Inputs/Checkbox";
import RadioButton from "@/components/Inputs/RadioButton";
import SearchInput from "@/components/Inputs/SearchInput";
import Modal from "@/components/Modal/Modal";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingOne from "@/components/Text/HeadingOne";
import HeadingTwo from "@/components/Text/HeadingTwo";
import {
  backendWebDevProjects,
  extraWebDevProjects,
  gameDevProjects,
  javaAssignments,
  machineLearningProjects,
  otherProjects,
  webdevProjects,
} from "@/constants/projects";
import useDebounce from "@/hooks/useDebounce";
import Project from "@/types/projects";

import Fuse from "fuse.js";
import { ChangeEvent, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { MdClear } from "react-icons/md";

/**
 * Projects page displaying multiple types of projects that I worked on.
 * Projects are grouped by type.
 * The user can filter the projects by type, language, and other options.
 * The user can also search for a specific project:
 * - Name of the project
 * - Programming language
 * - Type of project
 * - Technologies used
 * @returns (JSX.Element): Projects page
 */
const ProjectsPage = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  /**
   * Opens the modal to filter the projects.
   */
  const handleOpenFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  /**
   * Opens the modal to display more projects.
   */
  const handleOpenProjectsModal = () => {
    setIsProjectsModalOpen(true);
  };

  /**
   * Closes the modals.
   * These modals are for filtering and displaying more projects.
   */
  const handleCloseModals = () => {
    setIsFilterModalOpen(false);
  };

  /**
   * List of all projects.
   * They are displayed in the order they are added to the list.
   */
  const allProjects: Project[] = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...gameDevProjects,
    ...otherProjects,
  ];

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
  const searchedProjects = debouncedSearchTerm
    ? fuse.search(debouncedSearchTerm).map((result) => result.item)
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

  const technologies: string[] = [
    "All",
    ...Array.from(
      new Set(
        allProjects.flatMap((project: Project) => project.technologies || [])
      )
    ),
  ];

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
   * Handles the change of the type filter.
   * This is used to filter the projects by type.
   * @param event (ChangeEvent<HTMLInputElement>): event when the type is changed
   */
  const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  /**
   * Handles the change of the language filter.
   * This is used to filter the projects by language.
   * @param event (ChangeEvent<HTMLInputElement>): event when the language is changed
   */
  const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedLanguage(event.target.value);
  };

  /**
   * Resets all the filters.
   * This is used when the user clicks on the 'Reset' button.
   */
  const resetFilters = () => {
    setSelectedType("All");
    setSelectedLanguage("All");
    setSelectedTechnology("All");
    setSearchTerm("");
  };

  const areFiltersApplied =
    selectedType !== "All" ||
    selectedLanguage !== "All" ||
    selectedTechnology !== "All" ||
    searchTerm !== "";

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <title>Maruf - Projects</title>
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
              setSearchTerm={setSearchTerm}
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
                  <RadioButton
                    key={type}
                    id={type}
                    name="projectType"
                    value={type}
                    checked={selectedType === type}
                    onChange={handleTypeChange}
                    label={type}
                  />
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
                  <RadioButton
                    key={language}
                    id={language}
                    name="programmingLanguage"
                    value={language}
                    checked={selectedLanguage === language}
                    onChange={handleLanguageChange}
                    label={language}
                  />
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
                  <RadioButton
                    key={technology}
                    id={technology}
                    name="technology"
                    value={technology}
                    checked={selectedTechnology === technology}
                    onChange={(e) => setSelectedTechnology(e.target.value)}
                    label={technology}
                  />
                ))}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default ProjectsPage;

interface ProjectSectionProps {
  title: string;
  projects: Project[];
}

/**
 * Displays a list of projects with a title for the section.
 * @param title (string): title of the project section
 * @param projects (Project[]): list of projects to be displayed
 * @returns (JSX.Element): project section (title and list of projects)
 */
const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects }) => {
  return (
    <>
      <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
      <HeadingTwo title={title} />
      {projects &&
        projects.map((project, idx) => (
          <div key={idx}>
            <ProjectItem
              name={project.name}
              slug={project.slug}
              key={project.imageURL}
              description={project.description}
              imageURL={project.imageURL}
              repoURL={project.repoURL}
              siteURL={project.siteURL}
              programmingLanguage={project.programmingLanguage}
              technologies={project.technologies}
              type={project.type}
            />
          </div>
        ))}
    </>
  );
};
