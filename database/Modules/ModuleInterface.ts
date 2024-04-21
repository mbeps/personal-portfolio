import ModuleYearGroupsEnum from "@/enums/Module/ModuleYearGroupsEnum";
import MaterialInterface from "../Materials/MaterialInterface";
import CourseDatabaseKeys from "@/database/Courses/CourseDatabaseKeys";

/**
 * Interface representing a university module's metadata.
 * These modules are displayed on the website and show the modules that are part of a course.
 *
 * The fields are:
 * - `learningOutcomes`: the learning outcomes of the module
 * - `score`: the score achieved in the module
 * - `category`: the year group of the module which is one of the categories defined in {@link ModuleYearGroupsEnum}
 * - `parentCourse`: the course to which the module belongs
 *
 * Importantly, because the `UniversityModuleInterface` extends the `MaterialInterface`, it inherits the field `skills` which is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 */
export default interface ModuleInterface extends MaterialInterface {
  learningOutcomes: string[];
  score?: number;
  category: ModuleYearGroupsEnum;
  parentCourse: CourseDatabaseKeys;
}
