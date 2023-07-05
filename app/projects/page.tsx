"use client";

import Button from "@/components/Atoms/Button";
import ProjectItem from "@/components/Content/ProjectSection/ProjectItem";
import HeadingOne from "@/components/Content/Text/HeadingOne";
import HeadingTwo from "@/components/Content/Text/HeadingTwo";
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

/**
 * Projects page displaying multiple types of projects that I worked on.
 * @returns (JSX.Element): Projects page
 */
const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("All");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const allProjects: Project[] = [
    ...webdevProjects,
    ...machineLearningProjects,
    ...extraWebDevProjects,
    ...otherProjects,
    ...javaAssignments,
    ...backendWebDevProjects,
  ];

  const groupProjectsByType = (
    projects: Project[]
  ): Record<string, Project[]> => {
    return projects.reduce<Record<string, Project[]>>((grouped, project) => {
      (grouped[project.type] = grouped[project.type] || []).push(project);
      return grouped;
    }, {});
  };

  const projectTypes: string[] = [
    "All",
    ...allProjects
      .map((project: Project) => project.type)
      .filter((value, index, self) => self.indexOf(value) === index),
  ];

  const filteredProjects =
    selectedType === "All"
      ? groupProjectsByType(allProjects)
      : {
          [selectedType]: allProjects.filter(
            (project) => project.type === selectedType
          ),
        };

  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2">
        <HeadingOne title="Projects" />

        <div
          className="
        flex justify-content: flex-end justify-end
        relative z-10 mt-6 p-2
        "
        >
          <Dropdown
            selected={selectedType}
            options={projectTypes}
            setSelected={setSelectedType}
          />
        </div>

        <div className="flex flex-col space-y-20 mt-14">
          {Object.keys(filteredProjects).map(
            (type) =>
              type !== "All" && (
                <ProjectSection
                  key={type}
                  title={type}
                  projects={filteredProjects[type]}
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

export default ProjectsSection;

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
