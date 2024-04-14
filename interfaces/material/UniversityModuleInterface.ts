import ModuleYearGroups from "@/enums/ModuleYearGroups";
import MaterialInterface from "./MaterialInterface";
import UniversityCourseKeysEnum from "@/enums/DatabaseKeysEnums/UniversityCourseKeysEnum";

//TODO: Add documentation
export default interface UniversityModuleInterface extends MaterialInterface {
  learningOutcomes: string[];
  score?: number;
  category: ModuleYearGroups;
  parentCourse: UniversityCourseKeysEnum;
}
