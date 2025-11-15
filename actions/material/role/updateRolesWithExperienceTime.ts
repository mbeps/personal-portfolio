import RoleInterface from "@/database/Roles/RoleInterface";
import Database from "@/interfaces/Database";

/**
 * Updates the timeInRole field of each role in the rolesMap.
 * @param rolesMap - A map of RoleInterface objects.
 * @returns A new Database<RoleInterface> with updated timeInRole fields.
 */
function updateRolesWithExperienceTime(
  rolesMap: Database<RoleInterface>
): Database<RoleInterface> {
  const updatedRolesMap: Database<RoleInterface> = {};

  for (const key in rolesMap) {
    if (rolesMap.hasOwnProperty(key)) {
      const role = rolesMap[key];

      // Calculate the experience time from startDate to endDate
      const experienceTime = role.endDate.formatExperienceTime(role.startDate);

      // Create a new role object with the updated timeInRole field
      updatedRolesMap[key] = {
        ...role,
        timeInRole: experienceTime,
      };
    }
  }

  return updatedRolesMap;
}

export default updateRolesWithExperienceTime;
