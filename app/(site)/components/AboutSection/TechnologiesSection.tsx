"use client";

import filterCategoriesFromSkills from "@/actions/skills/filter/filterCategoriesFromSkills";
import TechnologiesModal from "@/components/Modal/TechnologiesModal";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillCategoriesEnum from "@/enums/Skill/SkillCategoriesEnum";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";
import SkillInterface from "@/database/Skills/SkillInterface";

/**
 * Displays a list of skills that I have.
 * They can be clicked which would redirect to a page showing all the materials (projects, certifications, etc.) related to the skill.
 * There is also a button that opens a modal where all the skills are displayed.
 * @returns Skill section (list of skills)
 */
const TechnologiesSection: React.FC = () => {
  const mainSkills: Database<SkillInterface> = {};

  Object.entries(skillDatabaseMap).forEach(([key, skill]) => {
    if (skill.isMainSkill) {
      mainSkills[key] = skill;
    }
  });

  const mainSkillSlugs: SkillDatabaseKeys[] = Object.keys(
    mainSkills
  ) as SkillDatabaseKeys[];

  /**
   * This is a list of categories that should be ignored.
   * Any skills that are in these categories will not be displayed.
   * This categories are from the Skill type.
   */
  const ignoredCategories: SkillCategoriesEnum[] = [
    SkillCategoriesEnum.ProgrammingLanguages,
    SkillCategoriesEnum.ProjectManagers,
    SkillCategoriesEnum.DatabaseManagement,
    SkillCategoriesEnum.VersionControl,
    SkillCategoriesEnum.Mathematics,
    SkillCategoriesEnum.CloudComputing,
    SkillCategoriesEnum.Automation,
    SkillCategoriesEnum.Testing,
    SkillCategoriesEnum.CommunicationProtocolsLibraries,
    SkillCategoriesEnum.SoftSkills,
  ];

  /**
   * Only technologies (hard skills) are displayed.
   * Skills from programming languages are not displayed.
   */
  const skillsToDisplay: SkillDatabaseKeys[] = filterCategoriesFromSkills(
    mainSkills,
    ignoredCategories
  );

  /**
   * Gets the first 'limit' skills.
   * These are then displayed as tags.
   * @param totalLimit The number of skills to take
   * @returns List of skill names
   */
  function firstNSkills(
    skillKeys: SkillDatabaseKeys[],
    totalLimit: number
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
    limitPerCategory: number
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

  function handleDisplaySkills(): SkillDatabaseKeys[] {
    return firstNSkills(firstNSkillsPerCategory(skillsToDisplay, 5), 20);
  }

  return (
    <>
      <HeadingThree title="Technologies" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start -mt-2">
        {handleDisplaySkills().map(
          (skillSlug: SkillDatabaseKeys, idx: number) => (
            <SkillTag key={idx} skillKey={skillSlug} />
          )
        )}

        <div className="relative group">
          {/* Tag that opens skills modal */}
          <Tooltip>
            <TooltipTrigger>
              <TechnologiesModal />
            </TooltipTrigger>
            <TooltipContent>
              <p>View More Technologies</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default TechnologiesSection;
