import { CertificateIssuersEnum } from "@/enums/CertificateIssuersEnum";
import MaterialInterface from "./MaterialInterface";

export enum CertificateCategories {
  University = "University",
  ProgrammingLanguages = "Programming Languages",
  AlgorithmsDataStructures = "Algorithms & Data Structures",
  WebDevelopment = "Web Development",
  SoftwareEngineering = "Software Engineering",
  DevOps = "DevOps",
  ArtificialIntelligence = "Artificial Intelligence",
  Mathematics = "Mathematics",
  Databases = "Databases",
  CloudComputing = "Cloud Computing",
  Management = "Management",
  Other = "Other",
}

export default interface CertificateInterface extends MaterialInterface {
  description?: string;
  issuer: CertificateIssuersEnum;
  certificateURL: string;
  category: CertificateCategories;
  certificateImage?: string;
  learningOutcomes?: string[];
}
