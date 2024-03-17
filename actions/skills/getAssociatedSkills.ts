import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function getAssociatedSkills(
  skills: { [key: string]: SkillInterface },
  skillKey: SkillSlugEnum,
  skillType?: SkillTypesEnum // Optional parameter for filtering by skill type
): { [key: string]: SkillInterface } {
  const associatedSkills: { [key: string]: SkillInterface } = {};

  // Find the primary skill using the provided slug
  const primarySkill: SkillInterface = skills[skillKey];

  // If the primary skill exists and has related skills, find and add them to the associatedSkills hashmap
  if (primarySkill && primarySkill.relatedSkills) {
    primarySkill.relatedSkills.forEach((relatedSkillSlug) => {
      const relatedSkill = skills[relatedSkillSlug];
      // If a skillType is specified, only add related skills of that type; otherwise, add all related skills
      if (
        relatedSkill &&
        (!skillType || relatedSkill.skillType === skillType)
      ) {
        associatedSkills[relatedSkillSlug] = relatedSkill;
      }
    });
  }

  return associatedSkills;
}
