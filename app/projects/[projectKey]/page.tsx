import getImagesFromFileSystem from "@/actions/file-system/getImagesFromFileSystem";
import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import getVideosFromFileSystem from "@/actions/file-system/getVideosFromFileSystem";
import filterSkillsByCategory, {
  filterSkillSlugsExcludingCategory,
} from "@/actions/skills/filter/filterSkillsByCategory";
import filterSkillsByType from "@/actions/skills/filter/filterSkillsByType";
import categoriseAndGroupSkills from "@/actions/skills/group/categoriseAndGroupSkills";
import Gallery from "@/components/Gallery/Gallery";
import MaterialList from "@/components/MaterialLists/MaterialList";
import Reader from "@/components/Reader/Reader";
import SkillTableSection from "@/components/Skills/SkillTableSection";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import HeadingTwo from "@/components/Text/HeadingTwo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabaseMap from "@/database/Projects/ProjectDatabaseMap";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { BsArrowUpRightCircle, BsGithub, BsPlusCircle } from "react-icons/bs";

/**
 * Generates the metadata for the project page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the project page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the project page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  // Read route params
  const projectKey: string = params.projectKey;

  const project: ProjectInterface = projectDatabaseMap[projectKey];

  if (!project) {
    notFound();
  }

  if (!project.archived) {
    return {
      title: `${developerName} - Projects: ${project?.name}`,
      description: project?.description,
      category: `${PROJECTS_PAGE.label}`,
      creator: developerName,
      keywords: [project.name],
    };
  }

  return undefined;
}

/**
 * Generates the static paths for the projects.
 * These are then used to pre-render the projects pages.
 * This Incremental Static Regeneration allows the projects to be displayed without a server.
 * This improves the performance of the website.
 *
 * @returns A list of all the keys for the static pages that need to be generated.
 * @see https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
 */
export const generateStaticParams = async () => {
  return Object.keys(projectDatabaseMap).map((projectKey) => ({
    projectKey,
  }));
};

interface ProjectPageProps {
  params: { projectKey: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

/**
 * Page displaying the project details including:
 * - Gallery of images and videos if available
 * - Description of the projects
 * - Programming languages used
 * - Table showing technologies used, and general and soft skills associated
 * - Links to the project repository and deployment
 * - Features and blog content
 *
 * @param props The identifier of the project from the URL used to fetch the project
 * @returns Page displaying the project and its details
 */
const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const projectKey: string = params.projectKey;
  const basePath: string = PROJECTS_PAGE.path;
  const projectData: ProjectInterface = projectDatabaseMap[projectKey];

  // redirect to not found page if the project is not valid
  if (!projectData) {
    notFound();
  }

  const hasCoverImage: boolean = projectData.thumbnailImage !== undefined;
  const coverImagePath: string = `${basePath}/${projectKey}/cover.png`;

  const projectLanguages: SkillDatabaseKeys[] = filterSkillsByCategory(
    projectData.skills,
    skillDatabaseMap,
    SkillCategoriesEnum.ProgrammingLanguages
  );

  const projectSkillsWithoutLanguage: SkillDatabaseKeys[] =
    filterSkillSlugsExcludingCategory(
      projectData.skills,
      skillDatabaseMap,
      SkillCategoriesEnum.ProgrammingLanguages
    );

  const technologies: SkillDatabaseKeys[] = filterSkillsByType(
    projectSkillsWithoutLanguage,
    skillDatabaseMap,
    SkillTypesEnum.Technology
  );
  const generalSkills: SkillDatabaseKeys[] = filterSkillsByType(
    projectSkillsWithoutLanguage,
    skillDatabaseMap,
    SkillTypesEnum.Technical
  );
  const softSkills: SkillDatabaseKeys[] = filterSkillsByType(
    projectSkillsWithoutLanguage,
    skillDatabaseMap,
    SkillTypesEnum.Soft
  );

  // Using the new function to group all skill types
  const allGroupedSkills: GroupedSkillsCategoriesInterface[] = [
    categoriseAndGroupSkills(
      technologies,
      skillDatabaseMap,
      SkillTypesEnum.Technology,
      "Technologies"
    ),
    categoriseAndGroupSkills(
      generalSkills,
      skillDatabaseMap,
      SkillTypesEnum.Technical,
      "Technical Skills"
    ),
    categoriseAndGroupSkills(
      softSkills,
      skillDatabaseMap,
      SkillTypesEnum.Soft,
      "Soft Skills"
    ),
  ];

  function getImages(): string[] {
    let images: string[] = getImagesFromFileSystem(
      `public${basePath}/${projectKey}/media`
    );

    // add the path to the media items
    images = images.map((image) => `${basePath}/${projectKey}/media/${image}`);

    return images;
  }

  function getVideos(): string[] {
    let videos: string[] = getVideosFromFileSystem(
      `public${basePath}/${projectKey}/media`
    );

    // add the path to the media items
    videos = videos.map((video) => `${basePath}/${projectKey}/media/${video}`);

    return videos;
  }

  const images: string[] = getImages();
  const videos: string[] = getVideos();

  /**
   * Get the features and blog content from the file system.
   * This is used to display the features and blog sections.
   */
  const features: string | undefined = getMarkdownFromFileSystem(
    `public${basePath}/${projectKey}/features.md`
  )?.content;

  return (
    <main>
      <div className="sr-only">
        <h1>{projectData.name}</h1>
        <h2>{projectData.description}</h2>
        <h3>Programming Languages:</h3>
        <ul>
          {projectLanguages.map((language) => (
            <li key={language}>{skillDatabaseMap[language].name}</li>
          ))}
        </ul>
        <h3>Technologies, Libraries & Frameworks:</h3>
        <ul>
          {technologies.map((technology) => (
            <li key={technology}>{skillDatabaseMap[technology].name}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col space-y-1 align-top min-h-[85vh] relative">
        <HeadingTwo title={projectData?.name} />

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
        <div className="mt-4 space-y-12">
          {/* Description Section */}
          <div className="text-center md:text-left">
            <HeadingThree title="Description" />
            <div className="flex flex-wrap justify-center md:justify-start z-10 mt-2">
              <p className="text-neutral-800 dark:text-neutral-300">
                {projectData.description}
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
              <div className="flex flex-wrap justify-center md:justify-start z-10 mt-2">
                {projectLanguages.map((language, index) => (
                  <SkillTag key={index} skillKey={language} />
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          <div>
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
              {projectData?.repositoryURL && (
                <Link
                  href={projectData?.repositoryURL}
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
              {projectData?.deploymentURL && (
                <Link
                  href={projectData?.deploymentURL}
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

          {/* Divider */}
          {!!features ||
          (projectData.relatedMaterials &&
            projectData.relatedMaterials.length > 0) ? (
            <div className="pt-2 pb-3 border-b border-gray-200 dark:border-neutral-600" />
          ) : (
            <></>
          )}

          {/* Features Section */}
          {!!features && (
            <>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-3">
                      <BsPlusCircle size={26} className="text-neutral-500" />
                      <p
                        className="
                          text-lg 
                          text-neutral-600 dark:text-neutral-400
                          font-semibold
                          "
                      >
                        Features
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    <Reader content={features} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          )}

          {/* Related Materials Section */}
          {projectData.relatedMaterials &&
            projectData.relatedMaterials.length > 0 && (
              <>
                <MaterialList materialKeys={projectData.relatedMaterials} />
              </>
            )}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
