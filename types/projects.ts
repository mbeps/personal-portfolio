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
  articleURL?: string;
  programmingLanguage: string;
  technologies?: string[];
  type:
    | "Full-Stack Web Development"
    | "Back-End Web Development"
    | "Machine Learning"
    | "Java Assignments"
    | "Game Development"
    | "Other";
  tags?: string[];
}
