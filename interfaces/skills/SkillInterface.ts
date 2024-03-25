import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

/**
 * Interface for representing a skill.
 */
export default interface SkillInterface {
  name: string;
  category: SkillCategoriesEnum;
  relatedSkills?: SkillKeysEnum[];
  isMainSkill?: boolean;
  skillType: SkillTypesEnum;
}
