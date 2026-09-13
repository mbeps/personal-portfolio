/**
 * Represents a single breadcrumb item with display name and optional destination URL.
 */
export interface BreadcrumbPair {
  name: string;
  path?: string;
}

export default BreadcrumbPair;
