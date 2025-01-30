import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import SpecialReader from "@/components/Reader/SpecialReader";
import HeadingTwo from "@/components/Text/HeadingTwo";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabaseMap from "@/database/Projects/ProjectDatabaseMap";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import { notFound } from "next/navigation";

type Params = { projectKey: string };

type PageProps = {
  params: Params;
};

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
    return <></>;
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
