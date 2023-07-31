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
import { useState } from "react";
import ProjectItem from "@/components/ProjectItem/ProjectItem";

/**
 * Projects page displaying multiple types of projects that I worked on.
 * @returns (JSX.Element): Projects page
 */
const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

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
        project.programmingLanguage === selectedLanguage)
  );

  const groupedProjects = groupProjectsByType(filteredProjects);

  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2">
        <HeadingOne title="Projects" />

        <div className="flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <label htmlFor="type-dropdown" className="font-semibold text-lg">
              Category
            </label>
            <Dropdown
              selected={selectedType}
              options={projectTypes}
              setSelected={setSelectedType}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <label
              htmlFor="language-dropdown"
              className="font-semibold text-lg"
            >
              Language
            </label>
            <Dropdown
              selected={selectedLanguage}
              options={programmingLanguages}
              setSelected={setSelectedLanguage}
            />
          </div>
        </div>

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
