import type CourseDatabaseKeys from "@/database/courses/course-database-keys";
import type ModuleYearGroupsEnum from "@/enums/module/module-year-groups-enum";
import type MaterialInterface from "../materials/material-interface";

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
