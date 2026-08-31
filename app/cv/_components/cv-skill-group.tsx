import type React from "react";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import type CategorisedSkillsInterface from "@/interfaces/skills/categorised-skills-interface";

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
    <div className="mb-2 flex break-inside-avoid flex-col md:flex-row">
      <h3 className="mb-1 w-full font-semibold text-base text-neutral-800 md:mb-0 md:w-1/3 dark:text-neutral-200">
        {group.skillCategoryName}
      </h3>
      <div className="flex w-full flex-wrap gap-x-2 gap-y-1 text-base text-neutral-600 md:w-2/3 dark:text-neutral-400">
        {skillNames}
      </div>
    </div>
  );
};

export default CvSkillGroup;
