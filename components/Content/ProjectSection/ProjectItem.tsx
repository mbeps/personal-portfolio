"use client";

import ProjectModal from "@/components/Modal/ProjectModal";
import Project from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { ImStack } from "react-icons/im";
import { IoReaderOutline } from "react-icons/io5";
import SlideUp from "./Slideup";

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
const ProjectItem: React.FC<Project> = ({
  name,
  slug,
  description,
  imageURL,
  imagesList,
  repoURL,
  siteURL,
  articleURL,
  programmingLanguage,
  technologies,
  type,
}) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Redirects the user to the repository if the repository link is available.
   */
  const handleClick = () => {
    if (slug) {
      router.push(`/projects/${slug}`);
    }
  };

  /**
   * Opens and closes modal.
   */
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="bg-neutral-100 dark:bg-stone-950 p-4 rounded-xl sm:bg-white sm:dark:bg-stone-900 sm:p-0 transition-colors duration-700 ">
        <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
          {/* Project Cover */}
          {imageURL && (
            <div
              className="
                md:w-1/2
                transform hover:scale-105 
                shadow-xl hover:shadow-2xl
                transition-all duration-500 ease-in-out
                border-2 border-green-500"
            >
              <Image
                src={imageURL}
                key={imageURL}
                alt=""
                width={1000}
                height={1000}
                className="
                  rounded-xl 
                  cursor-pointer"
                onClick={handleClick}
              />
            </div>
          )}

          <div className={`mt-8 ${imageURL ? "md:w-1/2" : "md:w-full"}`}>
            {/* Project Title */}
            <h1 className="text-4xl font-bold mb-6 text-left">{name}</h1>

            {/* Project Description */}
            <p className="text-xl text-left leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-row align-bottom space-x-4 mt-8">
              {/* Repository */}
              {repoURL && (
                <Link href={repoURL} target="_blank" title="Repository">
                  <BsGithub
                    size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              )}
              <div className="flex flex-row align-bottom space-x-4">
                {programmingLanguage && (
                  <button
                    className="-translate-y-0.5 hover:-translate-y-1.5 transition-transform cursor-pointer"
                    onClick={toggleModal}
                    title="Project Stack"
                  >
                    <ImStack size={34} />
                  </button>
                )}
                <ProjectModal
                  isOpen={isModalOpen}
                  onClose={toggleModal}
                  projectLanguage={programmingLanguage}
                  technologies={technologies}
                />
              </div>
              {/* Project Website */}
              {siteURL && (
                <Link href={siteURL} target="_blank" title="Website">
                  <BsArrowUpRightSquare
                    size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              )}
              {/* Project Reflection Blog */}
              {articleURL && (
                <Link href={articleURL} target="_blank" title="Report">
                  <IoReaderOutline
                    size={34}
                    className="-translate-y-0.5 hover:-translate-y-1.5 transition-transform cursor-pointer"
                  />
                </Link>
              )}
              {/* Project Stack */}
            </div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default ProjectItem;
