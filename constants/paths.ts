import CompanyDatabaseKeys from "@/database/companies/CompanyDatabaseKeys";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";

const PROJECTS_BASE = "/projects" as const;
const ROLES_BASE = "/roles" as const;
const BLOGS_BASE = "/blogs" as const;
const EDUCATION_BASE = "/education" as const;
const CERTIFICATES_BASE = "/certificates" as const;
const COMPANIES_BASE = "/companies" as const;

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
      `${COMPANIES_BASE}/${companyKey}/logo.png`,
  },
  PROJECTS: (projectKey: ProjectDatabaseKeys) => ({
    COVER: `${PROJECTS_BASE}/${projectKey}/cover.png`,
    FEATURES: `public${PROJECTS_BASE}/${projectKey}/features.md`,
    BLOG: `public${PROJECTS_BASE}/${projectKey}/blog.md`,
    BLOG_IMG: `${PROJECTS_BASE}/${projectKey}/img`,
    MEDIA: {
      NORMAL: `${PROJECTS_BASE}/${projectKey}/media`,
      PUBLIC: `public${PROJECTS_BASE}/${projectKey}/media`,
    },
  }),
  ROLES: (roleKey: RoleDatabaseKeys) => ({
    RESPONSIBILITIES: `public${ROLES_BASE}/${roleKey}/responsibilities.md`,
  }),
  CERTIFICATES: (certificateKey: CertificateDatabaseKeys) =>
    `${CERTIFICATES_BASE}/${certificateKey}.jpg`,
  EDUCATION: (courseKey: CourseDatabaseKeys) => ({
    LOGO: `${EDUCATION_BASE}/${courseKey}/logo.png`,
    CERTIFICATE: `${EDUCATION_BASE}/${courseKey}/certificate.jpg`,
  }),
  BLOGS: (blogKey: BlogDatabaseKeys) => ({
    BLOG: `public${BLOGS_BASE}/${blogKey}/blog.md`,
    IMG: `${BLOGS_BASE}/${blogKey}/img`,
  }),
} as const;
