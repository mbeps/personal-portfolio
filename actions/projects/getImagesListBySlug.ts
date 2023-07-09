import Project from "@/types/projects";

/**
 * Gets the list of images (paths to images) for the project with the given slug.
 * If no project with the given slug exists in the given list of projects, undefined is returned.
 * These paths are used to render the images in the project's page.
 * @param slug (string): The slug of the project to get the images list from.
 * @param projects (Project[]): The list of projects to search through.
 * @returns (string[] | undefined): The list of images for the project with the given slug, or undefined if no project with that slug exists in the given list of projects.
 */
function getImagesListBySlug(
  slug: string,
  projects: Project[]
): string[] | undefined {
  const project = projects.find((project) => project.slug === slug);
  return project?.imagesList;
}

export default getImagesListBySlug;
