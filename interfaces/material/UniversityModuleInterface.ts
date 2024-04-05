import ModuleYearGroups from "@/enums/ModuleYearGroups";
import MaterialInterface from "./MaterialInterface";

//TODO: Add documentation
export default interface UniversityModuleInterface extends MaterialInterface {
  learningOutcomes?: string[];
  score?: number;
  category: ModuleYearGroups;
}
