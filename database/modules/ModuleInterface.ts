import ModuleYearGroupsEnum from "@/enums/module/ModuleYearGroupsEnum";
import MaterialInterface from "../materials/MaterialInterface";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";

/**
 * Extends the base material contract for university modules, linking skills and outcomes to the parent course and assets under `public/education/{courseKey}/{moduleKey}`.
 */
export default interface ModuleInterface extends MaterialInterface {
  /** Bullet points summarising what the module covered. */
  learningOutcomes: string[];
  /** Numeric score if available. */
  score?: number;
  /** Year grouping for the module. */
  category: ModuleYearGroupsEnum;
  /** Course key used to build routes and locate markdown. */
  parentCourse: CourseDatabaseKeys;
}
