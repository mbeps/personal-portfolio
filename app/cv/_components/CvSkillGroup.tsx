import React from "react";
import CategorisedSkillsInterface from "@/interfaces/skills/CategorisedSkillsInterface";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";

interface CvSkillGroupProps {
  group: CategorisedSkillsInterface;
}

const CvSkillGroup: React.FC<CvSkillGroupProps> = ({ group }) => {
  if (!group.skills || group.skills.length === 0) return null;

  const skillNames = group.skills
    .map((key) => skillDatabaseMap[key]?.name)
    .filter(Boolean)
    .join(", ");

  return (
    <div className="mb-2 break-inside-avoid flex flex-col md:flex-row">
      <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200 w-full md:w-1/3 mb-1 md:mb-0">
        {group.skillCategoryName}
      </h3>
      <div className="text-base text-neutral-600 dark:text-neutral-400 w-full md:w-2/3 flex flex-wrap gap-x-2 gap-y-1">
        {skillNames}
      </div>
    </div>
  );
};

export default CvSkillGroup;
