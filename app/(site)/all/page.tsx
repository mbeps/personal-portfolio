import React from "react";
import { Metadata } from "next";
import developerName from "@/constants/developerName";
import location from "@/constants/location";
import subtitles from "@/constants/subtitles";
import socialLinks from "@/constants/socials";
import { PATHS } from "@/constants/paths";
import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import groupSkills, { GroupByOptions } from "@/lib/skills/group/groupSkills";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/SkillDatabaseMap";
import roleDatabaseMap, {
  roleDatabaseKeys,
} from "@/database/roles/RoleDatabaseMap";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import ExperienceTypeEnum from "@/enums/experience/ExperienceTypeEnum";
import courseDatabaseMap from "@/database/courses/CourseDatabaseMap";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import projectDatabaseMap from "@/database/projects/ProjectDatabaseMap";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import blogDatabaseMap from "@/database/blogs/BlogsDatabaseMap";
import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import certificateDatabaseMap from "@/database/certificates/CertificateDatabaseMap";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import CvSection from "@/app/cv/_components/CvSection";
import CvSkillGroup from "@/app/cv/_components/CvSkillGroup";
import CvExperienceItem from "@/app/cv/_components/CvExperienceItem";
import Reader from "@/components/reader/Reader";
import { SerializedRoleInterface } from "@/app/cv/page";
import AllEducationItem from "./_components/AllEducationItem";
import AllProjectItem from "./_components/AllProjectItem";
import AllBlogItem from "./_components/AllBlogItem";
import AllCertificateItem from "./_components/AllCertificateItem";
import { Separator } from "@/components/shadcn/ui/separator";

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
  const shortAbout =
    getMarkdownFromFileSystem(PATHS.ABOUT.SHORT)?.content || "";
  const longAbout = getMarkdownFromFileSystem(PATHS.ABOUT.LONG)?.content || "";
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
    )?.content;

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
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Inline Header */}
      <header className="border-b-2 border-neutral-200 dark:border-neutral-800 pb-2 mb-4">
        <h1 className="text-4xl font-bold mb-2">{developerName}</h1>
        <div className="space-y-2 text-xl font-medium text-neutral-600 dark:text-neutral-400">
          <p>{location}</p>
          <p>{subtitles.join(" · ")}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-lg font-bold">
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
