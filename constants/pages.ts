import NavigationItemInterface from "@/interfaces/NavigationItemInterface";

/**
 * Navigation item for the home page.
 * This is where the user can find information about me, my projects, and my contact information.
 */
export const HOME_PAGE: NavigationItemInterface = {
  label: "Home",
  path: "/",
  description: `
    The homepage for my personal website. 
    It contains information about me, my projects and my contact information.
    I am a software developer and a computer science student graduate from Royal Holloway, University of London.
    Graduate | Computer Science | Software Developer | Full Stack Developer | Software Engineer
  `,
};

/**
 * Navigation item for the projects page.
 * This is where the user can view my projects and filter them according to their preferences.
 */
export const PROJECTS_PAGE: NavigationItemInterface = {
  label: "Projects",
  path: "/projects",
  description: `
    Discover my portfolio of projects, both current and archived. 
    Use filters to narrow down projects by category, programming language, and technologies. 
    Archived projects are hidden by default.
  `,
};

/**
 * Navigation item for the certificates page.
 * This is where the user can view my certificates and filter them according to their preferences.
 */
export const CERTIFICATES_PAGE: NavigationItemInterface = {
  label: "Certificates",
  path: "/certificates",
  description: `
    Explore my collection of certificates and qualifications. 
    Use filters to refine your search by issuer and category. 
    Archived certificates are initially hidden.
  `,
};

/**
 * Navigation item for the blog page.
 * This is where the user can view my blogs and filter them according to their preferences.
 */
export const BLOG_PAGE: NavigationItemInterface = {
  label: "Blog",
  path: "/blogs",
  description: `
    Explore my collection of blogs on various topics. 
    Use the search bar to find specific blogs or filter them by category.
  `,
};

/**
 * Navigation item for the education page.
 * This is where the user can view my education history and qualifications.
 * For each qualification, the user can view the modules that I have studied.
 */
export const EDUCATION_PAGE: NavigationItemInterface = {
  label: "Education",
  path: "/education",
  description: `
    Explore my education history and qualifications and view the modules I have studied.
  `,
};

/**
 * Navigation item for the education page.
 * This is where the user can view my education history and qualifications.
 * For each qualification, the user can view the modules that I have studied.
 */
export const EXPERIENCE_PAGE: NavigationItemInterface = {
  label: "Experience",
  path: "/experience",
  description: `
    Dive into my professional journey. 
    Discover the roles I've embraced, projects I've spearheaded, and the impact I've made.
  `,
};
/**
 * Navigation item for the skills page.
 * This is where the user can view my skills and filter them according to their preferences.
 */
export const SKILL_PAGE: NavigationItemInterface = {
  label: "Skills",
  path: "/skills",
  description: `
    Explore my collection of skills on various topics. 
    You will be able to navigate to projects, certificates and blogs directly from here.
  `,
};

/**
 * List of navigation items that are displayed in the navbar.
 * If the constant is not added here, it will not be displayed in the navbar.
 * Users can navigate to these pages by clicking on the respective items.
 * The description may be displayed on every page and it is used for SEO purposes.
 * The order of the items is the order that is used when displaying the items on the website.
 */
const NAV_ITEMS: Array<NavigationItemInterface> = [
  PROJECTS_PAGE,
  EXPERIENCE_PAGE,
  EDUCATION_PAGE,
  CERTIFICATES_PAGE,
  BLOG_PAGE,
];

export default NAV_ITEMS;
