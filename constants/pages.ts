import NavigationItemInterface from "@/interfaces/NavigationItemInterface";

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

export const PROJECTS_PAGE: NavigationItemInterface = {
  label: "Projects",
  path: "/projects",
  description: `
    Discover my portfolio of projects, both current and archived. 
    Use filters to narrow down projects by category, programming language, and technologies. 
    Archived projects are hidden by default.
  `,
};

export const CERTIFICATES_PAGE: NavigationItemInterface = {
  label: "Certificates",
  path: "/certificates",
  description: `
    Explore my collection of certificates and qualifications. 
    Use filters to refine your search by issuer and category. 
    Archived certificates are initially hidden.
  `,
};

export const BLOG_PAGE: NavigationItemInterface = {
  label: "Blog",
  path: "/blogs",
  description: `
    Explore my collection of blogs on various topics. 
    Use the search bar to find specific blogs or filter them by category.
  `,
};

const NAV_ITEMS: Array<NavigationItemInterface> = [
  HOME_PAGE,
  PROJECTS_PAGE,
  CERTIFICATES_PAGE,
  BLOG_PAGE,
];

export default NAV_ITEMS;
