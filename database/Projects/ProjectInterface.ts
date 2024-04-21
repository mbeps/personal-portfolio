import ProjectCategoriesEnum from "@/enums/Project/ProjectCategoriesEnum";
import MaterialInterface from "../Materials/MaterialInterface";

/**
 * Interface representing a project's metadata.
 * These projects are displayed on the website and show the projects created by the user.
 *
 * The fields are:
 * - `description`: the description of the project explaining what the project is about
 * - `category`: the category of the project which is one of the categories defined in {@link ProjectCategoriesEnum}
 * - `repositoryURL`: the URL of the repository of the project where the code is stored
 * - `deploymentURL`: the URL of the deployment of the project where the user can interact with the project
 * - `thumbnailImage`: the image of the project
 *
 * Importantly, because the `ProjectInterface` extends the `MaterialInterface`, it inherits the field `skills` which is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 * @requires {@link MaterialInterface}
 */
export default interface ProjectInterface extends MaterialInterface {
  description: string;
  category: ProjectCategoriesEnum;
  repositoryURL?: string;
  deploymentURL?: string;
  thumbnailImage?: string;
}
