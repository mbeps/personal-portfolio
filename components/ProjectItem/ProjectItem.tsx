import Project from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle, BsGithub, BsInfoCircle } from "react-icons/bs";

interface ProjectItemProps {
  project: Project;
}

/**
 * Card which displays a projects.
 * Contains:
 * - Name of the project
 * - Description of the project
 * - Optional image of the project
 * - Link to the GitHub repository of the project
 * - Button to open the modal listing the language and technologies used in the project
 * - Optional link to the live site of the project
 * - Optional link to the article of the project
 *
 * Some projects have an image that is displayed on the left side of the card.
 * This image is clickable and redirects to the project page.
 *
 * @param name (string): Name of the project
 * @param slug (string): Slug of the project used for routing
 * @param description (string): Description of the project
 * @param imageURL (string): URL of the image of the project
 * @param repoURL (string): URL of the GitHub repository of the project
 * @param repoURL (string): URL of the GitHub repository of the project
 * @param siteURL (string): URL of the live site of the project
 * @param articleURL (string): URL of the article of the project
 * @param programmingLanguage (string): Programming language of the project
 * @param technologies (string[]): List of technologies used in the project
 * @param type (string): Type of the project
 * @returns (JSX.Element): Project item component
 */
const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  if (project.hasImage) {
    project = {
      ...project,
      thumbnailImage: `/projects/${project.slug}/cover.png`,
    };
  }

  return (
    <div className="bg-neutral-100 dark:bg-neutral-950 p-4 rounded-xl sm:bg-white sm:dark:bg-neutral-900 sm:p-0 transition-colors duration-700 ">
      <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 lg:flex-row lg:space-x-12">
        {/* Project Cover */}
        {project.thumbnailImage && (
          <div
            className="
                lg:w-1/2
                rounded-xl
                transform md:hover:scale-105 
                shadow-xl md:hover:shadow-2xl
                transition-all duration-500 ease-in-out
              "
          >
            <Link href={`/projects/${project.slug}`}>
              <Image
                src={project.thumbnailImage}
                key={project.thumbnailImage}
                alt={`${project.name} cover image`}
                width={1000}
                height={1000}
                quality={40}
                className="
                  rounded-xl 
                  cursor-pointer"
              />
            </Link>
          </div>
        )}

        <div
          className={`mt-8 ${
            project.thumbnailImage ? "lg:w-1/2" : "lg:w-full"
          }`}
        >
          {/* Project Title */}
          <Link href={`/projects/${project.slug}`}>
            <h1
              className="
                  flex flex-col
                  justify-center items-center md:items-start
                  mb-6
                  text-3xl md:text-4xl font-bold text-center md:text-left 
                  md:hover:text-red-500 md:dark:hover:text-red-800
                  transition-colors duration-700 ease-in-out
                "
            >
              {project.name}
            </h1>
          </Link>

          {/* Project Description */}
          <p className="text-xl text-left leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
            {project.description}
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
            <Link href={`/projects/${project.slug}`} title="Project Page">
              <BsInfoCircle
                size={30}
                className="md:hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </Link>

            {/* Repository */}
            {project.repositoryURL && (
              <Link
                href={project.repositoryURL}
                target="_blank"
                title="Repository"
              >
                <BsGithub
                  size={30}
                  className="md:hover:-translate-y-1 transition-transform cursor-pointer"
                />
              </Link>
            )}
            {/* Project Website */}
            {project.deploymentURL && (
              <Link
                href={project.deploymentURL}
                target="_blank"
                title="Website"
              >
                <BsArrowUpRightCircle
                  size={30}
                  className="md:hover:-translate-y-1 transition-transform cursor-pointer"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
