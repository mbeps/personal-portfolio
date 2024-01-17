import SkillInterface from "./skills/SkillInterface";

/**
 * Interface representing a project.
 */
export default interface ProjectInterface {
  name: string;
  slug: string;
  description: string;
  programmingLanguage: SkillInterface;
  technologySkills: SkillInterface[];
  extraTechnicalGeneralSkills?: SkillInterface[];
  softSkills: SkillInterface[];
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
  archived?: boolean;
}
