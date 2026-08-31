import type BlogDatabaseKeys from "@/database/blogs/blog-database-keys";
import type CertificateDatabaseKeys from "@/database/certificates/certificate-database-keys";
import type CompanyDatabaseKeys from "@/database/companies/company-database-keys";
import type CourseDatabaseKeys from "@/database/courses/course-database-keys";
import type ModuleDatabaseKeys from "@/database/modules/module-database-keys";
import type ProjectDatabaseKeys from "@/database/projects/project-database-keys";
import type RoleDatabaseKeys from "@/database/roles/role-database-keys";

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
