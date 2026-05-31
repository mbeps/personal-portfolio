import BlogDatabaseKeys from "@/database/blogs/BlogDatabaseKeys";
import CertificateDatabaseKeys from "@/database/certificates/CertificateDatabaseKeys";
import CompanyDatabaseKeys from "@/database/companies/CompanyDatabaseKeys";
import CourseDatabaseKeys from "@/database/courses/CourseDatabaseKeys";
import ModuleDatabaseKeys from "@/database/modules/ModuleDatabaseKeys";
import ProjectDatabaseKeys from "@/database/projects/ProjectDatabaseKeys";
import RoleDatabaseKeys from "@/database/roles/RoleDatabaseKeys";

/**
 * Represents a group of material keys used by `MaterialGroupSectionList` so lists can be rendered by category or type without duplicating markup.
 * Keys align with folders under `public` that mirror route paths, keeping thumbnails and markdown discoverable from the group context.
 */
export default interface MaterialGroupInterface {
  /** Name of the grouping shown as a section title. */
  groupName: string;
  /** Keys that belong to this group, resolved lazily by the consuming component. */
  materialsKeys:
    | BlogDatabaseKeys[]
    | CertificateDatabaseKeys[]
    | CompanyDatabaseKeys[]
    | CourseDatabaseKeys[]
    | ModuleDatabaseKeys[]
    | ProjectDatabaseKeys[]
    | RoleDatabaseKeys[];
}
