import SkillSlugEnum from "@/enums/SkillSlugEnum";

export default interface MaterialInterface {
  name: string;
  skills: SkillSlugEnum[];
  category: string;
  archived?: boolean;
}
