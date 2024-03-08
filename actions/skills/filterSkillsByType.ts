import SkillInterface, {
  SkillTypesEnum,
} from "@/interfaces/skills/SkillInterface";

export default function filterSkillsByType(
  skills: SkillInterface[],
  skillType: SkillTypesEnum
): SkillInterface[] {
  return skills.filter((skill) => skill.skillType === skillType);
}
