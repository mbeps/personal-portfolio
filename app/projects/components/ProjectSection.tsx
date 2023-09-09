import ProjectItem from "@/components/ProjectItem/ProjectItem";
import HeadingTwo from "@/components/Text/HeadingTwo";
import Project from "@/types/projects";
import React from "react";

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
    <section id={title.toLowerCase().replace(/\s+/g, "-")}>
      <div className="flex flex-col space-y-20">
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
      </div>
    </section>
  );
};

export default ProjectSection;
