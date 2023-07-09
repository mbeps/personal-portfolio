import Project from "@/types/projects";

/**
 * Gets the repository URL of a project for a given slug (unique identifier).
 * If no project with the given slug exists in the given list of projects, undefined is returned.
 * @param slug (string): The slug of the project to get the repo of
 * @param projects (Project[]): The list of projects to search through (usually the list of projects in the Vuex store
 * @returns (string | undefined): The repo of the project with the given slug, or undefined if no project with that slug exists in the given list of projects
 */
function getRepoBySlug(slug: string, projects: Project[]): string | undefined {
  const project = projects.find((project) => project.slug === slug);
  return project?.repoURL;
}

export default getRepoBySlug;
