import SkillInterface from "./skills/SkillInterface";

/**
 * Represents a blog.
 */
export default interface BlogInterface {
  title: string;
  subtitle: string;
  slug: string;
  skills: SkillInterface[];
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
