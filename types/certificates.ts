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
    | "Royal Holloway University";
  credentialURL: string;
  skills: string[];
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
