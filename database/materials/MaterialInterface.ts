import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

/**
 * Base shape for any material shown on the site (projects, roles, blogs, certificates, courses, modules).
 * Shared fields power the filters, skill tables, and related material lists so each section remains consistent.
 */
export default interface MaterialInterface {
  /** Display name shown in cards and headings. */
  name: string;
  /** Skills referenced by slug, used to build the grouped skill tables. */
  skills: SkillDatabaseKeys[];
  /** Editorial category used for grouping within lists and folder names under `public`. */
  category: string;
  /** Marks items hidden by default but discoverable via the archive toggle. */
  archived?: boolean;
  /** Keys linking to other materials for cross-navigation. */
  relatedMaterials?: string[];
}
