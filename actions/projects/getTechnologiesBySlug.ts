import Project from "@/types/projects";

/**
 * Gets the list of technologies used in the project with the given slug (unique identifier).
 * If no project with the given slug exists in the given list of projects, undefined is returned.
 * @param slug (string): The slug of the project for which to get the technologies list
 * @param projects (Project[]): The list of projects to search through (usually the list of projects in the Vuex store
 * @returns (string[] | undefined): The list of technologies used in the project with the given slug, or undefined if no project with that slug exists in the given list of projects
 */
function getTechnologiesBySlug(
  slug: string,
  projects: Project[]
): string[] | undefined {
  const project = projects.find((project) => project.slug === slug);
  return project?.technologies;
}

export default getTechnologiesBySlug;
