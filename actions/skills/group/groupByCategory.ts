import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

export default function groupByCategory(
  skillSlugs: SkillSlugEnum[],
  allSkills: Database<SkillInterface>
): SkillsCategoryInterface[] {
  // Object to hold the grouping
  const categories: Database<SkillSlugEnum[]> = {};

  skillSlugs.forEach((slug) => {
    const skill = allSkills[slug];
    if (skill) {
      const category = skill.category;
      // Initialize the category array if it doesn't exist
      if (!categories[category]) {
        categories[category] = [];
      }
      // Add the skillSlug to the appropriate category
      categories[category].push(slug);
    }
  });

  // Convert the categories object to an array of SkillsCategoryInterface
  const result: SkillsCategoryInterface[] = Object.keys(categories).map(
    (key) => ({
      skillCategoryName: key,
      skills: categories[key],
    })
  );

  return result;
}
