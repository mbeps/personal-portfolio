import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";

/**
 * Represents a company in the experience timeline so roles can reference metadata like logo paths under `public/companies/{slug}`.
 */
export default interface CompanyInterface {
  /** Company name displayed on cards and resume-style listings. */
  name: string;
  /** External link for the company site. */
  website?: string;
  /** City and country string shown alongside dates. */
  location: string;
  /** Role keys for positions held at the company. */
  positions: RoleDatabaseKeys[];
  /** Path to the logo asset stored under the matching company folder. */
  logo?: string;
}
