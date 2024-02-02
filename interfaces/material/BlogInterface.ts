import MaterialInterface from "./MaterialInterface";

/**
 * Represents a blog.
 */
export default interface BlogInterface extends MaterialInterface {
  subtitle: string;
  category:
    | "Web Development"
    | "Software Engineering"
    | "Databases"
    | "DevOps"
    | "Machine Learning"
    | "Mathematics"
    | "Other";
}
