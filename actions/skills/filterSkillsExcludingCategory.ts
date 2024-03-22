import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

// returns a database of skills which does not include the excluded category
export default function filterSkillsExcludingCategory(
  skillSlugs: SkillSlugEnum[],
  allSkills: Database<SkillInterface>, // Assuming this is passed into the function
  excludedCategory: SkillCategoriesEnum
): SkillSlugEnum[] {
  // Initialize an empty array for the filtered skill slugs
  const filteredSkillSlugs: SkillSlugEnum[] = [];

  // Iterate over the skill slugs array
  skillSlugs.forEach((skillSlug) => {
    const skill = allSkills[skillSlug];
    // Check if the skill's category is not the excluded category
    if (skill.category !== excludedCategory) {
      // If not excluded, add the slug to the filteredSkillSlugs array
      filteredSkillSlugs.push(skillSlug);
    }
  });

  return filteredSkillSlugs;
}
