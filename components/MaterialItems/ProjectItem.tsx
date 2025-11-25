import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import { PROJECTS_PAGE } from "@/constants/pages";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle, BsGithub, BsInfoCircle } from "react-icons/bs";
import { AspectRatio } from "../shadcn/ui/aspect-ratio";
import projectDatabaseMap from "@/database/Projects/ProjectDatabaseMap";

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
  const basePath: string = PROJECTS_PAGE.path;
  const projectData: ProjectInterface = projectDatabaseMap[projectKey];
  const linkStyle: string =
    "md:hover:-translate-y-1 transition-transform cursor-pointer hover:shadow-lg rounded-full";

  return (
    <div
      className="
      bg-neutral-100 dark:bg-neutral-800 
        sm:bg-transparent sm:dark:bg-transparent
        p-4 sm:p-0
        rounded-xl 
        border border-neutral-300 dark:border-neutral-700 md:border-0
        sm:shadow-md md:shadow-none lg:shadow-none
        transition-colors duration-700"
    >
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        {/* Project Cover */}
        {projectData.thumbnailImage ? (
          <div
            className="
              lg:w-1/2
              rounded-xl
              transform lg:hover:scale-105 
              shadow-xl lg:hover:shadow-2xl
              transition-all duration-500 ease-in-out
              "
          >
            <Link href={`${basePath}/${projectKey}`}>
              <AspectRatio ratio={8 / 5} className="overflow-hidden relative">
                <Image
                  src={projectData.thumbnailImage}
                  key={projectData.thumbnailImage}
                  alt={`${projectData.name} cover image`}
                  fill={true}
                  quality={15}
                  className="
                    rounded-xl 
                    cursor-pointer
                    object-cover
                  "
                />
              </AspectRatio>
            </Link>
          </div>
        ) : (
          <div>
            <div
              className="
                border-l-4 border-red-400 dark:border-red-900
                transition-all duration-500 ease-in-out
                h-[110%]
                rounded-xl
                "
            />
          </div>
        )}

        <div
          className={`mt-8 ${
            projectData.thumbnailImage ? "lg:w-1/2" : "lg:w-full"
          }`}
        >
          {/* Project Title */}
          <Link href={`${basePath}/${projectKey}`}>
            <h1
              className="
                  flex flex-col
                  justify-center items-center md:items-start
                  mb-2
                  text-3xl md:text-4xl font-bold text-center md:text-left 
                  md:hover:text-red-500 md:dark:hover:text-red-800
                  transition-colors duration-500 ease-in-out
                "
            >
              {projectData.name}
            </h1>
          </Link>

          {/* Project Subtitle */}
          {!!subtitle && (
            <p
              className="
                italic font-medium
                text-red-700 dark:text-red-300
                text-center lg:text-left
                -mb-2
              "
            >
              {subtitle === "type" && `${projectData.type} Project`}
              {subtitle === "category" && `${projectData.category}`}
            </p>
          )}

          {/* Project Description */}
          <p className="text-xl text-left leading-7 mt-4 mb-4 text-neutral-600 dark:text-neutral-400">
            {projectData.description}
          </p>

          {/* Buttons */}
          <div
            className="
              flex flex-row 
              justify-center md:justify-start 
              align-bottom 
              space-x-4 mt-8"
          >
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
