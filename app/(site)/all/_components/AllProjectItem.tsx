import type React from "react";
import CvItemSkills from "@/app/cv/_components/CvItemSkills";
import Reader from "@/components/reader/Reader";
import { PATHS } from "@/constants/paths";
import type ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import type ProjectInterface from "@/database/projects/ProjectInterface";
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
  );

  return (
    <div className="mb-12 break-inside-avoid">
      <h3 className="mb-2 font-bold text-2xl">{project.name}</h3>
      <p className="mb-4 text-lg text-neutral-700 dark:text-neutral-300">
        {project.description}
      </p>

      <div className="mb-6 flex flex-col gap-1 text-lg">
        {project.deploymentURL && (
          <div>
            <span className="font-bold">Deployment: </span>
            <a
              href={project.deploymentURL}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-primary hover:underline"
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
              className="break-all text-primary hover:underline"
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
          <h4 className="mb-4 border-neutral-200 border-b-2 pb-2 font-bold text-xl uppercase tracking-wider dark:border-neutral-800">
            Key Features
          </h4>
          <Reader content={features} size="base" />
        </div>
      )}
    </div>
  );
};

export default AllProjectItem;
