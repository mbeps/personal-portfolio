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
import skillsDatabase from "@/database/skills/skills";
import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

function aggregateAllLanguagesSkills(
  skills: { [key: string]: SkillInterface },
  allLanguages: SkillSlugEnum[]
): { [key: string]: SkillInterface } {
  const aggregatedSkills: { [key: string]: SkillInterface } = {};

  // Iterate over all language slugs
  allLanguages.forEach((languageSlug) => {
    // Use the provided function to get associated skills for each language with 'Hard' skillType
    const associatedSkillsForLanguage = getAssociatedSkillsHashmap(
      skills,
      languageSlug,
      SkillTypesEnum.Hard
    );

    // Merge the associated skills into the aggregatedSkills hashmap
    Object.assign(aggregatedSkills, associatedSkillsForLanguage);
  });

  return aggregatedSkills;
}

/**
 * Displays a list of skills that I have.
 * These skills may or many not have languages associated with them.
 * There is an option to view more skills which will open a modal.
 * @returns (JSX.Element): skill section (list of skills)
 */
const TechnologiesSection: React.FC = () => {
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
  const skillsToDisplay: { [key: string]: SkillInterface } =
    filterCategoriesFromSkills(skillsDatabase, ignoredCategories);

  /**
   * Gets the first 'limit' skills.
   * These are then displayed as tags.
   * @param totalLimit (number): the number of skills to take
   * @returns (string[]): list of skill names
   */
  function firstNSkills(
    skills: { [key: string]: SkillInterface },
    totalLimit: number
  ): { [key: string]: SkillInterface } {
    const limitedSkills: { [key: string]: SkillInterface } = {};
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
    skills: { [key: string]: SkillInterface },
    limitPerCategory: number
  ): { [key: string]: SkillInterface } {
    // Categorize the skills into a hashmap of categories with each category holding a hashmap of skills
    const skillCategories: {
      [categoryName: string]: { [key: string]: SkillInterface };
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
    const limitedSkills: { [key: string]: SkillInterface } = {};

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
