import stringToSlug from "@/lib/actions/stringToSlug";
import RoleInterface from "@/database/roles/RoleInterface";
import Database from "@/interfaces/Database";
import FilterOption from "@/interfaces/filters/FilterOption";

/**
 * Builds the role “type” filter (contract, full-time, volunteer, etc.) based on the entries actually present in the timeline.
 *
 * @param roleDatabase Role dictionary that populates the experience view.
 * @returns Deduplicated filter options keyed by slug, sorted alphabetically.
 */
export function generateFilterOptionsByRoleType<T extends RoleInterface>(
  roleDatabase: Database<T>
): FilterOption[] {
  return [
    { slug: "all", entryName: "All" },
    ...Object.values(roleDatabase)
      .map((role) => ({
        slug: stringToSlug(role.type),
        entryName: role.type,
      }))
      .reduce((unique, item) => {
        if (!unique.some((option) => option.slug === item.slug)) {
          unique.push(item);
        }
        return unique;
      }, [] as FilterOption[])
      .sort((a, b) => a.entryName.localeCompare(b.entryName)),
  ];
}
