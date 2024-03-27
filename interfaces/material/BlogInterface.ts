import BlogCategoriesEnum from "@/enums/BlogCategoriesEnum";
import MaterialInterface from "./MaterialInterface";

/**
 * Interface representing a blog's metadata and not the content.
 * These blogs are displayed on the website and show the articles written by the user.
 * Importantly, because the `BlogInterface` extends the `MaterialInterface`, it inherits the field `skills` which is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 *
 * @requires {@link MaterialInterface}
 */
export default interface BlogInterface extends MaterialInterface {
  subtitle: string;
  category: BlogCategoriesEnum;
}
