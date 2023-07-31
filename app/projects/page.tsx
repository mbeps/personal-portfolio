"use client";

import Button from "@/components/Atoms/Button";
import HeadingOne from "@/components/Text/HeadingOne";
import HeadingTwo from "@/components/Text/HeadingTwo";
import Dropdown from "@/components/DropDown/DropDownMenu";
import MoreProjectsModal from "@/components/Modal/MoreProjectsModal";
import Project, {
  webdevProjects,
  machineLearningProjects,
  extraWebDevProjects,
  otherProjects,
  javaAssignments,
  backendWebDevProjects,
} from "@/types/projects";
import { ChangeEvent, useState } from "react";
import ProjectItem from "@/components/ProjectItem/ProjectItem";
import { Popover } from "@/components/Popover/Popover";
import RadioButton from "@/components/Inputs/RadioButton";
import Checkbox from "@/components/Inputs/Checkbox";
import useDebounce from "@/hooks/useDebounce";
import Fuse from "fuse.js";

/**
 * Projects page displaying multiple types of projects that I worked on.
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

  const options = {
    keys: ["name", "programmingLanguage", "type", "technologies"],
    threshold: 0.3,
  };
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

  const searchedProjects = debouncedSearchTerm
    ? fuse.search(debouncedSearchTerm).map((result) => result.item)
    : allProjects;

  //^ Drop Down Menu
  /**
   * List of project types to be displayed in the dropdown menu.
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
   * List of programming languages to be displayed in the dropdown menu.
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
   * Filters the projects based on the selected type and language.
   * Both language and type can be filtered.
   * If 'All' is selected, then all projects are displayed.
   */
  const filteredProjects = allProjects.filter(
    (project) =>
      (selectedType === "All" || project.type === selectedType) &&
      (selectedLanguage === "All" ||
        project.programmingLanguage === selectedLanguage) &&
      (!hasArticle || project.articleURL) &&
      (!hasSite || project.siteURL) &&
      (!hasImages || (project.imagesList && project.imagesList.length > 0))
  );

  const groupedProjects = groupProjectsByType(filteredProjects);

  const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const toggleHasArticle = () => {
    setHasArticle(!hasArticle);
  };

  const toggleHasSite = () => {
    setHasSite(!hasSite);
  };

  const toggleHasImages = () => {
    setHasImages(!hasImages);
  };

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full">
        <HeadingOne title="Projects" />

        {/* Search input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search projects..."
        />

        <Popover>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div>
              <label htmlFor="type-dropdown" className="font-semibold text-lg">
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

        <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-6"></div>

        {/* List of projects */}
        <div className="flex flex-col space-y-20 mt-14">
          {Object.keys(groupedProjects).map(
            (type) =>
              type !== "All" && (
                <ProjectSection
                  key={type}
                  title={type}
                  projects={groupedProjects[type]}
                />
              )
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
