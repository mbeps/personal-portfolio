import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";

export enum SkillTypesEnum {
  Hard = "hard",
  General = "general",
  Soft = "soft",
}

/**
 * Interface for representing a skill.
 */
export default interface SkillInterface {
  name: string;
  slug: string;
  category: SkillCategoriesEnum;
  relatedSkills?: SkillInterface[];
  isMainSkill?: boolean;
  skillType: SkillTypesEnum;
}
