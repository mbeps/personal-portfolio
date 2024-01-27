import PageDescription from "@/components/UI/PageDescription";
import HeadingOne from "@/components/Text/HeadingOne";
import {
  backendWebDevProjects,
  extraWebDevProjects,
  gameDevProjects,
  javaAssignments,
  machineLearningProjects,
  otherProjects,
  webdevProjects,
} from "@/database/projects";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import type { Metadata } from "next";
import ProjectsView from "./components/ProjectsView";
import { PROJECTS } from "@/constants/pages";

const description = `
  Discover my portfolio of projects, both current and archived. 
  Use filters to narrow down projects by category, programming language, and technologies. 
  Archived projects are hidden by default.
`;

export const metadata: Metadata = {
  title: `Maruf Bepary - ${PROJECTS.label}`,
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
  const allProjects: ProjectInterface[] = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...gameDevProjects,
    ...otherProjects,
  ];

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title={PROJECTS.label} />
        <PageDescription description={description} />
        <ProjectsView allProjects={allProjects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
