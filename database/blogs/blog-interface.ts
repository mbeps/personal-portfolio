import type BlogCategoriesEnum from "@/enums/blog/blog-categories-enum";
import type MaterialInterface from "../materials/material-interface";

/**
 * Extends the base material contract for blogs so metadata stays aligned with markdown stored under `public/blogs/{key}`.
 */
export default interface BlogInterface extends MaterialInterface {
  /** Short description displayed alongside the title. */
  subtitle: string;
  /** Category used for filtering and archive grouping. */
  category: BlogCategoriesEnum;
}
