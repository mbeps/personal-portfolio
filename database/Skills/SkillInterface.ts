import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillTypesEnum from "@/enums/Skill/SkillTypesEnum";

/**
 * Interface for representing a skill.
 * This interface contains the following fields:
 * - `name` which is the name of the skill.
 * - `category` which is the category of the skill.
 * - `relatedSkills` which is a list of related skills or sub-skills.
 * - `isMainSkill` which is a boolean flag to indicate if the skill is a main skill.
 * - `skillType` which is the type of the skill.
 *
 * Because of all this metadata about a skill, materials and other skills can be grouped, sorted and filtered by these fields.
 * For example, it is possible to find all materials related to a specific skill or to find all skills related to a specific category.
 */
export default interface SkillInterface {
  name: string;
  category: SkillCategoriesEnum;
  relatedSkills?: SkillDatabaseKeys[];
  isMainSkill?: boolean;
  skillType: SkillTypesEnum;
}
