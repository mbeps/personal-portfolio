import NavigationItemInterface from "@/interfaces/NavigationItemInterface";

/**
 * Navigation item for the home page.
 * This is where the user can find information about me, my projects, and my contact information.
 */
export const HOME_PAGE: NavigationItemInterface = {
  label: "Home",
  path: "/",
  description: `Profressional Software Engineer with Master's degree In Artificial Intelligence with wide range of projects.`,
};

/**
 * Navigation item for the projects page.
 * This is where the user can view my projects and filter them according to their preferences.
 */
export const PROJECTS_PAGE: NavigationItemInterface = {
  label: "Projects",
  path: "/projects",
  description: `
    Wide catalogue of projects showcasing my skills and expertise in different technologies and domains.
  `,
  isMain: true,
};

/**
 * Navigation item for the certificates page.
 * This is where the user can view my certificates and filter them according to their preferences.
 */
export const CERTIFICATES_PAGE: NavigationItemInterface = {
  label: "Certificates",
  path: "/certificates",
  description: `
    Set of certificates demostrating my skills and knowledge in various domains.
  `,
  isMain: true,
};

/**
 * Navigation item for the blog page.
 * This is where the user can view my blogs and filter them according to their preferences.
 */
export const BLOG_PAGE: NavigationItemInterface = {
  label: "Blog",
  path: "/blogs",
  description: `
    Collection of technical blogs covering various topics highlighting my expertise and insights in theoretical and practical aspects.
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
    Selection of my academic qualifications, detailing institutions attended, degrees earned, modules studied and completed projects.
  `,
  isMain: true,
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
    Overview of my professional experience, highlighting roles, responsibilities, and achievements across different organisations.
  `,
  isMain: true,
};

/**
 * Navigation item for the skills page.
 * This is where the user can view my skills and filter them according to their preferences.
 */
export const SKILL_PAGE: NavigationItemInterface = {
  label: "Skills",
  path: "/skills",
  description: `
    Multitude of my technical skills acquired across projects, experience, and education.
  `,
};

/**
 * Navigation item for the about page.
 * This is where the user can read a summary about me, my journey, and my aspirations.
 */
export const ABOUT_PAGE: NavigationItemInterface = {
  label: "About",
  path: "/about",
  description: `
    Comprehensive summary about me, my journey, and key traits. 
  `,
};

/**
 * Navigation item for the more page.
 * This is where the user can navigate to all the pages on the website.
 */
export const MORE_PAGE: NavigationItemInterface = {
  label: "More",
  path: "/more",
  description: `
    Page where you can navigate to all the pages on the website.
    This will also show other pages that are not displayed in the navbar.
  `,
  isMain: true,
};

/**
 * List of navigation items that are displayed in the navbar.
 * If the constant is not added here, it will not be displayed in the navbar.
 * If the `isMain` property is set to true, the item will be displayed in the navbar.
 * Users can navigate to these pages by clicking on the respective items.
 * The description may be displayed on every page and it is used for SEO purposes.
 * The order of the items is the order that is used when displaying the items on the website.
 */
const NAV_ITEMS: Array<NavigationItemInterface> = [
  HOME_PAGE,

  ABOUT_PAGE,
  SKILL_PAGE,

  PROJECTS_PAGE,
  EXPERIENCE_PAGE,
  EDUCATION_PAGE,
  CERTIFICATES_PAGE,
  BLOG_PAGE,
  MORE_PAGE,
];

export default NAV_ITEMS;
