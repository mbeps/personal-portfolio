import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { GrAppsRounded } from "react-icons/gr";
import Gallery from "@/components/gallery/gallery";
import MaterialList from "@/components/material-lists/material-list";
import Reader from "@/components/reader/reader";
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
import SkillTableSection from "@/components/skills/skill-table-section";
import SkillTag from "@/components/tags/skill-tag";
import developerName from "@/constants/developer-name";
import { PATHS } from "@/constants/paths";
import { ROUTES } from "@/constants/routes";
import type ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import projectDatabaseMap from "@/database/projects/project-database-map";
import type ProjectInterface from "@/database/projects/project-interface";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import type ListOfCategorisedSkillsByTypeInterface from "@/interfaces/skills/list-of-categorised-skills-by-type-interface";
import getImagesFromFileSystem from "@/lib/file-system/get-images-from-file-system";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";
import getVideosFromFileSystem from "@/lib/file-system/get-videos-from-file-system";
import { filterSkillSlugsExcludingCategory } from "@/lib/skills/filter/filter-skill-slugs-excluding-category";
import filterSkillsByCategory from "@/lib/skills/filter/filter-skills-by-category";
import buildSkillTableGroups from "@/lib/skills/group/build-skill-table-groups";
import hasAnySkills from "@/lib/skills/has-any-skills";
import { ProjectLinks } from "./_components/project-links";

type Params = Promise<{ projectKey: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

/**
 * Builds metadata for a project detail route so the slug, skills, and title flow into the head tags.
 * Each project’s media folder lives at `public/projects/{projectKey}`, so the slug also drives the images used by the gallery.
 *
 * @param props Params and search params promises supplied by Next.
 * @param parent Parent metadata from higher layouts.
 * @returns Metadata derived from the project entry or triggers a 404 when missing.
 */
export async function generateMetadata(
  props: { params: Params; searchParams: SearchParams },
  _parent: ResolvingMetadata,
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
      category: `${ROUTES.PROJECTS.name}`,
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
 * Supplies every project key to Next for static generation so the folders under `public/projects/{key}` become routable pages.
 *
 * @returns All project route params for pre-rendering.
 */
export const generateStaticParams = async () => {
  return Object.keys(projectDatabaseMap).map((projectKey) => ({
    projectKey,
  }));
};

/**
 * Project detail experience that ties the slug to media, markdown, and thumbnails stored under `public/projects/{key}`.
 * Combines galleries, reports, skill tables, and related material so every route stays connected to the broader portfolio.
 *
 * @param params Dynamic slug for the project entry.
 * @returns Project overview with media, skills, and related work.
 */
const ProjectPage: React.FC<{ params: Params }> = async ({ params }) => {
  const resolvedParams = await params;
  const projectKey = resolvedParams.projectKey as ProjectDatabaseKeys;
  const basePath: string = ROUTES.PROJECTS.path;
  const projectData: ProjectInterface = projectDatabaseMap[projectKey];

  // redirect to not found page if the project is not valid
  if (!projectData) {
    notFound();
  }

  const hasCoverImage: boolean = projectData.thumbnailImage !== undefined;
  const coverImagePath: string = PATHS.PROJECTS(projectKey).COVER;

  const projectLanguages: SkillDatabaseKeys[] = filterSkillsByCategory(
    projectData.skills,
    skillDatabaseMap,
    SkillCategoriesEnum.ProgrammingLanguages,
  );

  const projectSkillsWithoutLanguage: SkillDatabaseKeys[] =
    filterSkillSlugsExcludingCategory(
      projectData.skills,
      skillDatabaseMap,
      SkillCategoriesEnum.ProgrammingLanguages,
    );

  const allGroupedSkills: ListOfCategorisedSkillsByTypeInterface[] =
    buildSkillTableGroups(projectSkillsWithoutLanguage);
  const hasSkills = hasAnySkills(allGroupedSkills);

  function getImages(): string[] {
    let images: string[] = getImagesFromFileSystem(
      PATHS.PROJECTS(projectKey).MEDIA.PUBLIC,
    );

    // add the path to the media items
    images = images.map(
      (image) => `${PATHS.PROJECTS(projectKey).MEDIA.NORMAL}/${image}`,
    );

    return images;
  }

  function getVideos(): string[] {
    let videos: string[] = getVideosFromFileSystem(
      PATHS.PROJECTS(projectKey).MEDIA.PUBLIC,
    );

    // add the path to the media items
    videos = videos.map(
      (video) => `${PATHS.PROJECTS(projectKey).MEDIA.NORMAL}/${video}`,
    );
    return videos;
  }

  const images: string[] = getImages();
  const videos: string[] = getVideos();

  /**
   * Get the features content from the file system.
   * This is used to display the features and blog sections.
   */
  const features: string | null = getMarkdownFromFileSystem(
    PATHS.PROJECTS(projectKey).FEATURES,
  );

  /**
   * Get the blog content from the file system.
   * This is used to display the features and blog sections.
   */
  const hasProjectReport: boolean = !!getMarkdownFromFileSystem(
    PATHS.PROJECTS(projectKey).BLOG,
  );

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
      <div className="relative flex flex-col space-y-1 align-top">
        <h2>{projectData?.name}</h2>

        {/* Gallery Section */}
        {(images && images.length > 0) || (videos && videos.length > 0) ? (
          <Gallery images={images} videos={videos} />
        ) : (
          hasCoverImage && (
            <div className="relative z-0 flex w-full items-center justify-center">
              <AspectRatio ratio={8 / 5} className="relative overflow-hidden">
                <Image
                  src={coverImagePath}
                  alt="Project Image"
                  quality={90}
                  fill={true}
                  priority
                  className="w-full rounded-xl object-cover transition-colors duration-700"
                />
              </AspectRatio>
            </div>
          )
        )}

        {/* Project Type */}
        <p className="py-4 text-center text-lg text-red-700 dark:text-red-300">
          {`${projectData.type} Project`}
        </p>

        {/* Metadata Section */}
        <div className="material-sections-wrapper mt-4">
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
              <CardContent className="z-10 flex flex-wrap justify-center md:justify-start">
                {projectLanguages.map((language, index) => (
                  <SkillTag key={index} skillKey={language} />
                ))}
              </CardContent>
            </Card>
          )}

          {/* Skills Section */}
          {hasSkills && (
            <Card>
              <CardContent className="pt-7">
                <SkillTableSection allGroupedSkills={allGroupedSkills} />
              </CardContent>
            </Card>
          )}

          {/* Links Section */}
          {showLinks && (
            <Card>
              <CardHeader>
                <CardTitle className="text-center md:text-left">
                  <h3>Links</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full justify-center md:w-1/2 md:justify-start">
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
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-3">
                      <BsPlusCircle size={26} className="text-neutral-500" />
                      <p className="font-semibold text-lg text-neutral-600 dark:text-neutral-400">
                        Features
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    <Reader content={features} />
                  </AccordionContent>
                </AccordionItem>
              )}

              {/* Related Materials Section */}
              {hasRelatedMaterials && (
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="flex items-center space-x-3">
                      <GrAppsRounded size={25} className="text-neutral-500" />
                      <p className="font-semibold text-lg text-neutral-600 dark:text-neutral-400">
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
              )}
            </Accordion>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
