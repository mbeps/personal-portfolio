import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import SpecialReader from "@/components/Reader/SpecialReader";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabaseMap from "@/database/Projects/ProjectDatabaseMap";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import { notFound } from "next/navigation";

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
const ProjectReportPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const projectKey: string = resolvedParams.projectKey;
  const projectData: ProjectInterface = projectDatabaseMap[projectKey];
  const basePath: string = PROJECTS_PAGE.path;

  const reportBlog: string | undefined = getMarkdownFromFileSystem(
    `public${basePath}/${projectKey}/blog.md`
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
 * Generates the static paths for the project reports.
 * These paths are used to pre-render the report pages.
 *
 * @returns A list of all project keys that have reports for static page generation.
 */
export const generateStaticParams = async () => {
  return Object.keys(projectDatabaseMap)
    .filter((projectKey) => {
      // Only include projects that have a blog/report file
      const reportExists = getMarkdownFromFileSystem(
        `public${PROJECTS_PAGE.path}/${projectKey}/blog.md`
      )?.content;
      return !!reportExists;
    })
    .map((projectKey) => ({
      projectKey,
    }));
};

export default ProjectReportPage;
