"use client";

import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./Slideup";
import { useRouter } from "next/navigation";
import Project from "@/types/projects";

/**
 * Card which displays a projects.
 * Contains:
 * - Name of the project
 * - Description of the project
 * - Optional image of the project
 * - Link to the GitHub repository of the project
 * - Optional link to the live site of the project
 * @param name (string): Name of the project
 * @param description (string): Description of the project
 * @param imageURL (string): URL of the image of the project
 * @param repoURL (string): URL of the GitHub repository of the project
 * @param siteURL (string): URL of the live site of the project
 * @returns (JSX.Element): Project item component
 */
const ProjectItem: React.FC<Project> = ({
  name,
  description,
  imageURL,
  repoURL,
  siteURL,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (siteURL) {
      router.push(siteURL);
    }
  };

  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="bg-neutral-100 dark:bg-stone-950 p-4 rounded-xl sm:bg-white sm:dark:bg-stone-900 sm:p-0 transition-colors duration-700 ">
        <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
          {imageURL && (
            <div className="md:w-1/2">
              <Image
                src={imageURL}
                alt=""
                width={1000}
                height={1000}
                className="rounded-xl shadow-xl hover:opacity-70 cursor-pointer"
                onClick={handleClick}
              />
            </div>
          )}
          <div className={`mt-8 ${imageURL ? "md:w-1/2" : "md:w-full"}`}>
            <h1 className="text-4xl font-bold mb-6">{name}</h1>
            <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
            <div className="flex flex-row align-bottom space-x-4">
              <Link href={repoURL} target="_blank">
                <BsGithub
                  size={30}
                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                />
              </Link>
              {siteURL && (
                <Link href={siteURL} target="_blank">
                  <BsArrowUpRightSquare
                    size={30}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default ProjectItem;
