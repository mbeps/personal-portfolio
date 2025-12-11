import stringToSlug from "@/actions/stringToSlug";
import RoleInterface from "@/database/roles/RoleInterface";
import ExperienceTypeEnum from "@/enums/experience/ExperienceTypeEnum";
import Database from "@/interfaces/Database";

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
  rolesDatabase: Database<T>
): string[] {
  const filteredRoleSlugs: string[] = [];

  roleKeys.forEach((key) => {
    const role: T = rolesDatabase[key];
    if (role && stringToSlug(role.type) === stringToSlug(targetType)) {
      filteredRoleSlugs.push(key);
    }
  });

  return filteredRoleSlugs;
}
