import type ProjectInterface from "@/database/projects/project-interface";
import generateFilterOptions from "@/lib/material/filter-options/generate-filter-options";
import stringToSlug from "@/lib/string-to-slug";
import type Database from "@/types/database/database";
import type FilterOption from "@/types/filters/filter-option";

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
