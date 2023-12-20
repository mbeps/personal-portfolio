import { Skill } from "./skills";

/**
 * Interface representing a project.
 */
export default interface Project {
  name: string;
  slug: string;
  description: string;
  programmingLanguage: Skill;
  technologySkills: Skill[];
  extraTechnicalGeneralSkills?: Skill[];
  softSkills: Skill[];
  type:
    | "Full-Stack Web Development"
    | "Back-End Web Development"
    | "Machine Learning"
    | "Java Assignments"
    | "Game Development"
    | "Other";
  repoURL?: string;
  siteURL?: string;
  imageURL?: string; // added dynamically from file system
  hasImage?: boolean; // used for adding image path to imageURL
  archived?: boolean;
}
