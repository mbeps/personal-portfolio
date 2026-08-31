import { PATHS } from "@/constants/paths";
import type CompanyInterface from "@/database/companies/CompanyInterface";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import type Database from "@/interfaces/Database";
import validateDatabaseKeys from "@/lib/database/validateDatabaseKeys";
import CompanyDatabaseKeys from "./CompanyDatabaseKeys";

const companiesMap: Database<CompanyInterface> = {
  [CompanyDatabaseKeys.Commerzbank]: {
    name: "Commerzbank",
    location: "London, UK",
    website: "https://www.commerzbank.com/",
    positions: [RoleDatabaseKeys.CommerzbankFullStackSoftwareEngineer],
    logo: PATHS.COMPANY.LOGO(CompanyDatabaseKeys.Commerzbank),
  },
  [CompanyDatabaseKeys.GoogleRHULDevelopersClub]: {
    name: "Google x RHUL Developers Club",
    location: "Egham, UK",
    positions: [RoleDatabaseKeys.GoogleRhulDevelopersClubSoftwareEngineer],
    website: "https://www.linkedin.com/company/rhul-dev/",
    logo: PATHS.COMPANY.LOGO(CompanyDatabaseKeys.GoogleRHULDevelopersClub),
  },
  [CompanyDatabaseKeys.OpenSource]: {
    name: "Open Source",
    location: "Remote",
    positions: [RoleDatabaseKeys.OpenSourceContributor],
    logo: PATHS.COMPANY.LOGO(CompanyDatabaseKeys.OpenSource),
  },
};

/**
 * List of keys for the companies which uniquely identify them.
 */
export const companyDatabaseKeys = Object.keys(
  companiesMap,
) as CompanyDatabaseKeys[];

// Validate that all company keys only contain alphanumeric characters and dashes
validateDatabaseKeys(companyDatabaseKeys);

/**
 * Database of companies I have worked at.
 * Each of these companies can have one or more roles.
 * The order of the roles is important as it determines the order in which they are displayed.
 */
const companyDatabaseMap: Database<CompanyInterface> = companiesMap;
export default companyDatabaseMap;
