"use client";

import Button from "@/components/Atoms/Button";
import Checkbox from "@/components/Inputs/Checkbox";
import RadioButton from "@/components/Inputs/RadioButton";
import SearchInput from "@/components/Inputs/SearchInput";
import MoreProjectsModal from "@/components/Modal/MoreProjectsModal";
import { Popover } from "@/components/Popover/Popover";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingOne from "@/components/Text/HeadingOne";
import HeadingTwo from "@/components/Text/HeadingTwo";
import useDebounce from "@/hooks/useDebounce";
import Project, {
  backendWebDevProjects,
  extraWebDevProjects,
  javaAssignments,
  machineLearningProjects,
  otherProjects,
  webdevProjects,
} from "@/types/projects";
import Fuse from "fuse.js";
import { ChangeEvent, useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [hasArticle, setHasArticle] = useState(false);
  const [hasSite, setHasSite] = useState(false);
  const [hasImages, setHasImages] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  /**
   * Opens the modal to display more projects.
   */
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Closes the modal to display more projects.
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
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
    ...otherProjects,
  ];

  /**
   * Fuse.js options for fuzzy search.
   * These are the only properties that are searched.
   * These are the same ones from the Project type.
   */
  const options = {
    keys: ["name", "programmingLanguage", "type", "technologies"], // Only search these properties
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
      (!hasArticle || project.articleURL) &&
      (!hasSite || project.siteURL) &&
      (!hasImages || (project.imagesList && project.imagesList.length > 0))
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
   * Toggles the filter for projects with articles.
   * If checked, only projects with articles are displayed.
   */
  const toggleHasArticle = () => {
    setHasArticle(!hasArticle);
  };

  /**
   * Toggles the filter for projects with sites.
   * If checked, only projects with sites are displayed.
   */
  const toggleHasSite = () => {
    setHasSite(!hasSite);
  };

  /**
   * Toggles the filter for projects with images.
   * If checked, only projects with images are displayed.
   */
  const toggleHasImages = () => {
    setHasImages(!hasImages);
  };

  /**
   * Resets all the filters.
   * This is used when the user clicks on the 'Reset' button.
   */
  const resetFilters = () => {
    setSelectedType("All");
    setSelectedLanguage("All");
    setHasArticle(false);
    setHasSite(false);
    setHasImages(false);
    setSearchTerm("");
  };

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Projects" />

        <div className="flex flex-col md:flex-row items-center w-full mt-12 p-2 gap-4">
          {/* Search input */}
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="flex flex-row gap-2">
            <Popover title={"Filter"}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div>
                  <label
                    htmlFor="type-dropdown"
                    className="font-semibold text-lg"
                  >
                    Category
                  </label>
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
                <div>
                  <label
                    htmlFor="language-dropdown"
                    className="font-semibold text-lg"
                  >
                    Language
                  </label>
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
                <div>
                  <label className="font-semibold text-lg">Filter</label>
                  <Checkbox
                    id="hasArticle"
                    checked={hasArticle}
                    onChange={toggleHasArticle}
                    label="Project with reflective blogs"
                  />
                  <Checkbox
                    id="hasSite"
                    checked={hasSite}
                    onChange={toggleHasSite}
                    label="Deployed projects"
                  />
                  <Checkbox
                    id="hasImages"
                    checked={hasImages}
                    onChange={toggleHasImages}
                    label="Projects with galleries"
                  />
                </div>
              </div>
            </Popover>
            {/* Reset button */}
            <Button
              variant="outlined"
              onClick={resetFilters}
              className={`
                px-4 py-2 
                text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize hover:text-neutral-700 dark:hover:text-neutral-200
                rounded-xl
                shadow-md hover:shadow-lg focus:shadow-lg
                bg-neutral-100 dark:bg-neutral-800 
                hover:bg-neutral-200 dark:hover:bg-neutral-700
                border-2 border-transparent
                hover:border-red-500 dark:hover:border-red-950
                transition-all duration-500 ease-in-out
              `}
            >
              <div className="flex items-center space-x-2">
                <MdClear />
                <span>Reset</span>
              </div>
            </Button>
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

        <div className="flex justify-center mt-10">
          <Button variant="outlined" onClick={handleOpenModal}>
            View More Projects
          </Button>
        </div>

        <MoreProjectsModal isOpen={isModalOpen} onClose={handleCloseModal} />
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
              articleURL={project.articleURL}
              programmingLanguage={project.programmingLanguage}
              technologies={project.technologies}
              type={project.type}
            />
          </div>
        ))}
    </>
  );
};
