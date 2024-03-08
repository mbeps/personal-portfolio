import SkillInterface from "@/interfaces/skills/SkillInterface";
import { SkillTypesEnum } from "@/enums/SkillTypesEnum";

export default function filterSkillsByType(
  skills: SkillInterface[],
  skillType: SkillTypesEnum
): SkillInterface[] {
  return skills.filter((skill) => skill.skillType === skillType);
}
