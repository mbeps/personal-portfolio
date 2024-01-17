import NavigationItemInterface from "@/interfaces/NavigationItemInterface";

/**
 * Buttons to be displayed in the navbar.
 */
const NAV_ITEMS: Array<NavigationItemInterface> = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "Projects",
    page: "/projects",
  },
  {
    label: "Credentials",
    page: "/credentials",
  },
  {
    label: "Blog",
    page: "/blogs",
  },
];

export { NAV_ITEMS };
