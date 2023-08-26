import { NavItem } from "@/types/pages";

/**
 * Buttons to be displayed in the navbar.
 */
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "Projects",
    page: "/projects",
  },
  {
    label: "Blog",
    page: "/blogs",
  },
];

export { NAV_ITEMS };
