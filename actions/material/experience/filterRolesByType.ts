import stringToSlug from "@/actions/stringToSlug";
import RoleInterface from "@/database/Roles/RoleInterface";
import ExperienceTypeEnum from "@/enums/Experience/ExperienceTypeEnum";

/**
 * Filters the roles by the type of experience, for example "work" or "volunteer".
 *
 * @param targetType The type of experience to filter by
 * @param roleKeys The keys of the roles to filter
 * @param rolesDatabase The database of all roles for access to the role details
 * @returns The keys of the roles that match the experience type
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
