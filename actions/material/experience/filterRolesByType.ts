import stringToSlug from "@/actions/stringToSlug";
import ExperienceTypeEnum from "@/enums/ExperienceType";
import RoleInterface from "@/interfaces/material/RoleInterface";

//TODO: Add documentation
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
