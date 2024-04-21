import stringToSlug from "@/actions/stringToSlug";
import FilterOption from "@/interfaces/filters/FilterOption";
import RoleInterface from "@/database/Roles/RoleInterface";

/**
 * Generates the filter options based on the types of the roles.
 * For all the roles, it will generate a filter option for each unique type.
 * These are then used as options the user can select to filter the roles.
 *
 * @param roleDatabase The database of all roles from which to generate the filter options
 * @returns The filter options generated from the types of the roles
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
