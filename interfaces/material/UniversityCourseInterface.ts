import UniversityModuleKeysEnum from "@/enums/DatabaseKeysEnums/UniversityModuleKeysEnum";
import MaterialInterface from "./MaterialInterface";

/**
 * Interface representing a university course's metadata.
 * These courses are displayed on the website and show the courses that are part of a university degree.
 *
 * The fields are:
 * - `grade`: the grade achieved in the course
 * - `score`: the score achieved in the course
 * - `modules`: the modules that are part of the course
 * - `certificate`: the certificate achieved in the course
 * - `startYear`: the year the course started
 * - `endYear`: the year the course ended
 * - `university`: the university where the course was studied
 *
 * Importantly, because the `UniversityCourseInterface` extends the `MaterialInterface`, it inherits the field `skills` which is an array of `SkillKeysEnum` which is used to represent the skills that are associated to understand the material.
 */
export default interface UniversityCourseInterface extends MaterialInterface {
  grade: string;
  score?: number;
  modules: UniversityModuleKeysEnum[];
  certificate?: string;
  startYear: number;
  endYear: number;
  university: string;
}
