import type ProjectInterface from "@/database/projects/project-interface";
import type Database from "@/interfaces/database";
import type FilterOption from "@/interfaces/filters/filter-option";
import stringToSlug from "@/lib/string-to-slug";
import generateFilterOptions from "./generate-filter-options";

/**
 * Builds the project "type" filter (case study, library, tool, etc.) straight from the data model so curation and UI stay coupled.
 *
 * @param projectsDatabase Project dictionary scoped to the listing.
 * @returns Unique filter options keyed by the slugified type value.
 */
export default function generateFilterOptionsByType<T extends ProjectInterface>(
  projectsDatabase: Database<T>,
): FilterOption[] {
  return generateFilterOptions(projectsDatabase, (project) => ({
    slug: stringToSlug(project.type),
    entryName: project.type,
  }));
}
