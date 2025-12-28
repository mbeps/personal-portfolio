import React from "react";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillCategoriesEnum from "@/enums/skill/SkillCategoriesEnum";
import SkillTypesEnum from "@/enums/skill/SkillTypesEnum";

interface CvItemSkillsProps {
  skills: SkillDatabaseKeys[];
  showArchived?: boolean;
}

const CvItemSkills: React.FC<CvItemSkillsProps> = ({
  skills,
  showArchived = false,
}) => {
  if (!skills || skills.length === 0) return null;

  const languages: string[] = [];
  const technologies: string[] = [];
  const technicalSkills: string[] = [];

  skills.forEach((key) => {
    const skill = skillDatabaseMap[key];
    if (!skill) return;

    // Filter by main skill if not showing archived
    if (!showArchived && !skill.isMainSkill) return;

    if (skill.category === SkillCategoriesEnum.ProgrammingLanguages) {
      languages.push(skill.name);
    } else if (skill.skillType === SkillTypesEnum.Technology) {
      technologies.push(skill.name);
    } else if (skill.skillType === SkillTypesEnum.Technical) {
      technicalSkills.push(skill.name);
    }
  });

  const skillGroups = [
    { title: "Languages", skills: languages },
    { title: "Technologies", skills: technologies },
    { title: "Technical Skills", skills: technicalSkills },
  ].filter((group) => group.skills.length > 0);

  if (skillGroups.length === 0) return null;

  return (
    <div className="mt-3">
      <h4 className="text-lg font-bold text-neutral-700 dark:text-neutral-300 mb-2">
        Skills
      </h4>
      <div className="space-y-1">
        {skillGroups.map((group) => (
          <div key={group.title} className="flex flex-col md:flex-row">
            <span className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 w-full md:w-1/3 mb-1 md:mb-0">
              {group.title}:
            </span>
            <span className="text-lg text-neutral-600 dark:text-neutral-400 w-full md:w-2/3">
              {group.skills.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvItemSkills;
