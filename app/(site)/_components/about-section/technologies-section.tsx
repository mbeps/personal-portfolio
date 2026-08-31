"use client";

import TechnologiesModal from "@/app/(site)/_components/about-section/modal/technologies-modal";
import SkillTag from "@/components/tags/skill-tag";
import SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import type SkillInterface from "@/database/skills/skill-interface";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import type Database from "@/interfaces/database";
import filterCategoriesFromSkills from "@/lib/skills/filter/filter-categories-from-skills";

/**
 * Curated skill tag wall that highlights flagship technologies while handing off deeper exploration to the shared modal.
 * Uses the skill database to stay in sync with the Skills page but constrains to main skills for the homepage footprint.
 *
 * @returns Technologies block with clickable tags and modal trigger.
 */
const TechnologiesSection: React.FC = () => {
  const mainSkills: Database<SkillInterface> = {};

  (
    Object.entries(skillDatabaseMap) as [SkillDatabaseKeys, SkillInterface][]
  ).forEach(([key, skill]) => {
    if (skill.isMainSkill) {
      mainSkills[key] = skill;
    }
  });

  const _mainSkillSlugs: SkillDatabaseKeys[] = Object.keys(
    mainSkills,
  ) as SkillDatabaseKeys[];

  /**
   * This is a list of categories that should be ignored.
   * Any skills that are in these categories will not be displayed.
   * This categories are from the Skill type.
   */
  const ignoredCategories: SkillCategoriesEnum[] = [
    SkillCategoriesEnum.ProgrammingLanguages,
    SkillCategoriesEnum.Mathematics,
    SkillCategoriesEnum.CloudComputing,
    SkillCategoriesEnum.Testing,
    SkillCategoriesEnum.DevOps,
    SkillCategoriesEnum.GameDevelopment,
  ];

  /**
   * Only technologies (hard skills) are displayed.
   * Skills from programming languages are not displayed.
   */
  const skillsToDisplay: SkillDatabaseKeys[] = filterCategoriesFromSkills(
    mainSkills,
    ignoredCategories,
  );

  /**
   * Gets the first 'limit' skills.
   * These are then displayed as tags.
   * @param totalLimit The number of skills to take
   * @returns List of skill names
   */
  function firstNSkills(
    skillKeys: SkillDatabaseKeys[],
    totalLimit: number,
  ): SkillDatabaseKeys[] {
    return skillKeys.slice(0, totalLimit);
  }

  /**
   * Gets the first few skills from each category.
   * These are then displayed as tags.
   * @param limitPerCategory The number of skills to take from each category
   * @returns List of skill names
   */
  function firstNSkillsPerCategory(
    skillKeys: SkillDatabaseKeys[],
    limitPerCategory: number,
  ): SkillDatabaseKeys[] {
    const skillCategories: { [categoryName: string]: SkillDatabaseKeys[] } = {};
    let limitedSkillSlugs: SkillDatabaseKeys[] = [];

    // Organize skill slugs into categories
    skillKeys.forEach((skillSlug) => {
      const skillDetails: SkillInterface = skillDatabaseMap[skillSlug];
      const category: SkillCategoriesEnum = skillDetails.category || "Other";

      if (!skillCategories[category]) {
        skillCategories[category] = [];
      }

      skillCategories[category].push(skillSlug);
    });

    // Collect the first 'limitPerCategory' skill slugs from each category
    Object.values(skillCategories).forEach((categorySlugs) => {
      limitedSkillSlugs = [
        ...limitedSkillSlugs,
        ...categorySlugs.slice(0, limitPerCategory),
      ];
    });

    return limitedSkillSlugs;
  }

  function _handleDisplaySkills(): SkillDatabaseKeys[] {
    return firstNSkills(firstNSkillsPerCategory(skillsToDisplay, 5), 19);
  }

  const manualSkillsList: SkillDatabaseKeys[] = [
    SkillDatabaseKeys.PyTorch,
    SkillDatabaseKeys.TensorFlow,
    SkillDatabaseKeys.Transformers,
    SkillDatabaseKeys.ScikitLearn,
    SkillDatabaseKeys.NextJs,
    SkillDatabaseKeys.ReactJs,
    SkillDatabaseKeys.Flask,
    SkillDatabaseKeys.FastApi,
    SkillDatabaseKeys.SpringBoot,
    SkillDatabaseKeys.Firebase,
    SkillDatabaseKeys.Supabase,
    SkillDatabaseKeys.ClerkAuth,
    SkillDatabaseKeys.BetterAuth,
    SkillDatabaseKeys.MongoDb,
    SkillDatabaseKeys.PostgreSql,
    SkillDatabaseKeys.Docker,
  ];

  return (
    <>
      <h3>Technologies</h3>
      <div className="z-10 -mt-2 flex flex-row flex-wrap justify-center md:justify-start">
        {manualSkillsList.map((skillSlug: SkillDatabaseKeys, idx: number) => (
          <SkillTag key={idx} skillKey={skillSlug} />
        ))}

        <div className="group relative">
          {/* Tag that opens skills modal */}
          <TechnologiesModal />
        </div>
      </div>
    </>
  );
};

export default TechnologiesSection;
