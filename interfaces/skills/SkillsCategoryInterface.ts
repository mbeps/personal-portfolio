import SkillSlugEnum from "@/enums/SkillSlugEnum";

export default interface SkillsCategoryInterface {
  skillCategoryName: string;
  skills: SkillSlugEnum[];
}
