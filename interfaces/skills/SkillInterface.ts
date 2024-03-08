import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";

export enum SkillTypes {
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
  skillType: SkillTypes;
}
