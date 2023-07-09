import Project from "@/types/projects";

/**
 * Gets the name of a project for a given slug (unique identifier).
 * If no project with the given slug exists in the given list of projects, undefined is returned.
 * @param slug (string): The slug of the project to get the name of
 * @param projects (Project[]): The list of projects to search through
 * @returns (string | undefined): The name of the project with the given slug, or undefined if no project with that slug exists in the given list of projects
 */
function getNameBySlug(slug: string, projects: Project[]): string | undefined {
  const project = projects.find((project) => project.slug === slug);
  return project?.name;
}

export default getNameBySlug;
