import addCompanyThumbnail from "@/lib/material/experience/addCompanyThumbnail";
import CompanyInterface from "@/database/companies/CompanyInterface";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";
import Database from "@/interfaces/Database";
import validateDatabaseKeys from "@/lib/database/validateDatabaseKeys";
import CompanyDatabaseKeys from "./CompanyDatabaseKeys";

const companiesMap: Database<CompanyInterface> = {
  [CompanyDatabaseKeys.Commerzbank]: {
    name: "Commerzbank",
    location: "London, UK",
    website: "https://www.commerzbank.com/",
    positions: [RoleDatabaseKeys.CommerzbankBackendEngineer],
    logo: addCompanyThumbnail(CompanyDatabaseKeys.Commerzbank),
  },
  [CompanyDatabaseKeys.GoogleRHULDevelopersClub]: {
    name: "Google x RHUL Developers Club",
    location: "Egham, UK",
    positions: [RoleDatabaseKeys.GoogleRhulDevelopersClubSoftwareEngineer],
    website: "https://www.linkedin.com/company/rhul-dev/",
    logo: addCompanyThumbnail(CompanyDatabaseKeys.GoogleRHULDevelopersClub),
  },
  [CompanyDatabaseKeys.AJTuitionCentre]: {
    name: "AJ Tuition Centre",
    location: "London, UK",
    positions: [RoleDatabaseKeys.AjTuitionCentreTutor],
    website: "https://www.ajlearning.co.uk/",
    logo: addCompanyThumbnail(CompanyDatabaseKeys.AJTuitionCentre),
  },
  [CompanyDatabaseKeys.Madhus]: {
    name: "Madhu's",
    location: "London, UK",
    website: "https://www.madhus.co.uk/",
    positions: [RoleDatabaseKeys.MadhusTeamLeader],
    logo: addCompanyThumbnail(CompanyDatabaseKeys.Madhus),
  },
  [CompanyDatabaseKeys.OpenSource]: {
    name: "Open Source",
    location: "Remote",
    positions: [RoleDatabaseKeys.OpenSourceContributor],
    logo: addCompanyThumbnail(CompanyDatabaseKeys.OpenSource),
  },
};

/**
 * List of keys for the companies which uniquely identify them.
 */
export const companyDatabaseKeys = Object.keys(
  companiesMap
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
