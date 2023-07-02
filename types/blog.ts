/**
 * Represents a blog.
 */
export interface BlogMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  display?: "true" | "false";
}
