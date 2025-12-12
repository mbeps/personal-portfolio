import BlogCategoriesEnum from "@/enums/blog/BlogCategoriesEnum";
import MaterialInterface from "../materials/MaterialInterface";

/**
 * Extends the base material contract for blogs so metadata stays aligned with markdown stored under `public/blogs/{key}`.
 */
export default interface BlogInterface extends MaterialInterface {
  /** Short description displayed alongside the title. */
  subtitle: string;
  /** Category used for filtering and archive grouping. */
  category: BlogCategoriesEnum;
}
