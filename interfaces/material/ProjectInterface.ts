import ProjectCategoriesEnum from "@/enums/ProjectCategoriesEnum";
import MaterialInterface from "./MaterialInterface";

/**
 * Interface representing a project's metadata.
 * These projects are displayed on the website and show the projects created by the user.
 *
 * Importantly, because the `ProjectInterface` extends the `MaterialInterface`, it inherits the field `skills` which is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 *
 * The thumbnail field is optional and not all projects have a thumbnail image.
 * These thumbnail images are stored in the `public/projects` directory and are referenced by the name of the key.
 *
 * The repositoryURL field is optional and points to the repository of the project where the user can view the code.
 * The deploymentURL field is optional and points to the deployment of the project where the user can interact with the project.
 *
 * @requires {@link MaterialInterface}
 */
export default interface ProjectInterface extends MaterialInterface {
  description: string;
  category: ProjectCategoriesEnum;
  repositoryURL?: string;
  deploymentURL?: string;
  thumbnailImage?: string;
}
