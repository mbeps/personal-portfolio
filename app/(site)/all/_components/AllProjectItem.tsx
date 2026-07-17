import React from "react";
import ProjectInterface from "@/database/projects/ProjectInterface";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import CvItemSkills from "@/app/cv/_components/CvItemSkills";
import Reader from "@/components/reader/Reader";
import { PATHS } from "@/constants/paths";
import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";

/**
 * Props for the AllProjectItem component.
 */
interface AllProjectItemProps {
  /** The project object to render. */
  project: ProjectInterface;
  /** The unique key for the project. */
  projectKey: ProjectDatabaseKeys;
}

/**
 * AllProjectItem renders a project with its description, links, skills,
 * and features read from a markdown file.
 *
 * @param {AllProjectItemProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const AllProjectItem: React.FC<AllProjectItemProps> = ({
  project,
  projectKey,
}) => {
  const features = getMarkdownFromFileSystem(
    PATHS.PROJECTS(projectKey).FEATURES,
  )?.content;

  return (
    <div className="mb-12 break-inside-avoid">
      <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
      <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
        {project.description}
      </p>

      <div className="flex flex-col gap-1 mb-6 text-lg">
        {project.deploymentURL && (
          <div>
            <span className="font-bold">Deployment: </span>
            <a
              href={project.deploymentURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline break-all"
            >
              {project.deploymentURL.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
        {project.repositoryURL && (
          <div>
            <span className="font-bold">Repository: </span>
            <a
              href={project.repositoryURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline break-all"
            >
              {project.repositoryURL.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
      </div>

      <div className="mb-6">
        <CvItemSkills skills={project.skills} showArchived={true} />
      </div>

      {features && (
        <div className="mt-6">
          <h4 className="text-xl font-bold border-b-2 border-neutral-200 dark:border-neutral-800 pb-2 mb-4 uppercase tracking-wider">
            Key Features
          </h4>
          <Reader content={features} size="lg:prose-lg" />
        </div>
      )}
    </div>
  );
};

export default AllProjectItem;
