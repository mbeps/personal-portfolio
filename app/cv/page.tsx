import React from "react";
import { Metadata } from "next";
import developerName from "@/constants/developerName";
import { CV_PAGE } from "@/constants/pages";
import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import roleDatabaseMap from "@/database/roles/RoleDatabaseMap";
import { roleDatabaseKeys } from "@/database/roles/RoleDatabaseMap";
import courseDatabaseMap from "@/database/courses/CourseDatabaseMap";
import projectDatabaseMap from "@/database/projects/ProjectDatabaseMap";
import skillDatabaseMap, {
  skillDatabaseKeys,
} from "@/database/skills/SkillDatabaseMap";
import certificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import groupSkills, { GroupByOptions } from "@/lib/skills/group/groupSkills";
import ExperienceTypeEnum from "@/enums/experience/ExperienceTypeEnum";
import CvPageContent from "./_components/CvPageContent";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";

export const metadata: Metadata = {
  title: `${developerName} - CV`,
  description: CV_PAGE.description,
  category: "CV",
  creator: developerName,
  keywords: ["CV", "Resume", "Curriculum Vitae", developerName],
};

export default function CvPage() {
  // Fetch About Content
  const aboutContent = getMarkdownFromFileSystem(
    "public/about/short.md"
  )?.content;

  // Fetch Skills
  const skillGroups = groupSkills(
    GroupByOptions.Category,
    skillDatabaseKeys,
    skillDatabaseMap
  );

  // Fetch Experience
  const workExperience = [];
  const volunteeringExperience = [];

  for (const key of roleDatabaseKeys) {
    const role = roleDatabaseMap[key];
    const responsibilities = getMarkdownFromFileSystem(
      `public/roles/${key}/responsabilities.md`
    )?.content;

    const item = { role, responsibilities };

    if (role.type === ExperienceTypeEnum.Volunteering) {
      volunteeringExperience.push(item);
    } else {
      workExperience.push(item);
    }
  }

  // Fetch Education
  const courseDatabaseKeys = Object.keys(
    courseDatabaseMap
  ) as CourseDatabaseKeys[];
  const education = courseDatabaseKeys.map((key) => courseDatabaseMap[key]);

  // Fetch Projects
  const projectDatabaseKeys = Object.keys(
    projectDatabaseMap
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
