import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";

/**
 * Describes a skill used across the portfolio taxonomy so filters, related skill grouping, and public asset folders stay consistent.
 */
export default interface SkillInterface {
  /** Display name for the skill. */
  name: string;
  /** Category that drives grouping and URL slugs. */
  category: SkillCategoriesEnum;
  /** Optional list of related skill keys for linking technologies to their parent language. */
  relatedSkills?: SkillDatabaseKeys[];
  /** Marks headline skills that should be surfaced more prominently. */
  isMainSkill?: boolean;
  /** Type used to distinguish technologies and general technical skills. */
  skillType: SkillTypesEnum;
}
