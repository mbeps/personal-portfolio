import { Language } from "./languages";
import { Skill } from "./skills";

/**
 * Interface representing a project.
 */
export default interface Project {
  name: string;
  slug: string;
  description: string;
  imageURL?: string;
  repoURL?: string;
  siteURL?: string;
  programmingLanguage: Language;
  technologies?: Skill[];
  type:
    | "Full-Stack Web Dev"
    | "Back-End Web Dev"
    | "Machine Learning"
    | "Java Assignments"
    | "Game Dev"
    | "Other";
  tags?: string[];
  archived?: boolean;
}
