import BlogCategoriesEnum from "@/enums/BlogCategoriesEnum";
import MaterialInterface from "./MaterialInterface";

export default interface BlogInterface extends MaterialInterface {
  subtitle: string;
  category: BlogCategoriesEnum;
}
