import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import processMarkdownImages from "@/lib/processMarkdownImages";
import SpecialReader from "@/components/reader/SpecialReader";
import { ROUTES } from "@/constants/routes";
import projectDatabaseMap from "@/database/projects/ProjectDatabaseMap";
import ProjectInterface from "@/database/projects/ProjectInterface";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import developerName from "@/constants/developerName";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import { PATHS } from "@/constants/paths";

// Update the type definitions
type Params = { projectKey: string };
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

type PageProps = {
  params: Promise<Params>;
};

/**
 * Builds metadata for the project report route.
 *
 * @param props Params and search params promises from Next.
 * @param parent Parent metadata.
 * @returns Metadata derived from context or undefined if archived.
 */
export async function generateMetadata(
  props: { params: Promise<Params>; searchParams: SearchParams },
  parent: ResolvingMetadata,
): Promise<Metadata | undefined> {
  const resolvedParams = await props.params;
  const projectKey: string = resolvedParams.projectKey;
  const project: ProjectInterface = projectDatabaseMap[projectKey];

  if (!project) {
    notFound();
  }

  // Check if the report markdown exists
  const reportExists = !!getMarkdownFromFileSystem(
    PATHS.PROJECTS(projectKey as ProjectDatabaseKeys).BLOG,
  )?.content;

  if (!reportExists) {
    notFound();
  }

  if (!project.archived) {
    return {
      title: `${developerName} - Projects: ${project.name} Report`,
      description: `Detailed report and analysis for ${project.name}. ${project.description}`,
      category: `${ROUTES.PROJECTS.name}`,
      creator: developerName,
      keywords: [
        project.name,
        "Report",
        "Technical Analysis",
        ...project.skills.map((skillKey) => skillDatabaseMap[skillKey].name),
      ],
    };
  }

  return undefined;
}

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

  const reportBlog: string | undefined = getMarkdownFromFileSystem(
    PATHS.PROJECTS(projectKey as ProjectDatabaseKeys).BLOG,
  )?.content;

  const hasBlog: boolean = !!reportBlog;

  if (!projectData || !hasBlog) {
    notFound();
  }

  // Replace base path placeholder with actual path for images
  const processedReportContent: string = processMarkdownImages(
    reportBlog || "",
    PATHS.PROJECTS(projectKey as ProjectDatabaseKeys).BLOG_IMG,
  );

  return (
    <main>
      <div>
        <div className="text-center">
          <h2>{`Report for ${projectData.name}`}</h2>
        </div>
        <SpecialReader
          content={processedReportContent}
          previousPagePath={ROUTES.PROJECTS.detail(
            projectKey as ProjectDatabaseKeys,
          )}
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
        PATHS.PROJECTS(projectKey as ProjectDatabaseKeys).BLOG,
      )?.content;
      return !!reportExists;
    })
    .map((projectKey) => ({
      projectKey,
    }));
};

export default ProjectReportPage;
