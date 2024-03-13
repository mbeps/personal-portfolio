import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/UI/PageDescription";
import { PROJECTS } from "@/constants/pages";
import projectDatabase from "@/database/projects";
import type { Metadata } from "next";
import ProjectsView from "./components/ProjectsView";
import updateProjectImages from "@/actions/file-system/updateProjectImages";
import developerName from "@/constants/developerName";

const description = `
  Discover my portfolio of projects, both current and archived. 
  Use filters to narrow down projects by category, programming language, and technologies. 
  Archived projects are hidden by default.
`;

export const metadata: Metadata = {
  title: `${developerName} - ${PROJECTS.label}`,
  description: description,
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
        <HeadingOne title={PROJECTS.label} />
        <PageDescription description={description} />
        <ProjectsView projects={updateProjectImages(projectDatabase)} />
      </div>
    </section>
  );
};

export default ProjectsPage;
