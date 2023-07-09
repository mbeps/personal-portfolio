import Project from "@/types/projects";

/**
 * Gets the language of the project for a given slug (unique identifier).
 * If no project with the given slug exists in the given list of projects, undefined is returned.
 * @param slug (string): The slug of the project to get the language of
 * @param projects (Project[]): The list of projects to search through
 * @returns (string | undefined): The language of the project with the given slug, or undefined if no project with that slug exists in the given list of projects
 */
function getLanguageBySlug(
  slug: string,
  projects: Project[]
): string | undefined {
  const project = projects.find((project) => project.slug === slug);
  return project?.programmingLanguage;
}

export default getLanguageBySlug;
