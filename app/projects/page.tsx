import PageDescription from "@/components/ui/PageDescription";
import developerName from "@/constants/developerName";
import { ROUTES } from "@/constants/routes";
import projectDatabaseMap from "@/database/projects/ProjectDatabaseMap";
import type { Metadata } from "next";
import ProjectsView from "./_components/ProjectsView";

/**
 * Static metadata for the projects archive, driven by the database so keywords stay in sync with the visible list.
 */
export const metadata: Metadata = {
  title: `${developerName} - ${ROUTES.PROJECTS.name}`,
  description: `A list of all projects that ${developerName} has worked on.
  These include projects in web development, software engineering, Artificial Intelligence, Machine Learning and more.`,
  category: `${ROUTES.PROJECTS.name}`,
  creator: developerName,
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
