import ShortDate from "@/class/ShortDate";

/**
 * Totals the duration of multiple roles so the experience summary on the home page and timeline uses the same calculation.
 * Works with the month-precision `ShortDate` instances stored in the database maps rather than raw Date objects.
 *
 * @param jobs Collection of roles containing `startDate` and `endDate`.
 * @returns Combined experience in years, including fractional months.
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
