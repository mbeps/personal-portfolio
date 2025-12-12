import ExperienceCategoriesEnum from "@/enums/experience/ExperienceCategoriesEnum";
import MaterialInterface from "../materials/MaterialInterface";
import ExperienceTypeEnum from "@/enums/experience/ExperienceTypeEnum";
import CompanyDatabaseKeys from "@/database/companies/CompanyDatabaseKeys";
import ShortDate from "@/class/ShortDate";

/**
 * Describes a work experience entry extending the base material fields so roles can participate in filters and related material lists.
 */
export default interface RoleInterface extends MaterialInterface {
  /** Category used to cluster roles on the experience page (e.g., internships, leadership). */
  category: ExperienceCategoriesEnum;
  /** Employment type shown in filters and badges. */
  type: ExperienceTypeEnum;
  /** Start date using the month-precision helper shared across the timeline. */
  startDate: ShortDate;
  /** End date or current marker for the role. */
  endDate: ShortDate;
  /** Precomputed duration string for quick rendering on cards. */
  timeInRole?: string;
  /** Company key used to resolve metadata and logo assets under `public/companies`. */
  company: CompanyDatabaseKeys;
}
