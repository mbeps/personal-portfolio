/**
 * Describes a navigation entry shown in the shared header so links, SEO metadata, and breadcrumbs stay in sync.
 * Paths mirror the folder names under `app`, which keeps navigation tied to the underlying route structure.
 */
export default interface NavigationItemInterface {
  /** Human readable label shown in the navbar and command palette. */
  label: string;
  /** Route path that matches the folder under `app`. */
  path: string;
  /** Short description for metadata and tooltips. */
  description: string;
  /** Marks top-level destinations that should appear in both desktop and mobile menus. */
  isMain?: boolean;
}
