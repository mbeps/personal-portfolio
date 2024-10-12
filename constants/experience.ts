import ShortDate from "@/class/ShortDate";
import RoleDatabaseKeys from "@/database/Roles/RoleDatabaseKeys";
import rolesDatabase from "@/database/Roles/RoleDatabaseMap";
import RoleInterface from "@/database/Roles/RoleInterface";

/**
 * Computes the total experience in years from a list of jobs.
 *
 * This function takes an array of job objects, each containing a `startDate` and an `endDate`.
 * It calculates the difference in years between the `startDate` and `endDate` for each job
 * and sums these differences to return the total experience in years.
 *
 * @param {Array<{ startDate: ShortDate; endDate: ShortDate }>} jobs - An array of job objects, each with a `startDate` and an `endDate`.
 * @returns {number} The total experience in years.
 */
function computeTotalExperience(
  jobs: { startDate: ShortDate; endDate: ShortDate }[]
): number {
  return jobs.reduce((total, job) => {
    const experienceInYears = job.endDate.difference(job.startDate);
    return total + experienceInYears;
  }, 0); // Start with 0 as the initial total
}

const mainWorkExperience: RoleDatabaseKeys[] = [
  RoleDatabaseKeys.CommerzbankDevOpsEngineer,
];

// Calculate total experience for mainWorkExperience
const jobs = mainWorkExperience.map((jobKey) => {
  const job: RoleInterface = rolesDatabase[jobKey];
  return { startDate: job.startDate, endDate: job.endDate };
});

// Using the helper function to compute total experience
const experienceTime: number = Math.round(computeTotalExperience(jobs));

export default experienceTime;
