import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

/**
 * Interface for representing a skill.
 */
export default interface SkillInterface {
  name: string;
  category: SkillCategoriesEnum;
  relatedSkills?: SkillSlugEnum[];
  isMainSkill?: boolean;
  skillType: SkillTypesEnum;
}
