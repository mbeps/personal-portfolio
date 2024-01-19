import NavigationItemInterface from "@/interfaces/NavigationItemInterface";

export const HOME: NavigationItemInterface = {
  label: "Home",
  path: "/",
};

export const PROJECTS: NavigationItemInterface = {
  label: "Projects",
  path: "/projects",
};

export const CERTIFICATES: NavigationItemInterface = {
  label: "Certificates",
  path: "/certificates",
};

export const BLOG: NavigationItemInterface = {
  label: "Blog",
  path: "/blogs",
};

const NAV_ITEMS: Array<NavigationItemInterface> = [
  HOME,
  PROJECTS,
  CERTIFICATES,
  BLOG,
];

export default NAV_ITEMS;
