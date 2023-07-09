import Project from "@/types/projects";

/**
 * Gets the description of the project for a given slug (unique identifier).
 * If no project with the given slug exists in the given list of projects, undefined is returned.
 * @param slug (string): The slug of the project to get the description of
 * @param projects (Project[]): The list of projects to search through
 * @returns (string | undefined): The description of the project with the given slug, or undefined if no project with that slug exists in the given list of projects
 */
function getDescriptionBySlug(
  slug: string,
  projects: Project[]
): string | undefined {
  const project = projects.find((project) => project.slug === slug);
  return project?.description;
}

export default getDescriptionBySlug;
