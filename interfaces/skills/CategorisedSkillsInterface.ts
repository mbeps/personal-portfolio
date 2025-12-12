import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

/**
 * Represents a bucket of skills under a shared category, used by grouped tables across project, role, and skill pages.
 */
export default interface CategorisedSkillsInterface {
  /** Category label such as "Programming Languages" or "DevOps". */
  skillCategoryName: string;
  /** Skill keys belonging to this category, matching the database map and public asset folders. */
  skills: SkillDatabaseKeys[];
}
