import { Skill } from "./skills";

/**
 * Represents a blog.
 */
export interface BlogMetadata {
  title: string;
  subtitle: string;
  slug: string; // read from file system dynamically
  skills: Skill[];
  archived?: boolean;
  category:
    | "Web Development"
    | "Software Engineering"
    | "Databases"
    | "DevOps"
    | "Machine Learning"
    | "Mathematics"
    | "Other";
}
