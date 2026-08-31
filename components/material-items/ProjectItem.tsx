import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { BsArrowUpRightCircle, BsGithub, BsInfoCircle } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import { ROUTES } from "@/constants/routes";
import projectDatabaseMap from "@/database/projects/ProjectDatabaseMap";
import type ProjectInterface from "@/database/projects/ProjectInterface";
import { AspectRatio } from "../shadcn/ui/aspect-ratio";

interface ProjectItemProps {
  projectKey: string;
  subtitle?: null | "type" | "category";
}

/**
 * Shared project card used on the homepage, projects archive, and related material tabs so every surface highlights projects the same way.
 * Pulls details straight from the static DB and wires buttons to internal/external destinations depending on what metadata exists.
 *
 * @param projectKey Project slug from `ProjectDatabaseKeys`.
 * @param subtitle Optional variant that shows either the project type or category beneath the title.
 * @returns Responsive card with cover media, description, and action buttons.
 */
const ProjectItem: React.FC<ProjectItemProps> = ({
  projectKey,
  subtitle = null,
}) => {
  const basePath: string = ROUTES.PROJECTS.path;
  const projectData: ProjectInterface = projectDatabaseMap[projectKey];
  const linkStyle: string =
    "md:hover:-translate-y-1 transition-transform cursor-pointer hover:shadow-lg rounded-full";

  return (
    <div className="rounded-xl border border-neutral-300 bg-neutral-100 p-4 shadow-sm transition-colors duration-700 sm:bg-transparent sm:p-0 md:border-0 md:shadow-none lg:shadow-none dark:border-neutral-700 dark:bg-neutral-800 sm:dark:bg-transparent">
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* Project Cover */}
        {projectData.thumbnailImage ? (
          <div className="transform rounded-xl shadow-md transition-all duration-500 ease-in-out lg:w-1/2 lg:hover:scale-104 lg:hover:shadow-2xl">
            <Link href={`${basePath}/${projectKey}`}>
              <AspectRatio ratio={8 / 5} className="relative overflow-hidden">
                <Image
                  src={projectData.thumbnailImage}
                  key={projectData.thumbnailImage}
                  alt={`${projectData.name} cover image`}
                  fill={true}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={15}
                  className="cursor-pointer rounded-xl object-cover"
                />
              </AspectRatio>
            </Link>
          </div>
        ) : (
          <div>
            <div className="h-[110%] rounded-xl border-red-400 border-l-4 transition-all duration-500 ease-in-out dark:border-red-900" />
          </div>
        )}

        <div
          className={`mt-8 ${
            projectData.thumbnailImage ? "lg:w-1/2" : "lg:w-full"
          }`}
        >
          {/* Project Title */}
          <Link href={`${basePath}/${projectKey}`}>
            <h1 className="mb-2 flex flex-col items-center justify-center text-center font-bold text-3xl transition-colors duration-500 ease-in-out md:items-start md:text-left md:text-4xl md:hover:text-red-500 md:dark:hover:text-red-800">
              {projectData.name}
            </h1>
          </Link>

          {/* Project Subtitle */}
          {!!subtitle && (
            <p className="-mb-2 text-center font-medium text-red-700 italic lg:text-left dark:text-red-300">
              {subtitle === "type" && `${projectData.type} Project`}
              {subtitle === "category" && `${projectData.category}`}
            </p>
          )}

          {/* Project Description */}
          <p className="mt-4 mb-4 text-left text-neutral-600 text-xl leading-7 dark:text-neutral-400">
            {projectData.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-row justify-center space-x-4 align-bottom md:justify-start">
            {/* Project Page */}
            <Tooltip>
              <TooltipTrigger>
                <Link href={`${basePath}/${projectKey}`}>
                  <BsInfoCircle size={30} className={linkStyle} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Project Details</p>
              </TooltipContent>
            </Tooltip>

            {/* Repository */}
            {projectData.repositoryURL && (
              <Tooltip>
                <TooltipTrigger>
                  <Link href={projectData.repositoryURL} target="_blank">
                    <BsGithub size={30} className={linkStyle} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub Repository for Project</p>
                </TooltipContent>
              </Tooltip>
            )}
            {/* Project Website */}
            {projectData.deploymentURL && (
              <Tooltip>
                <TooltipTrigger>
                  <Link href={projectData.deploymentURL} target="_blank">
                    <BsArrowUpRightCircle size={30} className={linkStyle} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Project Website</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
