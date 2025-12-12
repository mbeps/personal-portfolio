import ProjectCategoriesEnum from "@/enums/project/ProjectCategoriesEnum";
import MaterialInterface from "../materials/MaterialInterface";
import ProjectTypeEnum from "@/enums/project/ProjectTypeEnum";

/**
 * Extends the base material contract for projects, tying metadata to assets under `public/projects/{key}` and links shown across the site.
 */
export default interface ProjectInterface extends MaterialInterface {
  /** Summary used in cards and SEO metadata. */
  description: string;
  /** Editorial bucket such as a product category. */
  category: ProjectCategoriesEnum;
  /** Link to the code repository. */
  repositoryURL?: string;
  /** Link to the deployed experience. */
  deploymentURL?: string;
  /** Filename for the cover image stored alongside the project’s route folder. */
  thumbnailImage?: string;
  /** Type label displayed in filters and badges. */
  type: ProjectTypeEnum | string;
}
