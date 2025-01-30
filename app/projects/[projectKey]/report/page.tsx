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

// Update the type definitions
type Params = { projectKey: string };

type PageProps = {
  params: Promise<Params>;
};

/**
 * Page that displays the report for a project if it exists.
 *
 * @param props Key of the parent project page
 * @returns Page that displays the report for a project
 */
const ModulePage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const projectKey: string = resolvedParams.projectKey;
  const projectData: ProjectInterface = projectDatabaseMap[projectKey];

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

/**
 * Generates the metadata for the project report page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the project report page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the project page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export async function generateMetadata(
  { params }: { params: Promise<Params> },
  parent: ResolvingMetadata
): Promise<Metadata | undefined> {
  const resolvedParams = await params;
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

export default ModulePage;
