import MaterialInterface from "./MaterialInterface";

export default interface CertificateInterface extends MaterialInterface {
  description?: string;
  issuer:
    | "Coursera"
    | "Udemy"
    | "LinkedIn"
    | "NASBA"
    | "PMI"
    | "GitHub"
    | "Royal Holloway University"
    | "Symphony Solutions"
    | "Amigoscode";
  certificateURL: string;
  category:
    | "University"
    | "Programming Languages"
    | "Algorithms & Data Structures"
    | "Web Development"
    | "Software Engineering"
    | "DevOps"
    | "Artificial Intelligence"
    | "Mathematics"
    | "Databases"
    | "Cloud Computing"
    | "Management"
    | "Other";
  certificateImage?: string;
  learningOutcomes?: string[];
}
