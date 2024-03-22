"use client";

import filterCategoriesFromSkills from "@/actions/skills/filterCategoriesFromSkills";
import getAssociatedSkillsHashmap from "@/actions/skills/getAssociatedSkills";
import TechnologiesModal from "@/components/Modal/TechnologiesModal";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import skillsHashmap from "@/database/skills/skills";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

/**
 * Displays a list of skills that I have.
 * These skills may or many not have languages associated with them.
 * There is an option to view more skills which will open a modal.
 * @returns (JSX.Element): skill section (list of skills)
 */
const TechnologiesSection: React.FC = () => {
  const mainSkills: Database<SkillInterface> = {};

  Object.entries(skillsHashmap).forEach(([key, skill]) => {
    if (skill.isMainSkill) {
      mainSkills[key] = skill;
    }
  });
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
  const skillsToDisplay: Database<SkillInterface> = filterCategoriesFromSkills(
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
    skills: Database<SkillInterface>,
    totalLimit: number
  ): Database<SkillInterface> {
    const limitedSkills: Database<SkillInterface> = {};
    let count = 0;

    // Iterate over the hashmap entries
    for (const [key, skill] of Object.entries(skills)) {
      if (count < totalLimit) {
        limitedSkills[key] = skill;
        count += 1;
      } else {
        break; // Stop adding skills once the totalLimit is reached
      }
    }

    return limitedSkills;
  }

  /**
   * Gets the first few skills from each category.
   * These are then displayed as tags.
   * @param limitPerCategory (number): the number of skills to take from each category
   * @returns (string[]): list of skill names
   */
  function firstNSkillsPerCategory(
    skills: Database<SkillInterface>,
    limitPerCategory: number
  ): Database<SkillInterface> {
    // Categorize the skills into a hashmap of categories with each category holding a hashmap of skills
    const skillCategories: {
      [categoryName: string]: Database<SkillInterface>;
    } = {};

    Object.entries(skills).forEach(([skillKey, skill]) => {
      const category = skill.category || "Other"; // If no category, put in 'Other' category

      if (!skillCategories[category]) {
        skillCategories[category] = {};
      }

      // Add skill to the appropriate category
      skillCategories[category][skillKey] = skill;
    });

    // Take the first 'limitPerCategory' skills from each category and merge them into a single hashmap
    const limitedSkills: Database<SkillInterface> = {};

    Object.keys(skillCategories).forEach((categoryName) => {
      const categorySkills = skillCategories[categoryName];
      let count = 0;
      for (const [skillKey, skill] of Object.entries(categorySkills)) {
        if (count < limitPerCategory) {
          limitedSkills[skillKey] = skill;
          count++;
        } else {
          break; // Stop adding skills once the limitPerCategory is reached
        }
      }
    });

    return limitedSkills;
  }

  const handleDisplaySkills = () => {
    return firstNSkills(firstNSkillsPerCategory(skillsToDisplay, 2), 16);
  };

  return (
    <>
      <HeadingThree title="Technologies" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start -mt-2">
        {Object.values(handleDisplaySkills()).map(
          (skill: SkillInterface, idx: number) => (
            <SkillTag key={idx} skill={skill} />
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
