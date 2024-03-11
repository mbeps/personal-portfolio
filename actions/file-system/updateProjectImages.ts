import ProjectInterface from "@/interfaces/material/ProjectInterface";
import hasProjectCover from "../material/projects/hasProjectCover";

/**
 * Adds the path to the cover images for each project that has a cover image.
 * The cover image is stored in the public/projects folder.
 * The project folder must have the same name as the slug.
 * The name of the cover image must be `cover.png`.
 * This only works on the server as it requires access to the file system.
 * Only server components can use this function.
 * @param projects (Project[]) - Array of project objects.
 */
export default function updateProjectImagesHashMap(projectsMap: {
  [key: string]: ProjectInterface;
}): { [key: string]: ProjectInterface } {
  return Object.entries(projectsMap).reduce((acc, [key, project]) => {
    if (hasProjectCover(project.slug)) {
      acc[key] = {
        ...project,
        thumbnailImage: `/projects/${project.slug}/cover.png`,
      };
    } else {
      acc[key] = project;
    }
    return acc;
  }, {} as { [key: string]: ProjectInterface });
}
