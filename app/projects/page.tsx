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
import PageDescription from "@/components/Atoms/PageDescription";

const description = `
  Discover my portfolio of projects, both current and archived. 
  Use filters to narrow down projects by category, programming language, and technologies. 
  Archived projects are hidden by default.
`;

export const metadata: Metadata = {
  title: "Maruf Bepary - Projects",
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
  const allProjects: Project[] = [
    ...webdevProjects,
    ...extraWebDevProjects,
    ...backendWebDevProjects,
    ...machineLearningProjects,
    ...javaAssignments,
    ...gameDevProjects,
    ...otherProjects,
  ];

  // const updatedProjects = updateProjectImages(allProjects);

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Projects" />
        <PageDescription description={description} />
        <ProjectsList allProjects={allProjects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
