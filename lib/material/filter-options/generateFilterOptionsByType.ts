import stringToSlug from "@/lib/stringToSlug";
import ProjectInterface from "@/database/projects/ProjectInterface";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";
import generateFilterOptions from "./generateFilterOptions";

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
