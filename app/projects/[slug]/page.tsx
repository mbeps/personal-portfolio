import getImagesFromFileSystem from "@/actions/file-system/getImagesFromFileSystem";
import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import getVideosFromFileSystem from "@/actions/file-system/getVideosFromFileSystem";
import filterAndGroupSkills from "@/actions/skills/filter/filterAndGroupSkills";
import filterSkillSlugsByCategory, {
  filterSkillSlugsExcludingCategory,
} from "@/actions/skills/filter/filterSkillsByCategory";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import Gallery from "@/components/Gallery/Gallery";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabase from "@/database/projects";
import skillDatabase from "@/database/skills";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
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
  const project = projectDatabase[slug];

  // Create metadata based on the project details
  return {
    title: `${developerName} - Projects: ${project?.name}`,
    description: project?.description,
  };
}

/**
 * Generates the static paths for the projects.
 * These are then used to pre-render the projects pages.
 * This Incremental Static Regeneration allows the projects to be displayed without a server.
 * This improves the performance of the website.
 */
export const generateStaticParams = async () => {
  return Object.keys(projectDatabase).map((slug) => ({
    slug,
  }));
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
  const basePath = PROJECTS_PAGE.path;
  const project = projectDatabase[slug];

  // redirect to not found page if the project is not valid
  if (!project) {
    notFound();
  }

  const projectName = project.name;
  const projectDescription = project.description;
  const hasCoverImage = project.thumbnailImage !== undefined;
  const coverImagePath = `${basePath}/${slug}/cover.png`;

  const projectLanguages: SkillKeysEnum[] = filterSkillSlugsByCategory(
    project.skills,
    skillDatabase,
    SkillCategoriesEnum.ProgrammingLanguages
  );

  const projectSkillsWithoutLanguage: SkillKeysEnum[] =
    filterSkillSlugsExcludingCategory(
      project.skills,
      skillDatabase,
      SkillCategoriesEnum.ProgrammingLanguages
    );

  const technologies: SkillKeysEnum[] = filterSkillsByType(
    projectSkillsWithoutLanguage,
    skillDatabase,
    SkillTypesEnum.Hard
  );
  const generalSkills: SkillKeysEnum[] = filterSkillsByType(
    projectSkillsWithoutLanguage,
    skillDatabase,
    SkillTypesEnum.General
  );
  const softSkills: SkillKeysEnum[] = filterSkillsByType(
    projectSkillsWithoutLanguage,
    skillDatabase,
    SkillTypesEnum.Soft
  );

  // Using the new function to group all skill types
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] = [
    filterAndGroupSkills(
      technologies,
      skillDatabase,
      SkillTypesEnum.Hard,
      "Technologies"
    ),
    filterAndGroupSkills(
      generalSkills,
      skillDatabase,
      SkillTypesEnum.General,
      "Technical Skills"
    ),
    filterAndGroupSkills(
      softSkills,
      skillDatabase,
      SkillTypesEnum.Soft,
      "Soft Skills"
    ),
  ];

  const getImages = () => {
    let images = getImagesFromFileSystem(`public${basePath}/${slug}/media`);

    // add the path to the media items
    images = images.map((image) => `${basePath}/${slug}/media/${image}`);

    return images;
  };

  const getVideos = () => {
    let videos = getVideosFromFileSystem(`public${basePath}/${slug}/media`);

    // add the path to the media items
    videos = videos.map((video) => `${basePath}/${slug}/media/${video}`);

    return videos;
  };

  const images = getImages();
  const videos = getVideos();

  /**
   * Get the features and blog content from the file system.
   * This is used to display the features and blog sections.
   */
  const features = getMarkdownFromFileSystem(
    `public${basePath}/${slug}/features.md`
  )?.content;

  /**
   * Get the features and blog content from the file system.
   * This is used to display the features and blog sections.
   */
  const blog = getMarkdownFromFileSystem(
    `public${basePath}/${slug}/report.md`
  )?.content;

  return (
    <div className="flex flex-col space-y-10 align-top min-h-[85vh] relative">
      <HeadingTwo title={project?.name} />

      {/* Gallery Section */}
      {(images && images.length > 1) || (videos && videos.length > 1) ? (
        <Gallery images={images} videos={videos} />
      ) : (
        hasCoverImage && (
          <div
            className="
              w-full 
              flex items-center justify-center 
              relative 
              z-0
              animate-fadeIn animation-delay-2
            "
          >
            <AspectRatio ratio={8 / 5} className="overflow-hidden relative">
              <Image
                src={coverImagePath}
                alt="Project Image"
                quality={90}
                fill={true}
                priority
                className="
                  w-full
                  object-cover rounded-xl 
                  transition-colors duration-700
                "
              />
            </AspectRatio>
          </div>
        )
      )}

      {/* Metadata Section */}
      <div className="mt-4">
        {/* Description Section */}
        <div className="text-center md:text-left">
          <HeadingThree title="Description" />
          <div className="flex flex-wrap justify-center md:justify-start z-10 mt-5">
            <p className="text-neutral-800 dark:text-neutral-300">
              {projectDescription}
            </p>
          </div>
        </div>

        {/* Language Section */}
        {projectLanguages && Object.keys(projectLanguages).length > 0 && (
          <div className="text-center md:text-left">
            <HeadingThree
              title={
                Object.keys(projectLanguages).length > 1
                  ? "Languages"
                  : "Language"
              }
            />
            <div className="flex flex-wrap justify-center md:justify-start z-10 mt-5">
              {projectLanguages.map((language, index) => (
                <SkillTag key={index} skillKey={language} />
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        <div className="mt-4">
          {/* Skills Section */}
          <div className="mt-4">
            <SkillTableSection allGroupedSkills={allGroupedSkills} />
          </div>

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
                  <Button>
                    <div
                      className="
                        flex
                        justify-center md:justify-start
                        align-center
                        gap-4
                        w-full
                      "
                    >
                      <BsGithub size={26} />
                      <p>Repository</p>
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
                  <Button>
                    <div
                      className="
                        flex
                        justify-center md:justify-start
                        align-center
                        gap-4
                        w-full
                      "
                    >
                      <BsArrowUpRightCircle size={26} />
                      <p>Deployment</p>
                    </div>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <TabbedReader content={{ features, blog }} />
    </div>
  );
};

export default ProjectPage;
