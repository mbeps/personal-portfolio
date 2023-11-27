/**
 * Represents a blog.
 */
export interface BlogMetadata {
  title: string;
  subtitle: string;
  slug: string;
  category:
    | "Web Development"
    | "Software Engineering"
    | "Databases"
    | "DevOps"
    | "Machine Learning"
    | "Mathematics"
    | "Other";
}
