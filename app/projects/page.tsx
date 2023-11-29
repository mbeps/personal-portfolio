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
import ProjectsFilterSearchSection from "./components/ProjectsFilterSearchSection";
import HeadingOne from "@/components/Text/HeadingOne";
import PageDescription from "@/components/Atoms/PageDescription";
import ProjectsListSection from "./components/ProjectListSection";
import searchStringInFields from "@/actions/searchStringInFields";

const description = `
  Discover my portfolio of projects, both current and archived. 
  Use filters to narrow down projects by category, programming language, and technologies. 
  Archived projects are hidden by default.
`;

export const metadata: Metadata = {
  title: "Maruf Bepary - Projects",
  description: description,
};

interface ProjectPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}

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
const ProjectsPage: React.FC<ProjectPageProps> = ({ params, searchParams }) => {
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

  const slug = params.slug;
  const selectedType = searchParams.type || "All";
  const selectedLanguage = searchParams.language || "All";
  const selectedTechnology = searchParams.technology || "All";
  const searchTerm = searchParams.search || "";
  const showArchived = searchParams.archived === "true" || false;

  /**
   * Groups the projects by type.
   * Each project type is a key in the object.
   * @param projects (Project[]): list of projects to be grouped by type
   * @returns (Record<string, Project[]>): object with project types as keys and list of projects as values
   */
  const groupProjectsByType = (
    projects: Project[]
  ): Record<string, Project[]> => {
    return projects.reduce<Record<string, Project[]>>((grouped, project) => {
      (grouped[project.type] = grouped[project.type] || []).push(project);
      return grouped;
    }, {});
  };

  const searchFields: Array<keyof Project> = [
    "name",
    "programmingLanguage",
    "tags",
    "technologies",
  ];

  /**
   * Filters the projects based on the the filter options.
   * Both language and type can be filtered.
   * If 'All' is selected, then all projects are displayed.
   * Archived projects are not displayed by default.
   */
  const filteredProjects = updatedProjects.filter(
    (project) =>
      (showArchived || !project.archived) &&
      (selectedType === "All" || project.type === selectedType) &&
      (selectedLanguage === "All" ||
        project.programmingLanguage === selectedLanguage) &&
      (selectedTechnology === "All" ||
        (project.technologies &&
          project.technologies.includes(selectedTechnology))) &&
      searchStringInFields(searchTerm, project, searchFields)
  );

  /**
   * Projects categorized by type.
   */
  const groupedProjects = groupProjectsByType(filteredProjects);

  return (
    <section id="projects" className="flex flex-col items-start md:items-end">
      <div className="my-12 pb-12 md:pt-8 md:pb-48 animate-fadeIn animation-delay-2 w-full min-h-[85vh]">
        <HeadingOne title="Projects" />
        <PageDescription description={description} />

        <ProjectsFilterSearchSection allProjects={updatedProjects} />
        {/* List of projects */}
        <ProjectsListSection groupedProjects={groupedProjects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
