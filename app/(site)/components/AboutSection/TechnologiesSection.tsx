"use client";

import TechnologiesModal from "@/components/Modal/TechnologiesModal";
import SkillTag from "@/components/Tags/SkillTag";
import HeadingThree from "@/components/Text/HeadingThree";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import { languages } from "@/database/skills/languages";
import { technologies } from "@/database/skills/skills";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

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
  const ignoredCategories: string[] = [
    "Programming Languages",
    "Project Managers",
    "Object Relational Mappers",
    "Version Control System",
    "Web Sockets",
    "Mathematics",
    "Cloud Computing",
    "Automation",
    "Other",
  ];

  /**
   * Gets the list of related skills from all the languages.
   */
  const allLanguageSkills: SkillInterface[] = languages.reduce(
    (acc, language) => {
      return acc.concat(language.relatedSkills || []);
    },
    [] as SkillInterface[],
  );

  /**
   * List of all skills.
   * This includes skills from languages and technologies.
   */
  const displayedSkills: SkillInterface[] = allLanguageSkills
    .concat(technologies)
    .filter((skill) => !ignoredCategories.includes(skill.category || "Other"));

  /**
   * Gets the first 'limit' skills.
   * These are then displayed as tags.
   * @param totalLimit (number): the number of skills to take
   * @returns (string[]): list of skill names
   */
  function firstNSkills(
    skillsToLimit: SkillInterface[],
    totalLimit: number,
  ): SkillInterface[] {
    const uniqueSkills = new Map<string, SkillInterface>();

    skillsToLimit.forEach((skill) => {
      if (!uniqueSkills.has(skill.name)) {
        uniqueSkills.set(skill.name, skill);
      }
    });

    return Array.from(uniqueSkills.values()).slice(0, totalLimit);
  }

  /**
   * Gets the first few skills from each category.
   * These are then displayed as tags.
   * @param limitPerCategory (number): the number of skills to take from each category
   * @returns (string[]): list of skill names
   */
  function firstNSkillsPerCategory(
    skillsToLimit: SkillInterface[],
    limitPerCategory: number,
  ): SkillInterface[] {
    // Categorize the skills into an array of SkillsCategoryInterface
    const skillCategories: SkillsCategoryInterface[] = skillsToLimit.reduce(
      (acc, skill) => {
        const category = skill.category || "Other"; // If no category, put in 'Other' category
        const existingCategory = acc.find(
          (c) => c.skillCategoryName === category,
        );

        if (existingCategory) {
          existingCategory.skills.push(skill);
        } else {
          acc.push({ skillCategoryName: category, skills: [skill] });
        }

        return acc;
      },
      [] as SkillsCategoryInterface[],
    );

    // Take the first 'limitPerCategory' skills from each category
    let skills: SkillInterface[] = []; // List of skills
    skillCategories.forEach((categoryData) => {
      const firstSkills = categoryData.skills.slice(0, limitPerCategory); // Take the first 'limitPerCategory' skills
      skills = skills.concat(firstSkills); // Merge with existing skills
    });

    return skills;
  }

  const handleDisplaySkills = () => {
    return firstNSkills(firstNSkillsPerCategory(displayedSkills, 2), 16);
  };

  return (
    <>
      <HeadingThree title="Technologies" />
      <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start -mt-2">
        {handleDisplaySkills().map((skill: SkillInterface, idx: number) => (
          <SkillTag key={idx} skill={skill} />
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
