import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function filterSkillSlugsByCategory(
  skillSlugs: SkillSlugEnum[],
  allSkills: Database<SkillInterface>, // Assuming this is passed into the function
  specificCategory: SkillCategoriesEnum
): SkillSlugEnum[] {
  // Initialize an empty array for the filtered skill slugs
  const filteredSkillSlugs: SkillSlugEnum[] = [];

  // Iterate over the skill slugs array
  skillSlugs.forEach((skillSlug) => {
    const skill = allSkills[skillSlug];
    // Check if the skill's category matches the specificCategory
    if (skill.category === specificCategory) {
      // If it matches, add the slug to the filteredSkillSlugs array
      filteredSkillSlugs.push(skillSlug);
    }
  });

  return filteredSkillSlugs;
}

export function filterSkillSlugsExcludingCategory(
  skillSlugs: SkillSlugEnum[],
  allSkills: Database<SkillInterface>, // Assuming this is passed into the function
  excludedCategory: SkillCategoriesEnum
): SkillSlugEnum[] {
  // Initialize an empty array for the skill slugs that do not match the excluded category
  const nonMatchingSkillSlugs: SkillSlugEnum[] = [];

  // Iterate over the skill slugs array
  skillSlugs.forEach((skillSlug) => {
    const skill = allSkills[skillSlug];
    // Check if the skill's category does not match the excludedCategory
    if (skill.category !== excludedCategory) {
      // If it does not match, add the slug to the nonMatchingSkillSlugs array
      nonMatchingSkillSlugs.push(skillSlug);
    }
  });

  return nonMatchingSkillSlugs;
}
