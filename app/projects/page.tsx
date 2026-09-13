import type { Metadata } from "next";
import ProjectsView from "@/app/projects/_components/projects-view";
import PageDescription from "@/components/ui/page-description";
import { DEVELOPER } from "@/config/developer-info";
import { ROUTES } from "@/config/routes";
import projectDatabaseMap from "@/database/projects/project-database-map";

/**
 * Static metadata for the projects archive, driven by the database so keywords stay in sync with the visible list.
 */
export const metadata: Metadata = {
  title: `${DEVELOPER.NAME} - ${ROUTES.PROJECTS.name}`,
  description: `A list of all projects that ${DEVELOPER.NAME} has worked on.
  These include projects in web development, software engineering, Artificial Intelligence, Machine Learning and more.`,
  category: `${ROUTES.PROJECTS.name}`,
  creator: DEVELOPER.NAME,
  keywords: Object.values(projectDatabaseMap).map((project) => project.name),
};

/**
 * Projects archive shell that injects shared hero copy, metadata keywords, and the `ProjectsView` filter experience.
 *
 * @returns Section with heading/description plus the reusable projects view.
 */
const ProjectsPage = () => {
  return (
    <main>
      <section id="projects" className="flex flex-col items-start md:items-end">
        <div className="w-full">
          <h1>{ROUTES.PROJECTS.name}</h1>
          <PageDescription description={ROUTES.PROJECTS.description} />
          <ProjectsView />
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
