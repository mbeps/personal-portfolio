import MaterialInterface from "./MaterialInterface";
import SkillInterface from "../skills/SkillInterface";

export default interface ProjectInterface extends MaterialInterface {
  description: string;
  programmingLanguage: SkillInterface;
  category:
    | "Full-Stack Web Development"
    | "Back-End Web Development"
    | "Machine Learning"
    | "Java Assignments"
    | "Game Development"
    | "Other";
  repositoryURL?: string;
  deploymentURL?: string;
  thumbnailImage?: string; // added dynamically from file system
  hasImage?: boolean; // used for adding image path to imageURL
}
