import Skill from "./skills";

export default interface Certificate {
  name: string;
  slug: string;
  description?: string;
  issuer:
    | "Coursera"
    | "Udemy"
    | "LinkedIn"
    | "NASBA"
    | "PMI"
    | "GitHub"
    | "Royal Holloway University";
  credentialURL: string;
  technicalSkills: Skill[];
  softSkills: Skill[];
  category:
    | "University"
    | "Programming Languages"
    | "Web Development"
    | "Software Engineering"
    | "DevOps"
    | "Machine Learning"
    | "Mathematics"
    | "Databases"
    | "Cloud Computing"
    | "Management"
    | "Other";
  archived?: boolean;
  certificateImage?: string;
  learningOutcomes?: string[];
}
