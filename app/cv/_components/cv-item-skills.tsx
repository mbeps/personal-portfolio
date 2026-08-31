import type React from "react";
import type SkillDatabaseKeys from "@/database/skills/skill-database-keys";
import skillDatabaseMap from "@/database/skills/skill-database-map";
import SkillCategoriesEnum from "@/enums/skill/skill-categories-enum";
import SkillTypesEnum from "@/enums/skill/skill-types-enum";

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
      <h4 className="mb-2 font-bold text-neutral-500 text-xs uppercase tracking-widest dark:text-neutral-400">
        Skills
      </h4>
      <div className="space-y-1">
        {skillGroups.map((group) => (
          <div key={group.title} className="flex flex-col md:flex-row">
            <span className="mb-1 w-full font-semibold text-base text-neutral-800 md:mb-0 md:w-1/3 dark:text-neutral-200">
              {group.title}:
            </span>
            <span className="w-full text-base text-neutral-600 md:w-2/3 dark:text-neutral-400">
              {group.skills.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvItemSkills;
