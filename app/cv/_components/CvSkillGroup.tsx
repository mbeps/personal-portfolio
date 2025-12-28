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
      <h3 className="text-lg font-bold text-neutral-700 dark:text-neutral-300 w-full md:w-1/3 mb-1 md:mb-0">
        {group.skillCategoryName}
      </h3>
      <div className="text-lg text-neutral-600 dark:text-neutral-400 w-full md:w-2/3">
        {skillNames}
      </div>
    </div>
  );
};

export default CvSkillGroup;
