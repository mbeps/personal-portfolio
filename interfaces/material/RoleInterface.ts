import ExperienceCategories from "@/enums/ExperienceCategories";
import MaterialInterface from "./MaterialInterface";
import ExperienceTypeEnum from "@/enums/ExperienceType";
import CompanyEnum from "@/enums/DatabaseKeysEnums/ExperienceCompanyEnum";

//TODO: Add documentation
export default interface RoleInterface extends MaterialInterface {
  category: ExperienceCategories;
  type: ExperienceTypeEnum;
  startDate: string;
  endDate: string | "Present";
  company: CompanyEnum;
  responsibilities: string[];
}
