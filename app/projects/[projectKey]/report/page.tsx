import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import processMarkdownImages from "@/actions/processMarkdownImages";
import SpecialReader from "@/components/Reader/SpecialReader";
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
 * Dedicated route for long-form project reports so SpecialReader can render table-of-contents friendly markdown outside the main project page.
 *
 * @param params Project slug whose `/blog.md` acts as the report source.
 * @returns Report view with backlink to the parent project.
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

  // Replace base path placeholder with actual path for images
  const processedReportContent: string = processMarkdownImages(
    reportBlog || "",
    `${basePath}/${projectKey}/img`
  );

  return (
    <main>
      <div>
        <div className="text-center">
          <h2>{`Report for ${projectData.name}`}</h2>
        </div>
        <SpecialReader
          content={processedReportContent}
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
