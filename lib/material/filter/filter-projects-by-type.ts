import type ProjectInterface from "@/database/projects/project-interface";
import type Database from "@/interfaces/database";
import filterMaterialKeysByPredicate from "@/lib/material/filter/filter-material-keys-by-predicate";
import stringToSlug from "@/lib/string-to-slug";

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
  projectsDatabase: Database<T>,
): string[] {
  return filterMaterialKeysByPredicate(
    projectKeys,
    projectsDatabase,
    (project) =>
      Boolean(project && stringToSlug(project.type) === stringToSlug(type)),
  );
}
