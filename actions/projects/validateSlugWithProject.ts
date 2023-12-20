import Project from "@/types/projects";

/**
 * Validates that the slugs are valid.
 * Checks if the slugs are in the projects array.
 * @param slugs (string[]): The slugs to validate.
 * @param projects (Project[]): The projects to validate against.
 * @returns (boolean): Whether or not the slugs are valid
 */
const validateSlugWithProject = (
  slugs: string[],
  projects: Project[]
): boolean => {
  return slugs.every((slug) =>
    projects.some((project) => project.slug === slug)
  );
};

export default validateSlugWithProject;
