export default interface Certificate {
  name: string;
  slug: string;
  description?: string;
  issuer:
    | "Coursera"
    | "Udemy"
    | "LinkedIn"
    | "National Association of State Boards of Accountancy (NASBA)"
    | "Project Management Institute (PMI)";
  credentialURL: string;
  skills: string[];
  tags?: string[];
  category:
    | "University"
    | "Web Development"
    | "Software Engineering"
    | "DevOps"
    | "Machine Learning"
    | "Mathematics"
    | "Databases"
    | "Cloud Computing"
    | "Other";
  archived?: boolean;
  certificateImage?: string;
}
