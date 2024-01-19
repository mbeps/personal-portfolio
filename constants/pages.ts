import NavigationItemInterface from "@/interfaces/NavigationItemInterface";

export const HOME: NavigationItemInterface = {
  label: "Home",
  path: "/",
};

export const PROJECTS: NavigationItemInterface = {
  label: "Projects",
  path: "/projects",
};

export const CREDENTIALS: NavigationItemInterface = {
  label: "Credentials",
  path: "/credentials",
};

export const BLOG: NavigationItemInterface = {
  label: "Blog",
  path: "/blogs",
};

const NAV_ITEMS: Array<NavigationItemInterface> = [
  HOME,
  PROJECTS,
  CREDENTIALS,
  BLOG,
];

export default NAV_ITEMS;
