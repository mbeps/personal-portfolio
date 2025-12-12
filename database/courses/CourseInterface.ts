import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import MaterialInterface from "../materials/MaterialInterface";

/**
 * Extends the base material contract for university courses so modules, skills, and scores can be rolled up and displayed together.
 */
export default interface CourseInterface extends MaterialInterface {
  /** Overall grade for the course. */
  grade?: string;
  /** Numeric score if provided by the institution. */
  score?: number;
  /** Module keys that live under `public/education/{courseKey}/{moduleKey}` for assets and markdown. */
  modules: ModuleDatabaseKeys[];
  /** External certificate identifier when issued. */
  certificate?: string;
  /** Year the course started. */
  startYear: number;
  /** Year the course ended. */
  endYear: number;
  /** Name of the university delivering the course. */
  university: string;
  /** Path to the university logo stored alongside education assets. */
  logo: string;
}
