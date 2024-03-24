import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import developerName from "@/constants/developerName";
import { PROJECTS_PAGE } from "@/constants/pages";
import projectDatabase from "@/database/projects";
import type { Metadata } from "next";
import ProjectsView from "./components/ProjectsView";

export const metadata: Metadata = {
  title: `${developerName} - ${PROJECTS_PAGE.label}`,
  description: PROJECTS_PAGE.description,
};

/**
 * Projects page displaying multiple types of projects that I worked on.
 * Projects are grouped by type.
 * The categories are displayed in this order.
 * The user can filter the projects by type, language, and other options.
 * The user can also search for a specific project:
 * - Name of the project
 * - Programming language
 * - Type of project
 * - Technologies used
 * @returns (JSX.Element): Projects page
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
