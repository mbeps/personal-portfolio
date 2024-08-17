import stringToSlug from "@/actions/stringToSlug";
import ProjectInterface from "@/database/Projects/ProjectInterface";

/**
 * Filters the projects that match a specific type.
 *
 * @param type The specific type to filter
 * @param projectKeys The keys of the projects to filter
 * @param projectsDatabase All the projects in the database so that we can access the project details
 * @returns The keys of the projects that match the type
 */
export default function filterProjectsByType<T extends ProjectInterface>(
  type: string,
  projectKeys: string[],
  projectsDatabase: Database<T>
): string[] {
  const filteredProjectSlugs = projectKeys.reduce((acc: string[], key) => {
    const project = projectsDatabase[key];
    if (project && stringToSlug(project.type) === stringToSlug(type)) {
      acc.push(key);
    }
    return acc;
  }, []); // Initialize the accumulator as an empty array of strings

  return filteredProjectSlugs;
}
