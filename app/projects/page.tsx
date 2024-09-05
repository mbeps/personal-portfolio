import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabaseMap from "@/database/Projects/ProjectDatabaseMap";
import type { Metadata } from "next";
import ProjectsView from "./components/ProjectsView";

/**
 * Generates the metadata for the project page.
 * This includes the title and description of the page.
 * This is used for SEO purposes.
 *
 * @param props The props for the skill page.
 * @param parent The parent metadata that is being resolved.
 * @returns The metadata for the project page.
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
  title: `${developerName} - ${PROJECTS_PAGE.label}`,
  description: PROJECTS_PAGE.description,
  category: `${PROJECTS_PAGE.label}`,
  creator: developerName,
  keywords: Object.values(projectDatabaseMap).map((project) => project.name),
};

/**
 * Displays a list of all projects that I have worked on.
 * Also allows the user to search and filter the projects.
 * These projects are displayed into categories.
 *
 * A list of all projects along with their descriptions are added to the page for SEO purposes.
 * This is not visible to the user.
 *
 * @returns Page with all projects
 * @requires {@link ProjectsView} component to display the projects and filter/search them
 */
const ProjectsPage = () => {
  return (
    <main>
      {/* Invisible divs for SEO */}
      <div className="sr-only">
        <h1>Projects:</h1>
        <ul>
          {Object.values(projectDatabaseMap).map((project) => (
            <li key={project.name}>
              {project.name}: {project.description}
            </li>
          ))}
        </ul>
      </div>

      <section id="projects" className="flex flex-col items-start md:items-end">
        <div className="animate-fadeIn animation-delay-2 w-full">
          <HeadingOne title={PROJECTS_PAGE.label} />
          <PageDescription description={PROJECTS_PAGE.description} />
          <ProjectsView />
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
