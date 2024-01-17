import SkillInterface from "./skills/SkillInterface";

export default interface CertificateInterface {
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
  technicalSkills: SkillInterface[];
  softSkills: SkillInterface[];
  category:
    | "University"
    | "Programming Languages"
    | "Algorithms & Data Structures"
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
