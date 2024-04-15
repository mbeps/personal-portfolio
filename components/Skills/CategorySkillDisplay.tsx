import { useMediaQuery } from "@/hooks/useMediaQuery";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import { useState } from "react";
import ExpandCollapseButton from "../Button/ExpandCollapseButton";
import SkillTag from "../Tags/SkillTag";
import HeadingFour from "../Text/HeadingFour";

interface CategorySkillDisplayProps {
  skillCategories: SkillsCategoryInterface[];
  maxSkillsPerCategory?: number;
}

/**
 * Component displaying skills in categories.
 * Foe example, programming languages, DevOps, Web Development, etc.
 * These are from the skills database `skillTypes` property as defined in {@link SkillInterface}.
 * If there is only one category, the title of the category is not displayed and the skills are displayed in a single column.
 *
 * @param skillCategories Skills to be displayed in the table in categories
 * @param maxSkillsPerCategory Maximum number of skills to display per category
 * @returns A section containing a table of skills grouped by categories
 */
const CategorySkillDisplay: React.FC<CategorySkillDisplayProps> = ({
  skillCategories,
  maxSkillsPerCategory = 5,
}) => {
  const [showAll, setShowAll] = useState(false);
  const shouldDisplayTitle: boolean = skillCategories.length > 1;
  const isTablet: boolean = useMediaQuery("(max-width: 976px)");

  const maxGroupCount: number = isTablet ? 2 : 3; // Number of columns to display

  const displayedSkills: SkillsCategoryInterface[] = showAll
    ? skillCategories
    : skillCategories.slice(0, maxGroupCount).map((categoryData) => ({
        skillCategoryName: categoryData.skillCategoryName,
        skills: categoryData.skills.slice(0, maxSkillsPerCategory),
      }));

  const shouldShowToggleButton: boolean =
    skillCategories.some(
      (categoryData) => categoryData.skills.length > maxSkillsPerCategory
    ) || showAll;

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
