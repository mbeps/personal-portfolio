import MaterialInterface from "./MaterialInterface";

export enum BlogCategories {
  WebDevelopment = "Web Development",
  SoftwareEngineering = "Software Engineering",
  Databases = "Databases",
  DevOps = "DevOps",
  ArtificialIntelligence = "Artificial Intelligence",
  Mathematics = "Mathematics",
  Other = "Other"
}

export default interface BlogInterface extends MaterialInterface {
  subtitle: string;
  category: BlogCategories;
}
