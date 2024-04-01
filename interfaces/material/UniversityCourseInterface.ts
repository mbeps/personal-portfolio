import UniversityModuleKeysEnum from "@/enums/DatabaseKeysEnums/UniversityModuleKeysEnum";
import MaterialInterface from "./MaterialInterface";

//TODO: Add documentation
export default interface UniversityCourseInterface extends MaterialInterface {
  grade: string;
  score?: number;
  modules: UniversityModuleKeysEnum[];
  certificate: string;
  startYear: number;
  endYear: number;
}
