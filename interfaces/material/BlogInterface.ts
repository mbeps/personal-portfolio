import MaterialInterface from "./MaterialInterface";
import SkillInterface from "../skills/SkillInterface";

/**
 * Represents a blog.
 */
export default interface BlogInterface extends MaterialInterface {
  subtitle: string;
  category:
    | "Web Development"
    | "Software Engineering"
    | "Databases"
    | "DevOps"
    | "Machine Learning"
    | "Mathematics"
    | "Other";
}
