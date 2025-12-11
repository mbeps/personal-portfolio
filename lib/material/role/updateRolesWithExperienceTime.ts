import RoleInterface from "@/database/roles/RoleInterface";
import Database from "@/interfaces/Database";

/**
 * Normalizes the `timeInRole` string for every role so cards, timelines, and metadata tags display the same duration math.
 *
 * @param rolesMap Role dictionary pulled from the static database.
 * @returns New map with the computed `timeInRole` baked into each role entry.
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
