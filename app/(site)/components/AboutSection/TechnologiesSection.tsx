"use client";

import filterCategoriesFromSkills from "@/actions/skills/filterCategoriesFromSkills";
import TechnologiesModal from "@/components/Modal/TechnologiesModal";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import skillDatabase from "@/database/skills/skills";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

/**
 * Displays a list of skills that I have.
 * These skills may or many not have languages associated with them.
 * There is an option to view more skills which will open a modal.
 * @returns (JSX.Element): skill section (list of skills)
 */
const TechnologiesSection: React.FC = () => {
  const mainSkills: Database<SkillInterface> = {};

  Object.entries(skillDatabase).forEach(([key, skill]) => {
    if (skill.isMainSkill) {
      mainSkills[key] = skill;
    }
  });

  const mainSkillSlugs: SkillSlugEnum[] = Object.keys(
    mainSkills
  ) as SkillSlugEnum[];

  /**
   * This is a list of categories that should be ignored.
   * Any skills that are in these categories will not be displayed.
   * This categories are from the Skill type.
   */
  const ignoredCategories: SkillCategoriesEnum[] = [
    SkillCategoriesEnum.ProgrammingLanguages,
    SkillCategoriesEnum.ProjectManagers,
    SkillCategoriesEnum.ObjectRelationalMappers,
    SkillCategoriesEnum.VersionControl,
    SkillCategoriesEnum.WebSockets,
    SkillCategoriesEnum.Mathematics,
    SkillCategoriesEnum.CloudComputing,
    SkillCategoriesEnum.Automation,
  ];

  /**
   * Only technologies (hard skills) are displayed.
   * Skills from programming languages are not displayed.
   */
  const skillsToDisplay: SkillSlugEnum[] = filterCategoriesFromSkills(
    mainSkills,
    ignoredCategories
  );

  /**
   * Gets the first 'limit' skills.
   * These are then displayed as tags.
   * @param totalLimit (number): the number of skills to take
   * @returns (string[]): list of skill names
   */
  function firstNSkills(
    skillKeys: SkillSlugEnum[],
    totalLimit: number
  ): SkillSlugEnum[] {
    return skillKeys.slice(0, totalLimit);
  }

  /**
   * Gets the first few skills from each category.
   * These are then displayed as tags.
   * @param limitPerCategory (number): the number of skills to take from each category
   * @returns (string[]): list of skill names
   */
  function firstNSkillsPerCategory(
    skillKeys: SkillSlugEnum[],
    limitPerCategory: number
  ): SkillSlugEnum[] {
    const skillCategories: { [categoryName: string]: SkillSlugEnum[] } = {};
    let limitedSkillSlugs: SkillSlugEnum[] = [];

    // Organize skill slugs into categories
    skillKeys.forEach((skillSlug) => {
      const skillDetails: SkillInterface = skillDatabase[skillSlug];
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

  function handleDisplaySkills(): SkillSlugEnum[] {
    return firstNSkills(firstNSkillsPerCategory(skillsToDisplay, 2), 16);
  }

  return (
    <>
      <HeadingThree title="Technologies" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start -mt-2">
        {handleDisplaySkills().map((skillSlug: SkillSlugEnum, idx: number) => (
          <SkillTag key={idx} skillKey={skillSlug} />
        ))}

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
