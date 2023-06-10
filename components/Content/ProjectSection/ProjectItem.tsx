import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./Slideup";

interface ProjectItemProps {
  name: string;
  description: string;
  imageURL: string;
  projectURL: string;
  siteURL?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  description,
  imageURL,
  projectURL,
  siteURL,
}) => {
  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
        <div className=" md:w-1/2">
          <Link href={projectURL}>
            <Image
              src={imageURL}
              alt=""
              width={1000}
              height={1000}
              className="rounded-xl shadow-xl hover:opacity-70"
            />
          </Link>
        </div>
        <div className="mt-8 md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">{name}</h1>
          <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
          <div className="flex flex-row align-bottom space-x-4">
            <Link href={projectURL} target="_blank">
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
    </SlideUp>
  );
};

export default ProjectItem;
