import { ProjectCategoriesEnum } from "@/enums/ProjectCategoriesEnum";
import MaterialInterface from "./MaterialInterface";

export default interface ProjectInterface extends MaterialInterface {
  description: string;
  category: ProjectCategoriesEnum;
  repositoryURL?: string;
  deploymentURL?: string;
  thumbnailImage?: string; // added dynamically from file system
}
