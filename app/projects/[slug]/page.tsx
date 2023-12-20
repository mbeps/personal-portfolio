import getProjectBySlug from "@/actions/projects/getProjectBySlug";
import Gallery from "@/components/Gallery/Gallery";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";

import getMarkdownFromFileSystem from "@/actions/getMarkdownFromFileSystem";
import getMediaFromFileSystem from "@/actions/getMediaFromFileSystem";
import hasProjectCover from "@/actions/projects/hasProjectCover";
import Button from "@/components/Button/Button";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import SkillTag from "@/components/Tags/SkillTag";
import allProjects from "@/constants/projects";
import Skill from "@/types/skills";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BsArrowUpRightCircle, BsGithub } from "react-icons/bs";
import TabbedReader from "./components/TabbedReader";

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
  const project = getProjectBySlug(slug, allProjects);

  // Create metadata based on the project details
  return {
    title: `Maruf Bepary - Projects: ${project?.name}`,
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
  return allProjects.map((project) => ({ slug: project.slug }));
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

  const project = getProjectBySlug(slug, allProjects);

  // redirect to not found page if the project is not valid
  if (!project) {
    notFound();
  }

  const projectName = project.name;

  const projectLanguage = project.programmingLanguage;
  const projectDescription = project.description;
  const hasCoverImage = hasProjectCover(slug);
  const coverImagePath = `/projects/${slug}/cover.png`;

  function technicalGeneralSkills(
    skills: Skill[],
    extraSkills: Skill[] = []
  ): Skill[] {
    // Combine the original skills and extra skills
    const combinedSkills = skills.concat(extraSkills);

    return combinedSkills
      .flatMap((skill) => (skill.skills ? [skill, ...skill.skills] : [skill]))
      .reduce((uniqueSkills, skill) => {
        if (!uniqueSkills.some((s) => s.slug === skill.slug)) {
          uniqueSkills.push(skill);
        }
        return uniqueSkills;
      }, [] as Skill[]);
  }

  interface SkillCategory {
    title: string;
    skillCategories: Record<string, Skill[]>;
  }

  const filterAndGroupSkills = (
    skills: Skill[],
    skillType: "hard" | "general" | "soft",
    title: string
  ): SkillCategory => {
    // Filter skills based on skillType
    const filteredSkills = skills.filter(
      (skill) => skill.skillType === skillType
    );

    // Group the filtered skills by category
    const grouped = filteredSkills.reduce<Record<string, Skill[]>>(
      (acc, skill) => {
        const category = skill.category;
        (acc[category] = acc[category] || []).push(skill);
        return acc;
      },
      {}
    );

    return { title, skillCategories: grouped };
  };

  // Using the new function to group all skill types
  const allGroupedSkills = {
    technologies: filterAndGroupSkills(
      project.technologySkills,
      "hard",
      "Technologies"
    ),
    generalSkills: filterAndGroupSkills(
      technicalGeneralSkills(
        project.technologySkills,
        project.extraTechnicalGeneralSkills
      ),
      "general",
      "Technical Skills"
    ),
    softSkills: filterAndGroupSkills(project.softSkills, "soft", "Soft Skills"),
  };

  /**
   * Gets images and videos from the file system.
   * These are used to display the gallery.
   * @returns (MediaItem[]): the media items for the gallery
   */
  const getGallery = () => {
    let media = getMediaFromFileSystem(`public/projects/${slug}/media`);

    // add the path to the media items
    if (media) {
      media = media.map((mediaItem) => {
        return {
          ...mediaItem,
          src: `/projects/${slug}/media/${mediaItem.src}`,
        };
      });
    }
    return media;
  };

  const media = getGallery();

  /**
   * Get the features and blog content from the file system.
   * This is used to display the features and blog sections.
   */
  const features = getMarkdownFromFileSystem(
    `public/projects/${slug}/features.md`
  )?.content;

  /**
   * Get the features and blog content from the file system.
   * This is used to display the features and blog sections.
   */
  const blog = getMarkdownFromFileSystem(
    `public/projects/${slug}/report.md`
  )?.content;

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <HeadingTwo title={project?.name} />

      {/* Gallery Section */}
      {media && media.length > 1 ? (
        <Gallery mediaItems={media} />
      ) : hasCoverImage ? (
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
            src={coverImagePath}
            alt="Project Image"
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

      {/* Metadata Section */}
      <div className="mt-4">
        {/* Description Section */}
        <div className="text-center md:text-left">
          <HeadingThree title="Description" />
          <div className="flex flex-wrap justify-center md:justify-start z-10 mt-5">
            <p>{projectDescription}</p>
          </div>
        </div>

        {/* Language Section */}
        <div className="text-center md:text-left">
          <HeadingThree title="Language" />
          <div className="flex flex-wrap justify-center md:justify-start z-10 mt-5">
            <SkillTag skill={projectLanguage} />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {Object.values(allGroupedSkills).map(
              ({ title, skillCategories }) =>
                skillCategories &&
                Object.keys(skillCategories).length > 0 && (
                  <SkillTableSection
                    key={title}
                    skillCategories={skillCategories}
                    title={title}
                  />
                )
            )}

            {/* Links Section */}
            <div className="text-center md:text-left">
              <HeadingThree title="Links" />
              <div
                className="
              mt-6 flex 
              flex-row 
              justify-center md:justify-start items-center 
              w-full md:w-1/3
              gap-2"
              >
                {/* GitHub Repo */}
                {project?.repositoryURL && (
                  <Link
                    href={project?.repositoryURL}
                    target="_blank"
                    className="w-full"
                  >
                    <Button
                      variant={"ghost"}
                      className="
                text-neutral-900 dark:text-white 
                hover:text-neutral-900 
                hover:bg-neutral-300
                w-full
                rounded-xl
              "
                    >
                      <div className="flex justify-center md:justify-start gap-4 w-full">
                        <BsGithub size={30} />
                        <p className="mt-1">Repository</p>
                      </div>
                    </Button>
                  </Link>
                )}
                {/* Website */}
                {project?.deploymentURL && (
                  <Link
                    href={project?.deploymentURL}
                    target="_blank"
                    className="w-full"
                  >
                    <Button
                      variant={"ghost"}
                      className="
                text-neutral-900 dark:text-white 
                hover:text-neutral-900 
                hover:bg-neutral-300
                w-full
                rounded-xl
              "
                    >
                      <div className="flex justify-center md:justify-start gap-4 w-full">
                        <BsArrowUpRightCircle size={30} />
                        <p className="mt-1">Deployment</p>
                      </div>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <TabbedReader content={{ features, blog }} />
    </div>
  );
};

export default ProjectPage;
