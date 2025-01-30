import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import SpecialReader from "@/components/Reader/SpecialReader";
import HeadingTwo from "@/components/Text/HeadingTwo";
import developerName from "@/constants/developerName";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabaseMap from "@/database/Projects/ProjectDatabaseMap";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Params = { projectKey: string };

type PageProps = {
  params: Params;
};

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
  props: { params: Params },
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
      title: `${developerName} - Project Report: ${project?.name}`,
      description: `Report for the project ${project?.name}`,
      category: `${PROJECTS_PAGE.label}`,
      creator: developerName,
    };
  }

  return undefined;
}

/**
 * Page that displays the report for a project if it exists.
 *
 * @param props Key of the parent project page
 * @returns Page that displays the report for a project
 */
const ModulePage: React.FC<PageProps> = async ({ params }) => {
  const projectKey: string = params.projectKey;
  const projectData: ProjectInterface = projectDatabaseMap[projectKey];

  /**
   * Get the blog content from the file system.
   * This is used to display the features and blog sections.
   */
  const reportBlog: string | undefined = getMarkdownFromFileSystem(
    `public${PROJECTS_PAGE.path}/${projectKey}/blog.md`
  )?.content;

  const hasBlog: boolean = !!reportBlog;

  if (!projectData || !hasBlog) {
    notFound();
  }

  return (
    <main>
      <div>
        <div className="text-center">
          <HeadingTwo title={`Report for ${projectData.name}`} />
        </div>
        <SpecialReader
          content={reportBlog || ""}
          previousPagePath={`${PROJECTS_PAGE.path}/${projectKey}`}
          previousPageName={projectData.name}
        />
      </div>
    </main>
  );
};

export default ModulePage;
