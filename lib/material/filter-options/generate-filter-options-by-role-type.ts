import type RoleInterface from "@/database/roles/role-interface";
import generateFilterOptions from "@/lib/material/filter-options/generate-filter-options";
import stringToSlug from "@/lib/string-to-slug";
import type Database from "@/types/database/database";
import type FilterOption from "@/types/filters/filter-option";

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
