import stringToSlug from "@/actions/stringToSlug";
import ProjectInterface from "@/database/Projects/ProjectInterface";
import FilterOption from "@/interfaces/filters/FilterOption";

/**
 * Generates the filter options based on the types of the projects.
 * For all the projects, it will generate a filter option for each unique type.
 * These are then used as options the user can select to filter the projects.
 *
 * @param projectsDatabase The database of all projects from which to generate the filter options
 * @returns The filter options generated from the types of the projects
 */
export default function generateFilterOptionsByType<T extends ProjectInterface>(
  projectsDatabase: Database<T>
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(projectsDatabase)
      .map((project) => ({
        slug: stringToSlug(project.type),
        entryName: project.type,
      }))
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.slug === value.slug) === index
      ),
  ];
}
