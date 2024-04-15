import CompanyKeyEnum from "@/enums/DatabaseKeysEnums/ExperienceCompanyEnum";
import RoleKeyEnum from "@/enums/DatabaseKeysEnums/RoleKeyEnum";
import CompanyInterface from "@/interfaces/material/CompanyInterface";

const companiesMap: Database<CompanyInterface> = {
  [CompanyKeyEnum.Commerzbank]: {
    name: "Commerzbank",
    location: "London, UK",
    website: "https://www.commerzbank.com/",
    positions: [RoleKeyEnum.CommerzbankDevOpsEngineer],
  },
  [CompanyKeyEnum.GoogleRHULDevelopersClub]: {
    name: "Google x RHUL Developers Club",
    location: "London, UK",
    website: "/",
    positions: [RoleKeyEnum.GoogleRHULDevelopersClubSoftwareEngineer],
  },
};

export const companyKeys = Object.keys(companiesMap) as CompanyKeyEnum[];

const companyDatabase: Database<CompanyInterface> = companiesMap;
export default companyDatabase;
