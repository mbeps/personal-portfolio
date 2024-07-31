import { useMediaQuery } from "@/hooks/useMediaQuery";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import { useState } from "react";
import ExpandCollapseButton from "../UI/ExpandCollapseButton";
import SkillTag from "../Tags/SkillTag";
import HeadingFour from "../Text/HeadingFour";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";

interface CategorySkillDisplayProps {
  skillCategories: SkillsCategoryInterface[];
}

/**
 * Component displaying skills in categories.
 * For example, programming languages, DevOps, Web Development, etc.
 * These are from the skills database `skillTypes` property as defined in {@link SkillInterface}.
 * If there is only one category, the title of the category is not displayed and the skills are displayed in a single column.
 *
 * @param skillCategories Skills to be displayed in the table in categories
 * @returns A section containing a table of skills grouped by categories
 */
const CategorySkillDisplay: React.FC<CategorySkillDisplayProps> = ({
  skillCategories,
}) => {
  const [showAll, setShowAll] = useState(false);
  const shouldDisplayTitle: boolean = skillCategories.length > 1;
  const isTablet: boolean = useMediaQuery("(max-width: 976px)");

  const maxSkillCount: number = 18;
  const maxGroupCount: number = isTablet ? 2 : 3; // Number of columns to display

  let skillCount: number = 0;
  let groupCount: number = 0;

  function filterSkills(skills: SkillDatabaseKeys[], onlyMain: boolean) {
    return skills.filter((skillKey) =>
      onlyMain ? skillDatabaseMap[skillKey]?.isMainSkill : true
    );
  }

  const totalMainSkillsCount: number = skillCategories.reduce(
    (acc, categoryData) => {
      return (
        acc +
        categoryData.skills.filter(
          (skillKey) => skillDatabaseMap[skillKey]?.isMainSkill
        ).length
      );
    },
    0
  );

  const displayedSkills: SkillsCategoryInterface[] = showAll
    ? skillCategories
    : skillCategories.reduce((acc: SkillsCategoryInterface[], categoryData) => {
        if (skillCount < maxSkillCount && groupCount < maxGroupCount) {
          const filteredSkills: SkillDatabaseKeys[] = filterSkills(
            categoryData.skills,
            true
          );
          const skillsToDisplay: SkillDatabaseKeys[] = filteredSkills.length
            ? filteredSkills
            : categoryData.skills;

          const availableSlots: number = Math.min(
            maxSkillCount - skillCount,
            skillsToDisplay.length
          );
          const limitedSkills: SkillDatabaseKeys[] = skillsToDisplay.slice(
            0,
            availableSlots
          );

          if (limitedSkills.length > 0) {
            acc.push({
              skillCategoryName: categoryData.skillCategoryName,
              skills: limitedSkills,
            });

            skillCount += availableSlots;
            groupCount++;
          }
        }
        return acc;
      }, []);

  const displayedMainSkillsCount: number = displayedSkills.reduce(
    (acc, categoryData) => {
      return (
        acc +
        categoryData.skills.filter(
          (skillKey) => skillDatabaseMap[skillKey]?.isMainSkill
        ).length
      );
    },
    0
  );

  const shouldShowToggleButton: boolean =
    displayedMainSkillsCount < totalMainSkillsCount;

  function toggleShowAll(): void {
    setShowAll(!showAll);
  }

  // Determine grid style based on the number of categories
  const gridStyle: string = shouldDisplayTitle
    ? `gap-4 grid md:grid-cols-2 lg:grid-cols-3` // for multiple categories
    : "gap-4 grid grid-cols-1"; // for single category

  return (
    <div>
      <div className={gridStyle}>
        {displayedSkills.map((categoryData) => (
          <div key={categoryData.skillCategoryName} className="mb-6">
            {shouldDisplayTitle && (
              <HeadingFour title={categoryData.skillCategoryName} />
            )}
            <div className="flex flex-wrap justify-center md:justify-start">
              {categoryData.skills.map((skillSlug) => (
                <SkillTag key={skillSlug} skillKey={skillSlug} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {shouldShowToggleButton && (
        <div className="flex justify-center md:justify-center">
          <ExpandCollapseButton isExpanded={showAll} onToggle={toggleShowAll} />
        </div>
      )}
    </div>
  );
};

export default CategorySkillDisplay;
