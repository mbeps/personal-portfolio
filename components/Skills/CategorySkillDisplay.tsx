import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";
import { useState } from "react";
import ExpandCollapseButton from "../Button/ExpandCollapseButton";
import SkillTag from "../Tags/SkillTag";
import HeadingFour from "../Text/HeadingFour";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

interface CategorySkillDisplayProps {
  skillCategories: SkillsCategoryInterface[];
}

const CategorySkillDisplay: React.FC<CategorySkillDisplayProps> = ({
  skillCategories,
}) => {
  const [showAll, setShowAll] = useState(false);
  const shouldDisplayTitle = skillCategories.length > 1;
  const isTablet = useMediaQuery("(max-width: 976px)");

  const maxSkillCount = 12;
  const maxGroupCount = isTablet ? 2 : 3; // Number of columns to display

  let skillCount = 0;
  let groupCount = 0;

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

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

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
