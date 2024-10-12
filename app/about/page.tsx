import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import ShortDate from "@/class/ShortDate";
import MaterialList from "@/components/MaterialLists/MaterialList";
import Reader from "@/components/Reader/Reader";
import Socials from "@/components/Socials/Socials";
import HeadingOne from "@/components/Text/HeadingOne";
import DetailsTable from "@/components/UI/DetailsTable";
import developerName from "@/constants/developerName";
import subtitles from "@/constants/subtitles";
import companyDatabaseMap from "@/database/Companies/CompanyDatabaseMap";
import courseDatabaseMap from "@/database/Courses/CourseDatabaseMap";
import CourseInterface from "@/database/Courses/CourseInterface";
import ProjectDatabaseKeys from "@/database/Projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/Roles/RoleDatabaseKeys";
import rolesDatabase from "@/database/Roles/RoleDatabaseMap";
import RoleInterface from "@/database/Roles/RoleInterface";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

const aboutContent: string | undefined =
  getMarkdownFromFileSystem(`public/about/long.md`)?.content;

export const metadata: Metadata = {
  title: `${developerName} - About Me`,
  description: aboutContent,
  category: `About ${developerName}`,
  creator: developerName,
  keywords: subtitles,
};

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

/**
 * About page displays information about the developer.
 *
 * @returns Home page
 */
export default function About() {
  if (!aboutContent) {
    notFound();
  }

  // Work experience
  const mainWorkExperience: RoleDatabaseKeys[] = [
    RoleDatabaseKeys.CommerzbankDevOpsEngineer,
  ];

  const firstProfessionalExperience: RoleInterface =
    rolesDatabase[RoleDatabaseKeys.CommerzbankDevOpsEngineer];
  const latestWorkExperience: RoleInterface = Object.values(rolesDatabase)[0];
  const latestRole: string = latestWorkExperience.name;
  const latestCompany: string =
    companyDatabaseMap[latestWorkExperience.company].name;

  // Calculate total experience for mainWorkExperience
  const jobs = mainWorkExperience.map((jobKey) => {
    const job: RoleInterface = rolesDatabase[jobKey];
    return { startDate: job.startDate, endDate: job.endDate };
  });

  // Using the helper function to compute total experience
  const experienceTime: number = Math.round(computeTotalExperience(jobs));

  // Education
  const firstEducation: CourseInterface = Object.values(courseDatabaseMap)[0];
  const firstUniversityName: string = firstEducation.university;
  const firstCourseName: string = firstEducation.name;

  // Projects
  const numberOfProjects: number = Object.keys(ProjectDatabaseKeys).length;

  // Featured material
  const featuredMaterial: string[] = [
    RoleDatabaseKeys.CommerzbankDevOpsEngineer,
    RoleDatabaseKeys.GoogleRHULDevelopersClubSoftwareEngineer,
    ProjectDatabaseKeys.CircusDiscussions,
    ProjectDatabaseKeys.HousePricePrediction,
    ProjectDatabaseKeys.Noodle,
  ];

  return (
    <main>
      <div className="text-center">
        <HeadingOne title="About Me" />
      </div>

      {/* Profile Image */}
      <div className="block lg:hidden my-5 lg:md-0">
        <div className="flex justify-center">
          <Image
            src="/profile.png"
            alt="Profile image of the developer"
            width={150}
            height={150}
            className="rounded-full shadow-2xl"
            quality={60}
            loading="eager"
            priority
          />
        </div>
      </div>

      <div className="space-y-6">
        <div
          className="
            flex flex-col lg:flex-row
            space-y-10 md:space-y-5 lg:space-y-0
            items-stretch justify-center align-top
            lg:space-x-10 lg:p-4
            lg:text-left
        "
        >
          {/* Left section */}
          <div className="lg:w-full">
            <Reader content={aboutContent} size="lg:prose-lg" />
          </div>

          {/* Right section */}
          <div className="lg:w-auto space-y-5 lg:space-y-10">
            {/* Profile Image */}
            <Image
              src="/profile.png"
              alt="Profile image of the developer"
              width={250}
              height={250}
              className="rounded-full shadow-xl hidden lg:block mt-8"
              quality={60}
              loading="eager"
              priority
            />

            {/* Social Icons */}
            <div className="flex justify-center">
              <Socials iconSize={36} />
            </div>

            {/* Details */}
            <DetailsTable
              details={[
                { heading: "Name", value: developerName },
                { heading: "Location", value: "London, UK" },
                {
                  heading: "Bachelor's Degree",
                  value: `${firstCourseName} at ${firstUniversityName}`,
                },
                {
                  heading: "Current Role",
                  value: `${latestRole} at ${latestCompany}`,
                },
                {
                  heading: "Years of Experience",
                  value:
                    1 === experienceTime ? "1 year" : `${experienceTime} years`,
                },
                {
                  heading: "Projects",
                  value: `${numberOfProjects}`,
                },
              ]}
              className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:max-w-[220px]"
            />
          </div>
        </div>
      </div>
      <MaterialList materialKeys={featuredMaterial} />
    </main>
  );
}
