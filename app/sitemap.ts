import {
  ABOUT_PAGE,
  BLOG_PAGE,
  CERTIFICATES_PAGE,
  EDUCATION_PAGE,
  EXPERIENCE_PAGE,
  PROJECTS_PAGE,
  SKILL_PAGE,
} from "@/constants/pages";
import projectDatabaseMap from "@/database/Projects/ProjectDatabaseMap";
import rolesDatabase from "@/database/Roles/RoleDatabaseMap";
import courseDatabaseMap from "@/database/Courses/CourseDatabaseMap";
import moduleDatabaseMap from "@/database/Modules/ModuleDatabaseMap";
import certificateDatabaseMap from "@/database/Certificates/CertificateDatabaseMap";
import blogsDatabaseMap from "@/database/Blogs/BlogsDatabaseMap";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.maruf-bepary.com";

  // Projects
  const projectUrls: MetadataRoute.Sitemap = Object.keys(
    projectDatabaseMap
  ).map((projectKey: string) => ({
    url: `${baseUrl}${PROJECTS_PAGE.path}/${projectKey}`,
    priority: 0.4,
    lastModified: new Date(),
  }));

  // Work Experience
  const roleUrls: MetadataRoute.Sitemap = Object.keys(rolesDatabase).map(
    (roleKey: string) => ({
      url: `${baseUrl}${EXPERIENCE_PAGE.path}/${roleKey}`,
      priority: 0.4,
      lastModified: new Date(),
    })
  );

  // Courses
  const courseUrls: MetadataRoute.Sitemap = Object.keys(courseDatabaseMap).map(
    (courseKey: string) => ({
      url: `${baseUrl}${EDUCATION_PAGE.path}/${courseKey}`,
      priority: 0.4,
      lastModified: new Date(),
    })
  );

  // Modules (nested under courses)
  const moduleUrls: MetadataRoute.Sitemap = Object.entries(
    moduleDatabaseMap
  ).map(([moduleKey, moduleData]) => ({
    url: `${baseUrl}${EDUCATION_PAGE.path}/${moduleData.parentCourse}/${moduleKey}`,
    priority: 0.3,
    lastModified: new Date(),
  }));

  // Certificates
  const certificateUrls: MetadataRoute.Sitemap = Object.keys(
    certificateDatabaseMap
  ).map((certificateKey: string) => ({
    url: `${baseUrl}${CERTIFICATES_PAGE.path}/${certificateKey}`,
    priority: 0.2,
    lastModified: new Date(),
  }));

  // Blogs
  const blogUrls: MetadataRoute.Sitemap = Object.keys(blogsDatabaseMap).map(
    (blogKey: string) => ({
      url: `${baseUrl}${BLOG_PAGE.path}/${blogKey}`,
      priority: 0.1,
      lastModified: new Date(),
    })
  );

  // Skills
  const skillUrls: MetadataRoute.Sitemap = Object.keys(skillDatabaseMap).map(
    (skillKey: string) => ({
      url: `${baseUrl}${SKILL_PAGE.path}/${skillKey}`,
      priority: 0.1,
      lastModified: new Date(),
    })
  );

  return [
    {
      url: baseUrl,
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}${PROJECTS_PAGE.path}`,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}${EXPERIENCE_PAGE.path}`,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}${ABOUT_PAGE.path}`,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}${EDUCATION_PAGE.path}`,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}${CERTIFICATES_PAGE.path}`,
      priority: 0.6,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}${SKILL_PAGE.path}`,
      priority: 0.5,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}${BLOG_PAGE.path}`,
      priority: 0.5,
      lastModified: new Date(),
    },
    ...projectUrls,
    ...roleUrls,
    ...courseUrls,
    ...moduleUrls,
    ...certificateUrls,
    ...blogUrls,
    ...skillUrls,
  ];
}
