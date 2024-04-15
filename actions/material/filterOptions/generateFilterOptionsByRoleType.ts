import stringToSlug from "@/actions/stringToSlug";
import FilterOption from "@/interfaces/filters/FilterOption";
import RoleInterface from "@/interfaces/material/RoleInterface";

//TODO: Add documentation
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
