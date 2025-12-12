import getImagesFromFileSystem from "@/lib/file-system/getImagesFromFileSystem";
import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import getVideosFromFileSystem from "@/lib/file-system/getVideosFromFileSystem";
import filterSkillsByCategory, {
  filterSkillSlugsExcludingCategory,
} from "@/lib/skills/filter/filterSkillsByCategory";
import buildSkillTableGroups from "@/lib/skills/group/buildSkillTableGroups";
import Gallery from "@/components/gallery/Gallery";
import MaterialList from "@/components/material-lists/MaterialList";
import Reader from "@/components/reader/Reader";
import SkillTableCell from "@/components/skills/SkillTableSection";
import SkillTag from "@/components/tags/SkillTag";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { AspectRatio } from "@/components/shadcn/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import developerName from "@/constants/developerName";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabaseMap from "@/database/projects/ProjectDatabaseMap";
import ProjectInterface from "@/database/projects/ProjectInterface";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import GroupedSkillsCategoriesInterface from "@/interfaces/skills/GroupedSkillsInterface";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";
import { ProjectLinks } from "./_components/ProjectLinks";

type Params = Promise<{ projectKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

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
  props: { params: Params; searchParams: SearchParams },
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  const resolvedParams = await props.params;
  const projectKey: string = resolvedParams.projectKey;
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
      keywords: [
        project.name,
        ...project.skills.map((skillKey) => skillDatabaseMap[skillKey].name),
      ],
    };
  }

  return undefined;
}

/**
 * Generates the static paths for the projects.
 * These paths are used to pre-render the project pages.
 *
 * @returns A list of all project keys for static page generation.
 */
export const generateStaticParams = async () => {
  return Object.keys(projectDatabaseMap).map((projectKey) => ({
    projectKey,
  }));
};

/**
 * Project detail experience that joins galleries, markdown, skill tables, and related material into one story.
 * Handles case studies with optional reports, features, and cross-linking to keep the material ecosystem interconnected.
 *
 * @param params Dynamic slug for the project entry.
 * @returns Project overview with media, skills, and related work.
 */
const ProjectPage: React.FC<{ params: Params }> = async ({ params }) => {
  const resolvedParams = await params;
  const projectKey: string = resolvedParams.projectKey;
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

  const allGroupedSkills: GroupedSkillsCategoriesInterface[] =
    buildSkillTableGroups(projectSkillsWithoutLanguage);

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
   * Get the features content from the file system.
   * This is used to display the features and blog sections.
   */
  const features: string | undefined = getMarkdownFromFileSystem(
    `public${basePath}/${projectKey}/features.md`
  )?.content;

  /**
   * Get the blog content from the file system.
   * This is used to display the features and blog sections.
   */
  const hasProjectReport: boolean = !!getMarkdownFromFileSystem(
    `public${basePath}/${projectKey}/blog.md`
  )?.content;

  /**
   * Whether to show the links section.
   * If there are no links (repository, deployment or project report), the section is not shown.
   */
  const showLinks: boolean =
    !!projectData.repositoryURL ||
    !!projectData.deploymentURL ||
    hasProjectReport;

  const hasFeatures: boolean = !!features;
  const hasRelatedMaterials: boolean =
    !!projectData.relatedMaterials && projectData.relatedMaterials.length > 0;

  return (
    <main>
      <div className="flex flex-col space-y-1 align-top relative">
        <h2>{projectData?.name}</h2>

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

        {/* Project Type */}
        <p
          className="
            py-4
            text-red-700 dark:text-red-300
            text-center text-lg
          "
        >
          {`${projectData.type} Project`}
        </p>

        {/* Metadata Section */}
        <div className="mt-4 material-sections-wrapper">
          {/* Description Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center md:text-left">
                <h3>Description</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-800 dark:text-neutral-300">
                {projectData.description}
              </p>
            </CardContent>
          </Card>

          {/* Language Section */}
          {projectLanguages && Object.keys(projectLanguages).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center md:text-left">
                  <h3>
                    {Object.keys(projectLanguages).length > 1
                      ? "Languages"
                      : "Language"}
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center md:justify-start z-10">
                {projectLanguages.map((language, index) => (
                  <SkillTag key={index} skillKey={language} />
                ))}
              </CardContent>
            </Card>
          )}

          {/* Skills Section */}
          <Card>
            <CardContent className="py-7">
              <SkillTableCell allGroupedSkills={allGroupedSkills} />
            </CardContent>
          </Card>

          {/* Links Section */}
          {showLinks && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center md:text-left">
                  <h3>Links</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center md:justify-start w-full md:w-1/2">
                  <ProjectLinks
                    deploymentURL={projectData.deploymentURL}
                    repositoryURL={projectData.repositoryURL}
                    reportURL={
                      hasProjectReport
                        ? `${basePath}/${projectKey}/report`
                        : undefined
                    }
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Features Section */}
          {hasFeatures || hasRelatedMaterials ? (
            <Accordion type="single" collapsible>
              {hasFeatures && (
                <>
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
                </>
              )}

              {/* Related Materials Section */}
              {hasRelatedMaterials && (
                <>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      <div className="flex items-center space-x-3">
                        <GrAppsRounded size={25} className="text-neutral-500" />
                        <p
                          className="
                          text-lg 
                          text-neutral-600 dark:text-neutral-400
                          font-semibold
                          "
                        >
                          Related Material
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-2">
                      <MaterialList
                        materialKeys={projectData.relatedMaterials!}
                        isCollapsible={false}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </>
              )}
            </Accordion>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
