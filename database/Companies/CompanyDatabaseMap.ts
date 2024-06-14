import addCompanyThumbnail from "@/actions/material/experience/addCompanyThumbnail";
import RoleDatabaseKeys from "@/database/Roles/RoleDatabaseKeys";
import CompanyInterface from "@/database/Companies/CompanyInterface";
import CompanyDatabaseKeys from "./CompanyDatabaseKeys";

const companiesMap: Database<CompanyInterface> = {
  [CompanyDatabaseKeys.Commerzbank]: {
    name: "Commerzbank",
    location: "London, UK",
    website: "https://www.commerzbank.com/",
    positions: [RoleDatabaseKeys.CommerzbankDevOpsEngineer],
    logo: addCompanyThumbnail(CompanyDatabaseKeys.Commerzbank),
  },
  [CompanyDatabaseKeys.GoogleRHULDevelopersClub]: {
    name: "Google x RHUL Developers Club",
    location: "Egham, UK",
    positions: [RoleDatabaseKeys.GoogleRHULDevelopersClubSoftwareEngineer],
    website: "https://www.linkedin.com/company/rhul-dev/",
    logo: addCompanyThumbnail(CompanyDatabaseKeys.GoogleRHULDevelopersClub),
  },
  [CompanyDatabaseKeys.AJTuitionCentre]: {
    name: "AJ Tuition Centre",
    location: "London, UK",
    positions: [RoleDatabaseKeys.AJTuitionCentreTutor],
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

/**
 * Database of companies I have worked at.
 * Each of these companies can have one or more roles.
 * The order of the roles is important as it determines the order in which they are displayed.
 */
const companyDatabaseMap: Database<CompanyInterface> = companiesMap;
export default companyDatabaseMap;
