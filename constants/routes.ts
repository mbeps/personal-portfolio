import NavigationItemInterface from "@/interfaces/NavigationItemInterface";
import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

const SKILLS_BASE = "/skills" as const;
const PROJECTS_BASE = "/projects" as const;
const EXPERIENCE_BASE = "/experience" as const;
const EDUCATION_BASE = "/education" as const;
const CERTIFICATES_BASE = "/certificates" as const;
const BLOGS_BASE = "/blogs" as const;

/**
 * Centralised route registry for all pages and dynamic subroutes.
 * Static entries carry path, name, description, and optional isMain.
 * Dynamic helper functions are co-located so every URL is built from
 * a single source of truth.
 *
 * Use ROUTES instead of hardcoding path strings to prevent typos, enable
 * IDE autocomplete, and make refactoring a single-file change.
 * Dynamic routes expose helper functions that return fully-typed path strings.
 *
 * @example
 * import { ROUTES } from "@/constants/routes";
 * const projectPath = ROUTES.PROJECTS.detail(ProjectDatabaseKeys.MyProject);
 * const skillsPath = ROUTES.SKILLS.path; // "/skills"
 */
export const ROUTES = {
  HOME: {
    path: "/" as const,
    name: "Home" as const,
    description:
      `Profressional Software Engineer with Master's degree In Artificial Intelligence with wide range of projects.` as const,
  },
  ABOUT: {
    path: "/about" as const,
    name: "About" as const,
    description: `
    Comprehensive summary about me, my journey, and key traits. 
  ` as const,
  },
  SKILLS: {
    path: SKILLS_BASE,
    name: "Skills" as const,
    description:
      `Multitude of my technical skills acquired across projects, experience, and education.` as const,
    detail: (key: SkillDatabaseKeys): `/skills/${SkillDatabaseKeys}` =>
      `${SKILLS_BASE}/${key}`,
  },
  PROJECTS: {
    path: PROJECTS_BASE,
    name: "Projects" as const,
    description:
      `Wide catalogue of projects showcasing my skills and expertise in different technologies and domains.` as const,
    isMain: true as const,
    detail: (key: ProjectDatabaseKeys): `/projects/${ProjectDatabaseKeys}` =>
      `${PROJECTS_BASE}/${key}`,
    report: (
      key: ProjectDatabaseKeys,
    ): `/projects/${ProjectDatabaseKeys}/report` =>
      `${PROJECTS_BASE}/${key}/report`,
  },
  EXPERIENCE: {
    path: EXPERIENCE_BASE,
    name: "Experience" as const,
    description: `
    Overview of my professional experience, highlighting roles, responsibilities, and achievements across different organisations.
  ` as const,
    isMain: true as const,
    detail: (key: RoleDatabaseKeys): `/experience/${RoleDatabaseKeys}` =>
      `${EXPERIENCE_BASE}/${key}`,
  },
  EDUCATION: {
    path: EDUCATION_BASE,
    name: "Education" as const,
    description: `
    Selection of my academic qualifications, detailing institutions attended, degrees earned, modules studied and completed projects.
  ` as const,
    isMain: true as const,
    detail: (key: CourseDatabaseKeys): `/education/${CourseDatabaseKeys}` =>
      `${EDUCATION_BASE}/${key}`,
    module: (
      courseKey: CourseDatabaseKeys,
      moduleKey: ModuleDatabaseKeys,
    ): `/education/${CourseDatabaseKeys}/${ModuleDatabaseKeys}` =>
      `${EDUCATION_BASE}/${courseKey}/${moduleKey}`,
  },
  CERTIFICATES: {
    path: CERTIFICATES_BASE,
    name: "Certificates" as const,
    description: `
    Set of certificates demostrating my skills and knowledge in various domains.
  ` as const,
    isMain: true as const,
    detail: (
      key: CertificateDatabaseKeys,
    ): `/certificates/${CertificateDatabaseKeys}` =>
      `${CERTIFICATES_BASE}/${key}`,
  },
  BLOGS: {
    path: BLOGS_BASE,
    name: "Blog" as const,
    description: `
    Collection of technical blogs covering various topics highlighting my expertise and insights in theoretical and practical aspects.
  ` as const,
    detail: (key: BlogDatabaseKeys): `/blogs/${BlogDatabaseKeys}` =>
      `${BLOGS_BASE}/${key}`,
  },
  CV: {
    path: "/cv" as const,
    name: "General CV" as const,
    description: `
    A general CV generated dynamically from all the information available on this website.
  ` as const,
  },
  MORE: {
    path: "/more" as const,
    name: "More" as const,
    description: `
    Page where you can navigate to all the pages on the website.
    This will also show other pages that are not displayed in the navbar.
  ` as const,
    isMain: true as const,
  },
};

/**
 * Ordered navigation items derived from ROUTES.
 * Exported as a named export (replaces the old default export from `constants/pages`).
 * Shape matches `NavigationItemInterface` (uses `label` = ROUTES entry `name`)
 * so all Navbar and command-palette consumers continue to work without changes.
 */
export const NAV_ITEMS: Array<NavigationItemInterface> = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.SKILLS,
  ROUTES.PROJECTS,
  ROUTES.EXPERIENCE,
  ROUTES.EDUCATION,
  ROUTES.CERTIFICATES,
  ROUTES.BLOGS,
  ROUTES.CV,
  ROUTES.MORE,
].map((entry) => ({
  label: entry.name,
  path: entry.path,
  description: entry.description,
  ...("isMain" in entry && entry.isMain ? { isMain: entry.isMain } : {}),
}));
