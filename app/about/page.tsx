import getMarkdownFromFileSystem from "@/lib/actions/file-system/getMarkdownFromFileSystem";
import MaterialList from "@/components/material-lists/MaterialList";
import Reader from "@/components/reader/Reader";
import Socials from "@/components/socials/Socials";
import DetailsTable from "@/components/ui/DetailsTable";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import developerName from "@/constants/developerName";
import experienceTime from "@/constants/experience";
import subtitles from "@/constants/subtitles";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import companyDatabaseMap from "@/database/companies/CompanyDatabaseMap";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import courseDatabaseMap from "@/database/courses/CourseDatabaseMap";
import type CourseInterface from "@/database/courses/CourseInterface";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import rolesDatabase from "@/database/roles/RoleDatabaseMap";
import type RoleInterface from "@/database/roles/RoleInterface";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

const aboutContent: string | undefined = getMarkdownFromFileSystem(
  "public/about/long.md"
)?.content;

export const metadata: Metadata = {
  title: `${developerName} - About Me`,
  description: aboutContent,
  category: `About ${developerName}`,
  creator: developerName,
  keywords: subtitles,
};

/**
 * Long-form about page that merges markdown storytelling, career snapshot stats, and curated material cross-links.
 * Reuses shared UI such as `Reader`, `DetailsTable`, `Socials`, and `MaterialList` so styling matches other sections.
 *
 * @returns Rich about layout with featured materials.
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
    ProjectDatabaseKeys.ForumDiscussions,
    ProjectDatabaseKeys.RealTimeMessaging,
    ProjectDatabaseKeys.AiGenerations,
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
        <h1>About Me</h1>
      </div>

      {/* Profile Image only shown in mobile*/}
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
          <Card className="lg:w-[25%] mb-8 md:mb-0">
            <CardContent className="space-y-5 lg:space-y-10">
              {/* Profile Image only shown in desktop */}
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
                  { heading: "Email Address", value: "bepary71@gmail.com" },
                  { heading: "Location", value: "London, UK" },
                  {
                    heading: "Master's Degree",
                    value: `${masters.grade} in ${masters.name} at ${masters.university}`,
                  },
                  {
                    heading: "Bachelor's Degree",
                    value: `${undergraduate.grade} in ${undergraduate.name} at ${undergraduate.university}`,
                  },
                  {
                    heading: "Current Role",
                    value: `${latestRole} at ${latestCompany}`,
                  },
                  {
                    heading: "Years of Experience",
                    value:
                      1 === experienceTime
                        ? "1 year"
                        : `${experienceTime} years`,
                  },
                  {
                    heading: "Main Focus",
                    value: [
                      "Artificial Intelligence",
                      "Full-Stack Development",
                      "Backend Software Engineering",
                    ],
                  },
                  {
                    heading: "Number of Projects",
                    value: `${numberOfProjects}`,
                  },
                  {
                    heading: "Number of Certificates",
                    value: `${numberOfCertificates}`,
                  },
                ]}
                className="grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:max-w-[220px] gap-12"
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <MaterialList materialKeys={featuredMaterial} />
    </main>
  );
}
