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
    | "Web Dev"
    | "Extra Web Dev"
    | "Backend Web Dev"
    | "Machine Learning"
    | "Java Assignments"
    | "Other";
  tags?: string[];
}
