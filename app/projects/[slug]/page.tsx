"use client";

import getDescriptionBySlug from "@/actions/projects/getDescriptionBySlug";
import getImagesListBySlug from "@/actions/projects/getImagesListBySlug";
import getLanguageBySlug from "@/actions/projects/getLanguageBySlug";
import getNameBySlug from "@/actions/projects/getNameBySlug";
import getProjectBySlug from "@/actions/projects/getProjectBySlug";
import getTechnologiesBySlug from "@/actions/projects/getTechnologiesBySlug";
import Tag from "@/components/Atoms/Tag";
import HeadingThree from "@/components/Content/Text/HeadingThree";
import HeadingTwo from "@/components/Content/Text/HeadingTwo";
import Gallery from "@/components/Gallery/Gallery";
import Project, {
  backendWebDevProjects,
  extraWebDevProjects,
  javaAssignments,
  machineLearningProjects,
  otherProjects,
  webdevProjects,
} from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { IoReaderOutline } from "react-icons/io5";

const generateStaticParams = async () => {
  const projects = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...otherProjects,
  ];
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

/**
 * Displays the page for a specific project.
 * The project is determined by the slug in the URL.
 * At the top, the gallery of images is displayed for the project (if available).
 * If the project has no images, the project image is displayed instead.
 * If the project has no images or project image, a placeholder is displayed.
 * Bellow the gallery is the project's metadata:
 * - Description (left side on desktop, top on mobile)
 * - Language (right side on desktop, top on mobile)
 * - Technologies (right side on desktop, bottom on mobile)
 * - Links (left side on desktop, bottom on mobile)
 * @param props (any)
 * @returns (JSX.Element): Project Page Component
 */
const ProjectPage: React.FC = (props: any) => {
  const pathname = usePathname(); // used to determine the current route
  const params = useParams(); // retrieve the URL parameters

  const allProjects: Project[] = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...otherProjects,
  ];

  const project = getProjectBySlug(params.slug, allProjects);
  const projectName = getNameBySlug(params.slug, allProjects);
  const projectTechnologies = getTechnologiesBySlug(params.slug, allProjects);
  const projectLanguage = getLanguageBySlug(params.slug, allProjects);
  const projectDescription = getDescriptionBySlug(params.slug, allProjects);

  let gallery = getImagesListBySlug(params.slug, allProjects);
  // Adds full path to images
  if (gallery) {
    gallery = gallery.map((image) => `/projects/${params.slug}/${image}`);
  }

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh]">
      <HeadingTwo title={projectName!} />
      {gallery && gallery.length > 0 ? (
        <Gallery images={gallery} />
      ) : project?.imageURL ? (
        <div className="w-full h-[40vh] flex items-center justify-center">
          <Image
            src={project.imageURL}
            alt={projectName!}
            width={800}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      ) : (
        <>
          <text className="text-center text-2xl text-neutral-400 dark:text-neutral-500">
            No images available
          </text>
        </>
      )}

      <div className="border-b border-neutral-200 dark:border-neutral-800" />

      <div className="flex flex-col md:flex-row gap-4 sm:gap-10">
        {/* Right */}
        <div className="md:w-1/2">
          <div className="mt-4 text-center md:text-left">
            {/* Description */}
            <HeadingThree title="Description" />
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-5">
              <p>{projectDescription}</p>
            </div>

            <HeadingThree title="Links" />
            {/* Links */}
            <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start items-center">
              <div className="flex flex-row gap-5 w-full md:w-1/2 justify-center md:justify-start">
                {/* GitHub Repo */}
                {project?.repoURL && (
                  <Link
                    href={project?.repoURL}
                    target="_blank"
                    title="Repository"
                  >
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                )}
                {/* Website */}
                {project?.siteURL && (
                  <Link href={project?.siteURL} target="_blank" title="Website">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                )}
                {/* Blog */}
                {project?.articleURL && (
                  <Link
                    href={project?.articleURL}
                    target="_blank"
                    title="Report"
                  >
                    <IoReaderOutline
                      size={34}
                      className="-translate-y-0.5 hover:-translate-y-1.5 transition-transform cursor-pointer"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Left */}
        <div className="md:w-1/2">
          <div className="mt-4 text-center md:text-left">
            <HeadingThree title="Language" />
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start mt-5">
              <Tag>{projectLanguage}</Tag>
            </div>
          </div>
          {projectTechnologies && (
            <div className="mt-4 text-center md:text-left">
              <HeadingThree title="Technologies" />
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {projectTechnologies.map((tech, index) => (
                  <Tag key={index}>{tech}</Tag>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;