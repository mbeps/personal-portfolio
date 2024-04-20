import RoleKeyEnum from "@/enums/DatabaseKeysEnums/RoleKeyEnum";

/**
 * Interface representing a company related to work experience.
 * Each company has a name, website, location, positions, and logo.
 * The positions are the actual roles that the user has held at the company.
 */
export default interface CompanyInterface {
  name: string;
  website?: string;
  location: string;
  positions: RoleKeyEnum[];
  logo?: string;
}
