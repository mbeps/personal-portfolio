import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";

export default function filterSkillsByType(
  skillSlugs: SkillKeysEnum[],
  allSkills: Database<SkillInterface>,
  skillType: SkillTypesEnum
): SkillKeysEnum[] {
  // Initialize an empty array for the filtered skill slugs
  const filteredSkillSlugs: SkillKeysEnum[] = [];

  // Iterate over the skill slugs array
  skillSlugs.forEach((skillSlug) => {
    const skill = allSkills[skillSlug];
    // Check if the skill's type matches the specified skillType
    if (skill && skill.skillType === skillType) {
      // If it matches, add the slug to the filteredSkillSlugs array
      filteredSkillSlugs.push(skillSlug);
    }
  });

  return filteredSkillSlugs;
}
