import { useMediaQuery } from "@/hooks/useMediaQuery";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import { useState } from "react";
import ExpandCollapseButton from "../ui/ExpandCollapseButton";
import SkillTag from "../tags/SkillTag";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";

interface CategorySkillDisplayProps {
  skillCategories: SkillsCategoryInterface[];
}

/**
 * Columnar display for grouped skills, used inside `SkillTableSection` and anywhere else we need category headings with SkillTags.
 *
 * @param skillCategories Groups produced by `buildSkillTableGroups`.
 * @returns Grid of `SkillTag` clusters plus an optional expand/collapse button.
 */
const CategorySkillDisplay: React.FC<CategorySkillDisplayProps> = ({
  skillCategories,
}) => {
  const [showAll, setShowAll] = useState(false);
  const normalizedCategories: SkillsCategoryInterface[] =
    skillCategories.map((category) => ({
      ...category,
      skills: Array.from(new Set(category.skills)),
    }));
  const shouldDisplayTitle: boolean = normalizedCategories.length > 1;
  const isTablet: boolean = useMediaQuery("(max-width: 976px)");

  const maxSkillCount: number = 18;
  const maxGroupCount: number = isTablet ? 2 : 3; // Number of columns to display

  let skillCount: number = 0;
  let groupCount: number = 0;
  let totalSkillsCount: number = 0;
  let displayedSkillsCount: number = 0;

  // Calculate displayedSkills, totalSkillsCount, and displayedSkillsCount in one pass
  const displayedSkills: SkillsCategoryInterface[] = showAll
    ? normalizedCategories.map((categoryData) => {
        totalSkillsCount += categoryData.skills.length;
        displayedSkillsCount += categoryData.skills.length;
        return categoryData;
      })
    : normalizedCategories.reduce(
        (acc: SkillsCategoryInterface[], categoryData) => {
          totalSkillsCount += categoryData.skills.length;

          if (skillCount < maxSkillCount && groupCount < maxGroupCount) {
            const filteredSkills = categoryData.skills.filter(
              (skillKey) => skillDatabaseMap[skillKey]?.isMainSkill
          );
          const skillsToDisplay = filteredSkills.length
            ? filteredSkills
            : categoryData.skills;

          const availableSlots = Math.min(
            maxSkillCount - skillCount,
            skillsToDisplay.length
          );
          const limitedSkills = skillsToDisplay.slice(0, availableSlots);

          if (limitedSkills.length > 0) {
            acc.push({
              skillCategoryName: categoryData.skillCategoryName,
              skills: limitedSkills,
            });

            skillCount += availableSlots;
            groupCount++;
            displayedSkillsCount += limitedSkills.length;
          }
          }

          return acc;
        },
        []
      );

  const shouldShowToggleButton: boolean =
    showAll || displayedSkillsCount < totalSkillsCount;

  function toggleShowAll(): void {
    setShowAll(!showAll);
  }

  // Determine grid style based on the number of categories
  const isTwoColumns: boolean = displayedSkills.length === 2;
  const gridStyle: string = shouldDisplayTitle
    ? `gap-4 grid md:grid-cols-2 ${
        isTwoColumns ? "lg:grid-cols-2" : "lg:grid-cols-3"
      }` // for multiple categories
    : "gap-4 grid grid-cols-1"; // for single category

  return (
    <div>
      <div className={gridStyle}>
        {displayedSkills.map((categoryData) => (
          <div key={categoryData.skillCategoryName} className="mb-6">
            {shouldDisplayTitle && <h4>{categoryData.skillCategoryName}</h4>}
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
