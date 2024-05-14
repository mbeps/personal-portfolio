import ExperienceCategoriesEnum from "@/enums/Experience/ExperienceCategoriesEnum";
import MaterialInterface from "../Materials/MaterialInterface";
import ExperienceTypeEnum from "@/enums/Experience/ExperienceTypeEnum";
import CompanyDatabaseKeys from "@/database/Companies/CompanyDatabaseKeys";

/**
 * Interface representing a role related to work experience.
 * These roles are displayed on the website and show the roles held by the user.
 *
 * The fields are:
 * - `category`: the category of the role which is one of the categories defined in {@link ExperienceCategoriesEnum}
 * - `type`: the type of the experience which is one of the types defined in {@link ExperienceTypeEnum}
 * - `startDate`: the start date of the role
 * - `endDate`: the end date of the role
 * - `company`: the company where the role was held which is one of the companies defined in {@link CompanyDatabaseKeys}
 * - `responsibilities`: the responsibilities of the role
 *
 * Importantly, because this extends the `MaterialInterface`,
 * it inherits the field `skills` which is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 */
export default interface RoleInterface extends MaterialInterface {
  category: ExperienceCategoriesEnum;
  type: ExperienceTypeEnum;
  startDate: string;
  endDate: string | "Present";
  company: CompanyDatabaseKeys;
}
