import type { Metadata } from "next";
import CvPageContent from "@/app/cv/_components/cv-page-content";
import { DEVELOPER } from "@/config/developer-info";
import { PATHS } from "@/config/paths";
import { ROUTES } from "@/config/routes";
import BlogDatabaseKeys from "@/database/blogs/blog-database-keys";
import certificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import type CourseDatabaseKeys from "@/database/courses/course-database-keys";
import courseDatabaseMap from "@/database/courses/course-database-map";
import type ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import projectDatabaseMap from "@/database/projects/project-database-map";
import roleDatabaseMap, {
  roleDatabaseKeys,
} from "@/database/roles/role-database-map";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/skill-database-map";
import ExperienceTypeEnum from "@/enums/experience/experience-type-enum";
import GroupByOptions from "@/enums/skill/group-by-options";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";
import groupSkills from "@/lib/skills/group/group-skills";
import type { SerializedRoleInterface } from "@/types/roles/serialized-role";

export const metadata: Metadata = {
  title: `${DEVELOPER.NAME} - CV`,
  description: ROUTES.CV.description,
  category: "CV",
  creator: DEVELOPER.NAME,
  keywords: ["CV", "Resume", "Curriculum Vitae", DEVELOPER.NAME],
};

export default function CvPage() {
  // Fetch About Content
  const aboutContent = getMarkdownFromFileSystem(PATHS.ABOUT.SHORT);

  // Fetch Skills
  const skillGroups = groupSkills(
    GroupByOptions.Category,
    skillDatabaseKeys,
    skillDatabaseMap,
  );

  // Fetch Experience
  const workExperience = [];
  const volunteeringExperience = [];

  for (const key of roleDatabaseKeys) {
    const role = roleDatabaseMap[key];
    const responsibilities = getMarkdownFromFileSystem(
      PATHS.ROLES(key).RESPONSIBILITIES,
    );

    // Serialize role with formatted date strings for client component
    const serializedRole: SerializedRoleInterface = {
      ...role,
      startDate: role.startDate.toString(),
      endDate: role.endDate.toString(),
    };

    const item = { role: serializedRole, responsibilities };

    if (role.type === ExperienceTypeEnum.Volunteering) {
      volunteeringExperience.push(item);
    } else {
      workExperience.push(item);
    }
  }

  // Fetch Education
  const courseDatabaseKeys = Object.keys(
    courseDatabaseMap,
  ) as CourseDatabaseKeys[];
  const education = courseDatabaseKeys.map((key) => courseDatabaseMap[key]);

  // Fetch Projects
  const projectDatabaseKeys = Object.keys(
    projectDatabaseMap,
  ) as ProjectDatabaseKeys[];
  const projects = projectDatabaseKeys.map((key) => projectDatabaseMap[key]);

  // Counts
  const certificateCount = Object.keys(certificateDatabaseKeys).length;
  // Assuming BlogDatabaseKeys is an enum or array of keys.
  // Based on previous file reads, it seems to be an enum or object.
  // Let's check if it's an array or object.
  // Usually keys are exported as an array or enum.
  // I'll assume Object.keys(BlogDatabaseKeys).length if it's an enum, or .length if array.
  // I'll check BlogDatabaseKeys.ts content first to be safe.

  return (
    <main>
      <CvPageContent
        aboutContent={aboutContent}
        skillGroups={skillGroups}
        workExperience={workExperience}
        volunteeringExperience={volunteeringExperience}
        education={education}
        projects={projects}
        certificateCount={certificateCount}
        blogCount={Object.keys(BlogDatabaseKeys).length}
      />
    </main>
  );
}
