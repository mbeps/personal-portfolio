import getProjectBySlug from "@/actions/getProjectBySlug";
import Tag from "@/components/Atoms/Tag";
import Gallery from "@/components/Gallery/Gallery";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import fs from "fs";

import {
  backendWebDevProjects,
  extraWebDevProjects,
  javaAssignments,
  machineLearningProjects,
  otherProjects,
  webdevProjects,
} from "@/constants/projects";
import Project from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import { RxReader } from "react-icons/rx";
import Button from "@/components/Atoms/Button";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

/**
 * Gets the images for a project from the file system.
 * These are stored so that they can be displayed on the website.
 * @param slug (string): the slug of the project
 * @returns (string[]): the images for the project
 */
const getProjectImages = (slug: string): string[] => {
  const folder = `public/projects/${slug}/`;
  try {
    const files = fs.readdirSync(folder);
    return files.filter(
      (file) => file.endsWith(".jpg") || file.endsWith(".png")
    );
  } catch (error) {
    console.log(`Error reading directory ${folder}:`, error);
    return [];
  }
};

/**
 * Gets the features for a project from the file system.
 * This is then used to display the features of this project.
 * @param slug (string): the slug of the project
 * @returns (matter.GrayMatterFile<string> | null): the features for the project
 */
const getProjectFeatures = (
  slug: string
): matter.GrayMatterFile<string> | null => {
  const file = `public/projects/${slug}/features.md`;
  try {
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    console.log(`Error reading markdown file ${file}:`, error);
    return null;
  }
};

/**
 * Generates the static paths for the projects.
 * These are then used to pre-render the projects pages.
 * This Incremental Static Regeneration allows the projects to be displayed without a server.
 * This improves the performance of the website.
 */
export const generateStaticParams = async () => {
  const projects: Project[] = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...otherProjects,
  ];

  return projects.map((project) => ({ slug: project.slug }));
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

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
const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const slug = params.slug;

  const allProjects: Project[] = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...otherProjects,
  ];

  const project = getProjectBySlug(slug, allProjects);
  const projectName = project?.name;
  const projectTechnologies = project?.technologies;
  const projectLanguage = project?.programmingLanguage;
  const projectDescription = project?.description;

  let gallery = getProjectImages(slug);

  gallery = gallery
    .filter((image) => !image.startsWith("cover") && image.endsWith(".png"))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

  // Adds full path to images
  if (gallery) {
    gallery = gallery.map((image) => `/projects/${slug}/${image}`);
  }

  const features = getProjectFeatures(slug);

  // redirect to not found page is the project is not valid
  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <HeadingTwo title={projectName!} />

      {/* Images Section */}
      {gallery && gallery.length > 1 ? (
        <Gallery images={gallery} />
      ) : project?.imageURL ? (
        <div className="w-full flex items-center justify-center relative z-0">
          <Image
            src={project.imageURL}
            alt="Currently Active"
            quality={90}
            width={2000}
            height={1125}
            priority
            className="
              w-full
              object-contain rounded-xl 
              transition-colors duration-700
              "
          />
        </div>
      ) : (
        <></>
      )}

      {(gallery && gallery.length > 1) ||
        (project?.imageURL && (
          <div className="border-b border-neutral-200 dark:border-neutral-800" />
        ))}

      {/* Metadata Section */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full  justify-center md:justify-start">
                {/* GitHub Repo */}
                {project?.repoURL && (
                  <Link href={project?.repoURL} target="_blank">
                    <Button
                      variant={"ghost"}
                      className="
                      text-neutral-900 dark:text-white 
                      hover:text-neutral-900 
                      hover:bg-neutral-300
                      w-full
                  "
                    >
                      <div className="flex flex-row justify-center md:justify-start gap-4 w-full">
                        <BsGithub size={30} />
                        <p className="mt-1 md:text-left text-center">
                          Repository
                        </p>
                      </div>
                    </Button>
                  </Link>
                )}
                {/* Website */}
                {project?.siteURL && (
                  <Link href={project?.siteURL} target="_blank">
                    <Button
                      variant={"ghost"}
                      className="
                      text-neutral-900 dark:text-white 
                      hover:text-neutral-900 
                      hover:bg-neutral-300
                      w-full
                    "
                    >
                      <div className="flex flex-row justify-center md:justify-start gap-4 w-full">
                        <BsArrowUpRightSquare size={30} />
                        <p className="mt-1 md:text-left text-center">
                          Deployment
                        </p>
                      </div>
                    </Button>
                  </Link>
                )}
                {/* Blog */}
                {project?.articleURL && (
                  <Link href={project?.articleURL} target="_blank">
                    <Button
                      variant={"ghost"}
                      className="
                      text-neutral-900 dark:text-white 
                      hover:text-neutral-900 
                      hover:bg-neutral-300
                      w-full
                    "
                    >
                      <div className="flex flex-row justify-center md:justify-start gap-4 w-full">
                        <RxReader size={30} />
                        <p className="mt-1 md:text-left text-center">
                          Reflective Blog
                        </p>
                      </div>
                    </Button>
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
      <HeadingTwo title="Features" />
      {features && (
        <article className="prose lg:prose-xl dark:prose-invert prose-img:rounded-lg max-w-none">
          <Markdown>{features.content}</Markdown>
        </article>
      )}
    </div>
  );
};
export default ProjectPage;
