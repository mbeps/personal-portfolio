import SkillInterface from "@/interfaces/skills/SkillInterface";
import { useState } from "react";
import ExpandCollapseButton from "../Button/ExpandCollapseButton";
import SkillTag from "../Tags/SkillTag";
import HeadingFour from "../Text/HeadingFour";
import SkillsCategoryInterface from "@/interfaces/skills/SkillsCategoryInterface";

interface CategorySkillDisplayProps {
  skillCategories: SkillsCategoryInterface[];
}

const CategorySkillDisplay: React.FC<CategorySkillDisplayProps> = ({
  skillCategories,
}) => {
  const [showAll, setShowAll] = useState(false);
  const shouldDisplayTitle = skillCategories.length > 1;

  const maxSkillCount = 12;
  const maxGroupCount = 3;

  let skillCount = 0;
  let groupCount = 0;
  const displayedSkills = showAll
    ? skillCategories
    : skillCategories.reduce((acc: SkillsCategoryInterface[], categoryData) => {
        if (skillCount < maxSkillCount && groupCount < maxGroupCount) {
          const availableSlots = Math.min(
            maxSkillCount - skillCount,
            categoryData.skills.length,
          );
          acc.push({
            ...categoryData,
            skills: categoryData.skills.slice(0, availableSlots),
          });
          skillCount += availableSlots;
          groupCount++;
        }
        return acc;
      }, []);

  const totalSkillCount = skillCategories.reduce(
    (acc, categoryData) => acc + categoryData.skills.length,
    0,
  );

  const shouldShowToggleButton = totalSkillCount > skillCount || showAll;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine grid style based on the number of categories
  const gridStyle = shouldDisplayTitle
    ? "gap-4 grid md:grid-cols-2 lg:grid-cols-3" // for multiple categories
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
              {categoryData.skills.map((skill, index) => (
                <SkillTag key={skill.slug} skill={skill} />
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