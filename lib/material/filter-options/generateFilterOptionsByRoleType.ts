import type RoleInterface from "@/database/roles/RoleInterface";
import type Database from "@/interfaces/Database";
import type FilterOption from "@/interfaces/filters/FilterOption";
import stringToSlug from "@/lib/stringToSlug";
import generateFilterOptions from "./generateFilterOptions";

/**
 * Builds the role "type" filter (contract, full-time, volunteer, etc.) based on the entries actually present in the timeline.
 *
 * @param roleDatabase Role dictionary that populates the experience view.
 * @returns Deduplicated filter options keyed by slug, sorted alphabetically.
 */
export function generateFilterOptionsByRoleType<T extends RoleInterface>(
  roleDatabase: Database<T>,
): FilterOption[] {
  return generateFilterOptions(
    roleDatabase,
    (role) => ({ slug: stringToSlug(role.type), entryName: role.type }),
    true,
  );
}
