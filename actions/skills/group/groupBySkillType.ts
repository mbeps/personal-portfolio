import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

// Function to group skills by skill type
export default function groupBySkillType(
  skillSlugs: SkillSlugEnum[],
  allSkills: { [key: string]: SkillInterface }
): SkillsCategoryInterface[] {
  // Object to hold the grouping by skillType
  const skillTypes: { [key: string]: SkillSlugEnum[] } = {};

  skillSlugs.forEach((slug) => {
    const skill = allSkills[slug];
    if (skill) {
      const skillType = skill.skillType;
      // Initialize the skillType array if it doesn't exist
      if (!skillTypes[skillType]) {
        skillTypes[skillType] = [];
      }
      // Add the skillSlug to the appropriate skillType
      skillTypes[skillType].push(slug);
    }
  });

  // Convert the skillTypes object to an array of SkillsCategoryInterface
  const result: SkillsCategoryInterface[] = Object.keys(skillTypes).map(
    (key) => ({
      skillCategoryName: key,
      skills: skillTypes[key],
    })
  );

  return result;
}
