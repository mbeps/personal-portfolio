import MaterialInterface from "./MaterialInterface";

export enum ProjectCategories {
  FullStackWebDevelopment = "Full-Stack Web Development",
  BackEndWebDevelopment = "Back-End Web Development",
  MachineLearning = "Machine Learning",
  JavaAssignments = "Java Assignments",
  GameDevelopment = "Game Development",
  Other = "Other"
}

export default interface ProjectInterface extends MaterialInterface {
  description: string;
  category: ProjectCategories;
  repositoryURL?: string;
  deploymentURL?: string;
  thumbnailImage?: string; // added dynamically from file system
}
