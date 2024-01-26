import MaterialInterface from "./MaterialInterface";

export default interface ProjectInterface extends MaterialInterface {
  description: string;
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
