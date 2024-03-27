import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { PROJECTS_PAGE } from "@/constants/pages";
import type { Metadata } from "next";
import ProjectsView from "./components/ProjectsView";

export const metadata: Metadata = {
  title: `${developerName} - ${PROJECTS_PAGE.label}`,
  description: PROJECTS_PAGE.description,
};

/**
 * Displays a list of all projects that I have worked on.
 * Also allows the user to search and filter the projects.
 * These projects are displayed into categories.
 *
 * @returns Page with all projects
 * @requires {@link ProjectsView} component to display the projects and filter/search them
 */
const ProjectsPage = () => {
  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title={PROJECTS_PAGE.label} />
        <PageDescription description={PROJECTS_PAGE.description} />
        <ProjectsView />
      </div>
    </section>
  );
};

export default ProjectsPage;
