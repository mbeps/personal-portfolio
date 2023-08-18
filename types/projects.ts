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
  programmingLanguage: string;
  technologies?: string[];
  type:
    | "Full-Stack Web Dev"
    | "Back-End Web Dev"
    | "Machine Learning"
    | "Java Assignments"
    | "Game Dev"
    | "Other";
  tags?: string[];
}
