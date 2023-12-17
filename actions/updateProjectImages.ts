import Project from "@/types/projects";
import hasProjectCover from "./hasProjectCover";

/**
 * Adds the path to the cover images for each project that has a cover image.
 * The cover image is stored in the public/projects folder.
 * The project folder must have the same name as the slug.
 * The name of the cover image must be `cover.png`.
 * This only works on the server as it requires access to the file system.
 * Only server components can use this function.
 * @param projects (Project[]) - Array of project objects.
 * @returns (Project[]) - Array of project objects with updated imageURL fields.
 */
const updateProjectImages = (projects: Project[]): Project[] => {
  return projects.map((project) => {
    if (hasProjectCover(project.slug)) {
      return {
        ...project,
        imageURL: `/projects/${project.slug}/cover.png`,
      };
    }
    return project;
  });
};

export default updateProjectImages;
