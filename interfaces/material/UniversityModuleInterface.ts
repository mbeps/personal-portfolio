import MaterialInterface from "./MaterialInterface";

//TODO: Add documentation
export default interface UniversityModuleInterface extends MaterialInterface {
  description?: string;
  learningOutcomes?: string[];
  score: number;
}
