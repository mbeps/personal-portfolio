import RoleDatabaseKeys from "@/database/roles/role-database-keys";
import rolesDatabase from "@/database/roles/role-database-map";
import type RoleInterface from "@/database/roles/role-interface";
import computeTotalExperience from "@/lib/compute-total-experience";

const developerName: string = "Maruf Bepary";
const location: string = "London, United Kingdom";
const subtitles: string[] = [
  "Artificial Intelligence",
  "Software Engineering",
  "Full-Stack Development",
];

const mainWorkExperience: RoleDatabaseKeys[] = [
  RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
];

const jobs = mainWorkExperience.map((jobKey) => {
  const job: RoleInterface = rolesDatabase[jobKey];
  return { startDate: job.startDate, endDate: job.endDate };
});

const experienceTime: number = Math.round(computeTotalExperience(jobs));

export const DEVELOPER = {
  NAME: developerName,
  EXPERIENCE: experienceTime,
  LOCATION: location,
  SUBTITLES: subtitles,
};
