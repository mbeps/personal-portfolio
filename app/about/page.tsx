import { Info } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { GrAppsRounded } from "react-icons/gr";
import MaterialList from "@/components/material-lists/material-list";
import Reader from "@/components/reader/reader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import Socials from "@/components/socials/socials";
import DetailsTable from "@/components/ui/details-table";
import developerName from "@/constants/developer-name";
import experienceTime from "@/constants/experience";
import location from "@/constants/location";
import { PATHS } from "@/constants/paths";
import subtitles from "@/constants/subtitles";
import CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import companyDatabaseMap from "@/database/companies/company-database-map";
import CourseDatabaseKeys from "@/database/courses/course-database-keys";
import courseDatabaseMap from "@/database/courses/course-database-map";
import type CourseInterface from "@/database/courses/course-interface";
import ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import RoleDatabaseKeys from "@/database/roles/role-database-keys";
import rolesDatabase from "@/database/roles/role-database-map";
import type RoleInterface from "@/database/roles/role-interface";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";

const aboutContent: string | null = getMarkdownFromFileSystem(PATHS.ABOUT.LONG);

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
    CertificateDatabaseKeys,
  ).length;

  // Featured material
  const featuredMaterial: string[] = [
    RoleDatabaseKeys.CommerzbankAiEngineer,
    RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer,
    RoleDatabaseKeys.GoogleRhulDevelopersClubSoftwareEngineer,
    RoleDatabaseKeys.OpenSourceContributor,

    ProjectDatabaseKeys.ForumDiscussions,
    ProjectDatabaseKeys.RealTimeMessaging,
    ProjectDatabaseKeys.AiGenerations,
    ProjectDatabaseKeys.RichTextNotes,
    ProjectDatabaseKeys.CarDealership,
    ProjectDatabaseKeys.CommerzbankAppStatus,
    ProjectDatabaseKeys.CommerzbankRates,

    ProjectDatabaseKeys.AlignmentInLargeLanguageModels,
    ProjectDatabaseKeys.CustomNeuralNetworkCoursework,
    ProjectDatabaseKeys.LinuxGnomeMcp,
    ProjectDatabaseKeys.ExcelSpreadsheetMCP,

    ProjectDatabaseKeys.SymphonyTranslateBot,
    ProjectDatabaseKeys.SymphonyPollBot,
    ProjectDatabaseKeys.SymphonyBlogBot,
    ProjectDatabaseKeys.SymphonyRssBot,
    ProjectDatabaseKeys.SymphonyWebhookBot,
  ];

  return (
    <main>
      <div className="text-center">
        <h1>About Me</h1>
      </div>

      {/* Top-centered profile image and socials (outside the card) */}
      <div className="my-6 flex flex-col items-center">
        <Image
          src={PATHS.PROFILE}
          alt="Profile image of the developer"
          width={160}
          height={160}
          className="rounded-full shadow-2xl"
          quality={60}
          loading="eager"
          priority
        />
        <div className="mt-4">
          <Socials iconSize={36} />
        </div>
      </div>

      <div className="mb-10">
        <Reader content={aboutContent} size="lg" />
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center space-x-3">
              <Info size={26} className="text-neutral-500" />
              <p className="font-semibold text-lg text-neutral-600 dark:text-neutral-400">
                Summary
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <DetailsTable
              details={[
                { heading: "Location", value: location },
                {
                  heading: "Main Focus",
                  value: [
                    "Artificial Intelligence",
                    "Full-Stack Development",
                    "Backend Software Engineering",
                  ],
                },
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
                    1 === experienceTime ? "1 year" : `${experienceTime} years`,
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
              className="mx-auto grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex items-center space-x-3">
              <GrAppsRounded size={25} className="text-neutral-500" />
              <p className="font-semibold text-lg text-neutral-600 dark:text-neutral-400">
                Related Material
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-2">
            <MaterialList
              materialKeys={featuredMaterial}
              isCollapsible={false}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
