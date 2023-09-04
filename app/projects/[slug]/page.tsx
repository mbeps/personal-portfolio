import getProjectBySlug from "@/actions/getProjectBySlug";
import Tag from "@/components/Atoms/Tag";
import Gallery from "@/components/Gallery/Gallery";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";

import getImagesFromFileSystem from "@/actions/getImagesFromFileSystem";
import getMarkdownFromFileSystem from "@/actions/getMarkdownFromFileSystem";
import Button from "@/components/Atoms/Button";
import TabbedReader from "./components/TabbedReader";
import {
  backendWebDevProjects,
  extraWebDevProjects,
  gameDevProjects,
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
import { BsArrowUpRightCircle, BsGithub } from "react-icons/bs";
import { ResolvingMetadata, Metadata } from "next";

const projects: Project[] = [
  ...webdevProjects,
  ...extraWebDevProjects,
  ...backendWebDevProjects,
  ...machineLearningProjects,
  ...javaAssignments,
  ...gameDevProjects,
  ...otherProjects,
];

/**
 * Metadata object for the dynamic project page.
 * @param (ProjectPageProps) - props: the content of the project
 * @param parent (ResolvingMetadata) - parent metadata
 * @returns (Promise<Metadata>): metadata for the project (title and description)
 */
export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const slug = params.slug;

  // Assume getProjectBySlug function fetches project by slug
  const project = getProjectBySlug(slug, projects);

  // Create metadata based on the project details
  return {
    title: `Maruf - Projects: ${project?.name}`,
    description: project?.description,
    openGraph: {
      // No images are specified in your Project object
      // but you can add them here if you have them
    },
  };
}

/**
 * Generates the static paths for the projects.
 * These are then used to pre-render the projects pages.
 * This Incremental Static Regeneration allows the projects to be displayed without a server.
 * This improves the performance of the website.
 */
export const generateStaticParams = async () => {
  return projects.map((project) => ({ slug: project.slug }));
};

interface ProjectPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
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
 * Bellow the metadata is the features section.
 * @param props (ProjectPageProps): the project slug
 * @returns (JSX.Element): Project Page Component
 */
const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const slug = params.slug;

  const allProjects: Project[] = projects;

  const project = getProjectBySlug(slug, allProjects);
  const projectName = project?.name;
  const projectTechnologies = project?.technologies;
  const projectLanguage = project?.programmingLanguage;
  const projectDescription = project?.description;

  let gallery = getImagesFromFileSystem(`public/projects/${slug}/gallery`);

  gallery = gallery
    .filter((image) => image.endsWith(".png"))
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));

  // Adds full path to images
  if (gallery) {
    gallery = gallery.map((image) => `/projects/${slug}/gallery/${image}`);
  }

  /**
   * Gets the features for the project from the markdown file.
   */
  const features = getMarkdownFromFileSystem(
    `public/projects/${slug}/features.md`
  )?.content;

  const blog = getMarkdownFromFileSystem(
    `public/projects/${slug}/report.md`
  )?.content;

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
        <div
          className="
            w-full 
            flex items-center justify-center 
            relative 
            z-0
            animate-fadeIn animation-delay-2
          "
        >
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
              <div
                className="
                  grid grid-cols-2 
                  gap-5 
                  w-auto md:w-full
                  justify-center md:justify-start
                "
              >
                {/* GitHub Repo */}
                {project?.repoURL && (
                  <Link href={project?.repoURL} target="_blank">
                    <Button
                      variant={"ghost"}
                      className="
                      text-neutral-900 dark:text-white 
                      hover:text-neutral-900 
                      hover:bg-neutral-300
                      w-auto md:w-full
                      rounded-full md:rounded-xl
                  "
                    >
                      <div className="flex flex-row justify-center md:justify-start gap-4 w-full">
                        <BsGithub size={30} />
                        <p className="hidden md:block mt-1 md:text-left text-center">
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
                      w-auto md:w-full
                      rounded-full md:rounded-xl
                    "
                    >
                      <div className="flex flex-row justify-center md:justify-start gap-4 w-full">
                        <BsArrowUpRightCircle size={30} />
                        <p className="hidden md:block mt-1 md:text-left text-center">
                          Deployment
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

      <TabbedReader content={{ features, blog }} />
    </div>
  );
};

export default ProjectPage;
