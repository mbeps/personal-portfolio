import addCompanyThumbnail from "@/actions/material/experience/addCompanyThumbnail";
import CompanyKeyEnum from "@/enums/DatabaseKeysEnums/ExperienceCompanyEnum";
import RoleKeyEnum from "@/enums/DatabaseKeysEnums/RoleKeyEnum";
import CompanyInterface from "@/interfaces/material/CompanyInterface";

const companiesMap: Database<CompanyInterface> = {
  [CompanyKeyEnum.Commerzbank]: {
    name: "Commerzbank",
    location: "London, UK",
    website: "https://www.commerzbank.com/",
    positions: [RoleKeyEnum.CommerzbankDevOpsEngineer],
    logo: addCompanyThumbnail(CompanyKeyEnum.Commerzbank),
  },
  [CompanyKeyEnum.GoogleRHULDevelopersClub]: {
    name: "Google x RHUL Developers Club",
    location: "Egham, UK",
    positions: [RoleKeyEnum.GoogleRHULDevelopersClubSoftwareEngineer],
    website: "https://www.linkedin.com/company/rhul-dev/",
    logo: addCompanyThumbnail(CompanyKeyEnum.GoogleRHULDevelopersClub),
  },
  [CompanyKeyEnum.AJTuitionCentre]: {
    name: "AJ Tuition Centre",
    location: "London, UK",
    positions: [RoleKeyEnum.AJTuitionCentreTutor],
    website: "https://www.ajlearning.co.uk/",
    logo: addCompanyThumbnail(CompanyKeyEnum.AJTuitionCentre),
  },
  [CompanyKeyEnum.Madhus]: {
    name: "Madhu's",
    location: "London, UK",
    website: "https://www.madhus.co.uk/",
    positions: [RoleKeyEnum.MadhusTeamLeader],
    logo: addCompanyThumbnail(CompanyKeyEnum.Madhus),
  },
  [CompanyKeyEnum.GnomeFoundation]: {
    name: "Gnome Foundation",
    location: "Remote",
    website: "https://foundation.gnome.org/",
    positions: [RoleKeyEnum.GnomeFoundationCommunityMember],
    logo: addCompanyThumbnail(CompanyKeyEnum.GnomeFoundation),
  },
};

export const companyKeys = Object.keys(companiesMap) as CompanyKeyEnum[];

const companyDatabase: Database<CompanyInterface> = companiesMap;
export default companyDatabase;
