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
import hasProjectCover from "@/actions/hasProjectCover";

export const metadata: Metadata = {
  title: "Maruf Bepary - Projects",
  description:
    "A list of all the projects I have worked on. The projects are grouped by type.",
};

/**
 * Updates the imageURL of each project if a cover image exists.
 * Adding the path to the project list if the project exists.
 * This had to be done as it was the only page that had access to the server
 * Very easy as the existing code remained the same only the list was modified
 * @param projects (Project[]) - Array of project objects.
 * @returns (Project[]) - Array of project objects with updated imageURL fields.
 */
const updateProjectImages = (projects: Project[]): Project[] => {
  return projects.map((project) => {
    if (hasProjectCover(project.slug)) {
      return {
        ...project,
        imageURL: `/projects/${project.slug}/cover.png`,
      };
    }
    return project;
  });
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
  const allProjects: Project[] = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...gameDevProjects,
    ...otherProjects,
  ];

  const updatedProjects = updateProjectImages(allProjects);

  return <ProjectsList allProjects={updatedProjects} />;
};

export default ProjectsPage;
