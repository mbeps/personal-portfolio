import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import rolesDatabase from "@/database/roles/RoleDatabaseMap";
import RoleInterface from "@/database/roles/RoleInterface";
import computeTotalExperience from "@/lib/computeTotalExperience";

/**
 * Subset of role keys considered "main" professional work experience for the experience summary.
 * Add or remove keys here to control which roles contribute to the total years figure.
 * @author Maruf Bepary
 */
const mainWorkExperience: RoleDatabaseKeys[] = [
  RoleDatabaseKeys.CommerzbankBackendEngineer,
];

// Calculate total experience for mainWorkExperience
const jobs = mainWorkExperience.map((jobKey) => {
  const job: RoleInterface = rolesDatabase[jobKey];
  return { startDate: job.startDate, endDate: job.endDate };
});

// Using the helper function to compute total experience
/**
 * Total rounded years of professional experience derived from `mainWorkExperience` role dates.
 * Computed once at module load via `computeTotalExperience` and displayed in the homepage hero and about section.
 * Update `mainWorkExperience` above to include additional roles rather than editing this constant directly.
 * @author Maruf Bepary
 */
const experienceTime: number = Math.round(computeTotalExperience(jobs));

export default experienceTime;
