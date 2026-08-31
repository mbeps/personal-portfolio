import type RoleInterface from "@/database/roles/role-interface";
import type ExperienceTypeEnum from "@/enums/experience/experience-type-enum";
import type Database from "@/interfaces/database";
import filterMaterialKeysByPredicate from "@/lib/material/filter/filter-material-keys-by-predicate";
import stringToSlug from "@/lib/string-to-slug";

/**
 * Lets the experience page toggle between work, leadership, and volunteer roles without rebuilding the dataset.
 *
 * @param targetType Experience type requested by the user.
 * @param roleKeys Ordered role keys already narrowed by search or archive settings.
 * @param rolesDatabase Database map for metadata lookups.
 * @returns Keys that belong to the requested experience type.
 */
export default function filterRolesByType<T extends RoleInterface>(
  targetType: ExperienceTypeEnum,
  roleKeys: string[],
  rolesDatabase: Database<T>,
): string[] {
  return filterMaterialKeysByPredicate(roleKeys, rolesDatabase, (role) =>
    Boolean(role && stringToSlug(role.type) === stringToSlug(targetType)),
  );
}
