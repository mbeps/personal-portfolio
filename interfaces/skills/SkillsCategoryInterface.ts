import SkillInterface from "./SkillInterface";

export default interface SkillsCategoryInterface {
  skillCategoryName: string;
  skills: { [key: string]: SkillInterface };
}
