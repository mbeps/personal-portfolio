import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import processMarkdownImages from "@/lib/processMarkdownImages";
import SpecialReader from "@/components/reader/SpecialReader";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabaseMap from "@/database/projects/ProjectDatabaseMap";
import ProjectInterface from "@/database/projects/ProjectInterface";
import { notFound } from "next/navigation";

// Update the type definitions
type Params = { projectKey: string };

type PageProps = {
  params: Promise<Params>;
};

/**
 * Dedicated route for long-form project reports so SpecialReader can render table-of-contents friendly markdown outside the main project page.
 * The slug maps directly to `/public/projects/{projectKey}/blog.md` where the markdown and related images live.
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
 * Supplies Next with only the project keys that have a `blog.md` under their `public/projects/{key}` folder so report routes are pre-rendered correctly.
 *
 * @returns All report params for static generation.
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
