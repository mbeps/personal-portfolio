import updateProjectImages from "@/actions/updateProjectImages";
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
import type { Metadata } from "next";
import ProjectsList from "./components/ProjectsList";
import HeadingOne from "@/components/Text/HeadingOne";

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

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Projects" />
        <ProjectsList allProjects={updatedProjects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
