import ProjectInterface from "@/interfaces/ProjectInterface";

/**
 * Gets the project with the given slug (unique identifier).
 * If no project with the given slug exists in the given list of projects, undefined is returned.
 * This returns the project object itself, not just a single property of the project.
 * @param slug (string): The slug of the project to get the project of
 * @param projects (Project[]): The list of projects to search through (usually the list of projects in the Vuex store
 * @returns (Project | undefined): The project with the given slug, or undefined if no project with that slug exists in the given list of projects
 */
function getProjectBySlug(
  slug: string,
  projects: ProjectInterface[],
): ProjectInterface | undefined {
  return projects.find((project) => project.slug === slug);
}

export default getProjectBySlug;
