"use client";

import Button from "@/components/Atoms/Button";
import ProjectItem from "@/components/Content/ProjectSection/ProjectItem";
import HeadingOne from "@/components/Content/Text/HeadingOne";
import HeadingTwo from "@/components/Content/Text/HeadingTwo";
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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2">
        <HeadingOne title="Projects" />
        <div className="flex flex-col space-y-20 mt-14">
          <ProjectSection
            title="Main Web Development"
            projects={webdevProjects}
          />
          <ProjectSection
            title="Extra Web Development"
            projects={extraWebDevProjects}
          />
          <ProjectSection
            title="Backend Web Development Examples"
            projects={backendWebDevProjects}
          />
          <ProjectSection
            title="Machine Learning"
            projects={machineLearningProjects}
          />
          <ProjectSection title="Java Assignments" projects={javaAssignments} />
          <ProjectSection title="Other Projects" projects={otherProjects} />
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
 * @returns (JSX.Element): project section (title and list of projects
 */
const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects }) => {
  return (
    <>
      <div className="border-b border-gray-200 dark:border-neutral-600 pb-2" />
      <HeadingTwo title={title} />
      {projects.map((project, idx) => (
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
          />
        </div>
      ))}
    </>
  );
};
