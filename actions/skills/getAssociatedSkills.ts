import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

/**
 * @deprecated
 */
export default function getAssociatedSkills(
  skillsHashmap: Database<SkillInterface>,
  skillKey: SkillSlugEnum,
  skillType?: SkillTypesEnum // Optional parameter for filtering by skill type
): SkillSlugEnum[] {
  // get all the skills from the array of keys

  let associatedSkills: SkillSlugEnum[] = [];

  // Find the primary skill from the array using the provided slug
  const primarySkill: SkillInterface | undefined = skillsHashmap[skillKey];

  // If the primary skill exists and has related skills, filter and add them to the associatedSkills array
  if (primarySkill && primarySkill.relatedSkills) {
    associatedSkills = primarySkill.relatedSkills.filter((relatedSkillSlug) => {
      const relatedSkill = skillsHashmap[relatedSkillSlug];
      return (
        relatedSkill && (!skillType || relatedSkill.skillType === skillType)
      );
    });
  }
  return associatedSkills;
}
