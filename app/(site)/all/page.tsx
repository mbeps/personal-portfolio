import type { Metadata } from "next";
import React from "react";
import CvExperienceItem from "@/app/cv/_components/CvExperienceItem";
import CvSection from "@/app/cv/_components/CvSection";
import CvSkillGroup from "@/app/cv/_components/CvSkillGroup";
import type { SerializedRoleInterface } from "@/app/cv/page";
import Reader from "@/components/reader/Reader";
import { Separator } from "@/components/shadcn/ui/separator";
import developerName from "@/constants/developerName";
import location from "@/constants/location";
import { PATHS } from "@/constants/paths";
import socialLinks from "@/constants/socials";
import subtitles from "@/constants/subtitles";
import type BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import blogDatabaseMap from "@/database/blogs/BlogsDatabaseMap";
import type CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import certificateDatabaseMap from "@/database/certificates/CertificateDatabaseMap";
import type CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import courseDatabaseMap from "@/database/courses/CourseDatabaseMap";
import type ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import projectDatabaseMap from "@/database/projects/ProjectDatabaseMap";
import roleDatabaseMap, {
  roleDatabaseKeys,
} from "@/database/roles/RoleDatabaseMap";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/SkillDatabaseMap";
import ExperienceTypeEnum from "@/enums/experience/ExperienceTypeEnum";
import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import groupSkills, { GroupByOptions } from "@/lib/skills/group/groupSkills";
import AllBlogItem from "./_components/AllBlogItem";
import AllCertificateItem from "./_components/AllCertificateItem";
import AllEducationItem from "./_components/AllEducationItem";
import AllProjectItem from "./_components/AllProjectItem";

/**
 * Metadata for the /all page.
 * robots: { index: false } ensures it's not indexed by search engines.
 */
export const metadata: Metadata = {
  title: `${developerName} - All Content`,
  description: `Comprehensive archive of all portfolio content for ${developerName}.`,
  robots: {
    index: false,
    follow: true,
  },
};

/**
 * AllPage is a pure Server Component that renders every piece of portfolio content.
 * It is designed for AI agents and bots to ingest the full picture of the portfolio.
 *
 * @returns {JSX.Element} The rendered /all page.
 */
const AllPage: React.FC = () => {
  // 1. Data Assembly: About Me
  const shortAbout = getMarkdownFromFileSystem(PATHS.ABOUT.SHORT) || "";
  const longAbout = getMarkdownFromFileSystem(PATHS.ABOUT.LONG) || "";
  const aboutContent = `${shortAbout}\n\n${longAbout}`.trim();

  // 2. Data Assembly: Skills (No archive filtering)
  const skillGroups = groupSkills(
    GroupByOptions.Category,
    skillDatabaseKeys,
    skillDatabaseMap,
  );

  // 3. Data Assembly: Experience & Volunteering
  const experienceItems = [];
  const volunteeringItems = [];

  for (const key of roleDatabaseKeys) {
    const role = roleDatabaseMap[key];
    const responsibilities = getMarkdownFromFileSystem(
      PATHS.ROLES(key).RESPONSIBILITIES,
    );

    const serializedRole: SerializedRoleInterface = {
      ...role,
      startDate: role.startDate.toString(),
      endDate: role.endDate.toString(),
    };

    const item = { role: serializedRole, responsibilities, roleKey: key };

    if (role.type === ExperienceTypeEnum.Volunteering) {
      volunteeringItems.push(item);
    } else {
      experienceItems.push(item);
    }
  }

  // 4. Data Assembly: Other Categories
  const education = (
    Object.keys(courseDatabaseMap) as CourseDatabaseKeys[]
  ).map((key) => ({
    course: courseDatabaseMap[key],
    courseKey: key,
  }));

  const projects = (
    Object.keys(projectDatabaseMap) as ProjectDatabaseKeys[]
  ).map((key) => ({
    project: projectDatabaseMap[key],
    projectKey: key,
  }));

  const blogs = (Object.keys(blogDatabaseMap) as BlogDatabaseKeys[]).map(
    (key) => ({
      blog: blogDatabaseMap[key],
      blogKey: key,
    }),
  );

  const certificates = (
    Object.keys(certificateDatabaseMap) as CertificateDatabaseKeys[]
  ).map((key) => ({
    certificate: certificateDatabaseMap[key],
    certificateKey: key,
  }));

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Inline Header */}
      <header className="mb-4 border-neutral-200 border-b-2 pb-2 dark:border-neutral-800">
        <h1 className="mb-2 font-bold text-4xl">{developerName}</h1>
        <div className="space-y-2 font-medium text-neutral-600 text-xl dark:text-neutral-400">
          <p>{location}</p>
          <p>{subtitles.join(" · ")}</p>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-bold text-lg">
          {socialLinks
            .filter((link) => link.name !== "Email")
            .map((link) => (
              <li key={link.name}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {link.name}
                </a>
              </li>
            ))}
        </ul>
      </header>

      {/* About Me Section */}
      <CvSection title="About Me">
        <Reader content={aboutContent} />
      </CvSection>

      {/* Skills Section */}
      <CvSection title="Skills">
        <div className="grid grid-cols-1 gap-x-12 gap-y-4">
          {skillGroups.map((group) => (
            <CvSkillGroup key={group.skillCategoryName} group={group} />
          ))}
        </div>
      </CvSection>

      {/* Experience Section */}
      <CvSection title="Professional Experience">
        <div>
          {experienceItems.map((item, index) => (
            <React.Fragment key={item.roleKey}>
              <CvExperienceItem
                role={item.role}
                responsibilities={item.responsibilities}
                showArchived={true}
              />
              {index < experienceItems.length - 1 && (
                <Separator className="my-6" />
              )}
            </React.Fragment>
          ))}
        </div>
      </CvSection>

      {/* Volunteering Section */}
      <CvSection title="Volunteering">
        <div>
          {volunteeringItems.map((item, index) => (
            <React.Fragment key={item.roleKey}>
              <CvExperienceItem
                role={item.role}
                responsibilities={item.responsibilities}
                showArchived={true}
              />
              {index < volunteeringItems.length - 1 && (
                <Separator className="my-6" />
              )}
            </React.Fragment>
          ))}
        </div>
      </CvSection>

      {/* Education Section */}
      <CvSection title="Education">
        <div>
          {education.map((item, index) => (
            <React.Fragment key={item.courseKey}>
              <AllEducationItem {...item} />
              {index < education.length - 1 && <Separator className="my-6" />}
            </React.Fragment>
          ))}
        </div>
      </CvSection>

      {/* Projects Section */}
      <CvSection title="Projects">
        <div>
          {projects.map((item, index) => (
            <React.Fragment key={item.projectKey}>
              <AllProjectItem {...item} />
              {index < projects.length - 1 && <Separator className="my-6" />}
            </React.Fragment>
          ))}
        </div>
      </CvSection>

      {/* Blogs Section */}
      <CvSection title="Blogs">
        <div>
          {blogs.map((item, index) => (
            <React.Fragment key={item.blogKey}>
              <AllBlogItem {...item} />
              {index < blogs.length - 1 && <Separator className="my-6" />}
            </React.Fragment>
          ))}
        </div>
      </CvSection>

      {/* Certificates Section */}
      <CvSection title="Certificates">
        <div>
          {certificates.map((item, index) => (
            <React.Fragment key={item.certificateKey}>
              <AllCertificateItem {...item} />
              {index < certificates.length - 1 && (
                <Separator className="my-6" />
              )}
            </React.Fragment>
          ))}
        </div>
      </CvSection>
    </main>
  );
};

export default AllPage;
