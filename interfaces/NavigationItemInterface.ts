/**
 * Interface representing a link in the navigation bar.
 * These store the data requires to display and navigate to the main pages in the website.
 * These pages are displayed on the navigation bar.
 */
export default interface NavigationItemInterface {
  label: string;
  path: string;
  description: string;
}
