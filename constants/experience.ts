import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import rolesDatabase from "@/database/roles/RoleDatabaseMap";
import RoleInterface from "@/database/roles/RoleInterface";
import computeTotalExperience from "@/lib/computeTotalExperience";

const mainWorkExperience: RoleDatabaseKeys[] = [
  RoleDatabaseKeys.CommerzbankBackendEngineer,
];

// Calculate total experience for mainWorkExperience
const jobs = mainWorkExperience.map((jobKey) => {
  const job: RoleInterface = rolesDatabase[jobKey];
  return { startDate: job.startDate, endDate: job.endDate };
});

// Using the helper function to compute total experience
const experienceTime: number = Math.round(computeTotalExperience(jobs));

export default experienceTime;
