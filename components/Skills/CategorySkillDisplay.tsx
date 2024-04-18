import { useMediaQuery } from "@/hooks/useMediaQuery";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import { useState } from "react";
import ExpandCollapseButton from "../UI/ExpandCollapseButton";
import SkillTag from "../Tags/SkillTag";
import HeadingFour from "../Text/HeadingFour";

interface CategorySkillDisplayProps {
  skillCategories: SkillsCategoryInterface[];
}

/**
 * Component displaying skills in categories.
 * Foe example, programming languages, DevOps, Web Development, etc.
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

  const displayedSkills: SkillsCategoryInterface[] = showAll
    ? skillCategories
    : skillCategories.reduce((acc: SkillsCategoryInterface[], categoryData) => {
        if (skillCount < maxSkillCount && groupCount < maxGroupCount) {
          const availableSlots = Math.min(
            maxSkillCount - skillCount,
            categoryData.skills.length
          );
          const limitedSkills = categoryData.skills.slice(0, availableSlots);

          acc.push({
            skillCategoryName: categoryData.skillCategoryName,
            skills: limitedSkills,
          });

          skillCount += availableSlots;
          groupCount++;
        }
        return acc;
      }, []);

  const totalSkillCount: number = skillCategories.reduce(
    (acc, categoryData) => acc + Object.keys(categoryData.skills).length,
    0
  );

  const shouldShowToggleButton: boolean =
    totalSkillCount > skillCount || showAll;

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
