import stringToSlug from "@/lib/actions/stringToSlug";
import ProjectInterface from "@/database/projects/ProjectInterface";
import Database from "@/interfaces/Database";

/**
 * Applies the “project type” dropdown after Fuse search has already trimmed the key list.
 * Keeps personal curation such as “Product”, “Tooling”, or “Research” consistent across views.
 *
 * @param type UI label representing the requested project type.
 * @param projectKeys Keys currently visible.
 * @param projectsDatabase Database map to read type metadata.
 * @returns Keys limited to the chosen type.
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
