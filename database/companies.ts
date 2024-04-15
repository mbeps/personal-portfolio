import CompanyEnum from "@/enums/DatabaseKeysEnums/ExperienceCompanyEnum";
import RoleKeyEnum from "@/enums/DatabaseKeysEnums/RoleKeyEnum";
import CompanyInterface from "@/interfaces/material/CompanyInterface";

const companiesMap: Database<CompanyInterface> = {
  [CompanyEnum.Commerzbank]: {
    name: "Commerzbank",
    location: "London, UK",
    website: "https://www.commerzbank.com/",
    positions: [RoleKeyEnum.CommerzbankDevOpsEngineer],
  },
};

export const companyKeys = Object.keys(companiesMap) as CompanyEnum[];

const companyDatabase: Database<CompanyInterface> = companiesMap;
export default companyDatabase;
