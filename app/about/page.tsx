import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import MaterialList from "@/components/MaterialLists/MaterialList";
import Reader from "@/components/Reader/Reader";
import Socials from "@/components/Socials/Socials";
import HeadingOne from "@/components/Text/HeadingOne";
import DetailsTable from "@/components/UI/DetailsTable";
import developerName from "@/constants/developerName";
import experienceTime from "@/constants/experience";
import subtitles from "@/constants/subtitles";
import CertificateDatabaseKeys from "@/database/Certificates/CertificateDatabaseKeys";
import companyDatabaseMap from "@/database/Companies/CompanyDatabaseMap";
import CourseDatabaseKeys from "@/database/Courses/CourseDatabaseKeys";
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
 * About page displays information about the developer.
 *
 * @returns Home page
 */
export default function About() {
  if (!aboutContent) {
    notFound();
  }

  // Work experience
  const latestWorkExperience: RoleInterface = Object.values(rolesDatabase)[0];
  const latestRole: string = latestWorkExperience.name;
  const latestCompany: string =
    companyDatabaseMap[latestWorkExperience.company].name;

  // Education
  const undergraduate: CourseInterface =
    courseDatabaseMap[CourseDatabaseKeys.RHUL_ComputerScience];
  const masters: CourseInterface =
    courseDatabaseMap[CourseDatabaseKeys.KCL_ArtificialIntelligence];

  // Projects
  const numberOfProjects: number = Object.keys(ProjectDatabaseKeys).length;

  // Certificates
  const numberOfCertificates: number = Object.keys(
    CertificateDatabaseKeys
  ).length;

  // Featured material
  const featuredMaterial: string[] = [
    RoleDatabaseKeys.CommerzbankDevOpsEngineer,
    RoleDatabaseKeys.GoogleRHULDevelopersClubSoftwareEngineer,
    ProjectDatabaseKeys.CircusDiscussions,
    ProjectDatabaseKeys.RingmasterMessaging,
    ProjectDatabaseKeys.MagicianAI,
    ProjectDatabaseKeys.HousePricePrediction,
    ProjectDatabaseKeys.AdultIncomePrediction,
    ProjectDatabaseKeys.MachineLearningLabs,
    ProjectDatabaseKeys.MachineLearningDataScienceLab,
    ProjectDatabaseKeys.ArtificialIntelligenceReinforcementLearning,
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
          <div className="lg:w-[75%]">
            <Reader content={aboutContent} size="lg:prose-lg" />
          </div>

          {/* Right section */}
          <div
            className="
              lg:w-[25%]
              space-y-5 lg:space-y-10 
              p-4
              bg-white dark:bg-neutral-950 
              border border-neutral-200 dark:border-neutral-700
              transition-colors duration-700 ease-in-out
              rounded-lg"
          >
            {/* Profile Image */}
            <div className="flex justify-center">
              <Image
                src="/profile.png"
                alt="Profile image of the developer"
                width={250}
                height={250}
                className="rounded-full shadow-xl hidden lg:block mt-8 align-center"
                quality={60}
                loading="eager"
                priority
              />
            </div>

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
                  value: `${undergraduate.name} at ${undergraduate.university}`,
                },
                {
                  heading: "Master's Degree",
                  value: `${masters.name} at ${masters.university}`,
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
                  heading: "Main Focus",
                  value:
                    "Full-Stack Development, Backend Software Engineering & Artificial Intelligence",
                },
                { heading: "Number of Projects", value: `${numberOfProjects}` },
                {
                  heading: "Number of Certificates",
                  value: `${numberOfCertificates}`,
                },
                {
                  heading: "Main Programming Languages",
                  value: `Python, Java, JavaScript, TypeScript`,
                },
              ]}
              className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:max-w-[220px] gap-12"
            />
          </div>
        </div>
      </div>
      <MaterialList materialKeys={featuredMaterial} />
    </main>
  );
}
