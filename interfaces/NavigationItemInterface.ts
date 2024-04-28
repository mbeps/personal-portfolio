/**
 * Interface representing a link in the navigation bar.
 * These store the data requires to display and navigate to the main pages in the website.
 * These pages are displayed on the navigation bar.
 *
 * The fields are:
 * - `label`: the label of the navigation item
 * - `path`: the URL path of the navigation item the user will be redirected to
 * - `description`: the description of the page the user will be redirected to for SEO purposes
 * - `isMain`: whether the page is a main page in the website
 */
export default interface NavigationItemInterface {
  label: string;
  path: string;
  description: string;
  isMain?: boolean;
}
