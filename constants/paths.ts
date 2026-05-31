import CompanyDatabaseKeys from "@/database/companies/CompanyDatabaseKeys";
import { PROJECTS_PAGE } from "./pages";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";

/**
 * Global path registry for static assets and dynamic routes.
 * Centralizing these prevents hardcoded string drift and simplifies refactoring.
 */
export const PATHS = {
  PROFILE: "/profile.png",
  /**
   * Filesystem paths under the `public/` directory.
   * Used by server components and file-system loaders.
   */
  ABOUT: {
    SHORT: "public/about/short.md",
    LONG: "public/about/long.md",
  },
  COMPANY: {
    LOGO: (companyKey: CompanyDatabaseKeys) =>
      `/companies/${companyKey}/logo.png`,
  },
  PROJECTS: (projectKey: ProjectDatabaseKeys) => ({
    COVER: `/projects/${projectKey}/cover.png`,
    FEATURES: `public/projects/${projectKey}/features.md`,
    BLOG: `public/projects/${projectKey}/blog.md`,
    BLOG_IMG: `projects/${projectKey}/img`,
    MEDIA: {
      NORMAL: `/projects/${projectKey}/media`,
      PUBLIC: `public/projects/${projectKey}/media`,
    },
  }),
  ROLES: (roleKey: RoleDatabaseKeys) => ({
    RESPONSIBILITIES: `public/roles/${roleKey}/responsabilities.md`,
  }),
  CERTIFICATES: (certificateKey: CertificateDatabaseKeys) =>
    `/certificates/${certificateKey}.jpg`,
  EDUCATION: (courseKey: CourseDatabaseKeys) => ({
    LOGO: `/education/${courseKey}/logo.png`,
    CERTIFICATE: `/education/${courseKey}/certificate.jpg`,
  }),
  BLOGS: (blogKey: BlogDatabaseKeys) => ({
    BLOG: `public/blogs/${blogKey}/blog.md`,
    IMG: `blogs/${blogKey}/img`,
  }),
} as const;
