import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";

export default interface SkillsCategoryInterface {
  skillCategoryName: string;
  skills: SkillKeysEnum[];
}
