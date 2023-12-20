import Skill from "./skills";

/**
 * Represents a blog.
 */
export interface Blog {
  title: string;
  subtitle: string;
  slug: string;
  technicalSkills: Skill[];
  softSkills: Skill[];
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
