import BlogCategoriesEnum from "@/enums/Blog/BlogCategoriesEnum";
import MaterialInterface from "../Materials/MaterialInterface";

/**
 * Interface representing a blog's metadata and not the content.
 * These blogs are displayed on the website and show the articles written by the user.
 *
 * The fields are:
 * - `subtitle`: the subtitle of the blog explaining what the blog is about
 * - `category`: the category of the blog which is one of the categories defined in {@link BlogCategoriesEnum}
 *
 * Importantly, because this interface extends the `MaterialInterface`,
 * it inherits the field `skills` which is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 *
 * @requires {@link MaterialInterface} to inherit the fields of the material
 */
export default interface BlogInterface extends MaterialInterface {
  subtitle: string;
  category: BlogCategoriesEnum;
}
