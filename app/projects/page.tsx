import {
  backendWebDevProjects,
  extraWebDevProjects,
  gameDevProjects,
  javaAssignments,
  machineLearningProjects,
  otherProjects,
  webdevProjects,
} from "@/constants/projects";
import Project from "@/types/projects";
import ProjectsList from "./components/ProjectsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maruf Bepary - Projects",
  description:
    "A list of all the projects I have worked on. The projects are grouped by type.",
};

/**
 * Projects page displaying multiple types of projects that I worked on.
 * Projects are grouped by type.
 * The user can filter the projects by type, language, and other options.
 * The user can also search for a specific project:
 * - Name of the project
 * - Programming language
 * - Type of project
 * - Technologies used
 * @returns (JSX.Element): Projects page
 */
const ProjectsPage = () => {
  /**
   * List of all projects.
   * They are displayed in the order they are added to the list.
   */
  const allProjects: Project[] = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...gameDevProjects,
    ...otherProjects,
  ];

  return <ProjectsList allProjects={allProjects} />;
};

export default ProjectsPage;
