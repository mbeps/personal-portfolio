import ShortDate from "@/class/ShortDate";

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

export default computeTotalExperience;
