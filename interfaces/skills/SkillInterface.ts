import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

/**
 * Interface for representing a skill.
 */
export default interface SkillInterface {
  name: string;
  category: SkillCategoriesEnum;
  relatedSkills?: SkillInterface[];
  isMainSkill?: boolean;
  skillType: SkillTypesEnum;
}
