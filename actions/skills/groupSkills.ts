import { languages } from "@/constants/languages";
import { technologies } from "@/constants/technologies";
import { Skill } from "@/types/skills";

/**
 * Allows grouping the skills by category or by language.
 * Removes duplicates.
 * @param skills (Skill[]) The skills to organize
 * @returns (Record<string, Skill[]>): the skills organized by category
 */
const groupSkills = (groupedBy: string): Record<string, Skill[]> | Skill[] => {
  let organizedSkills: Record<string, Skill[]> | Skill[] = {};

  const removeDuplicates = (skills: Skill[]): Skill[] => {
    const skillSet = new Set();
    const uniqueSkills: Skill[] = [];

    skills.forEach((skill) => {
      const serializedSkill = JSON.stringify(skill);
      if (!skillSet.has(serializedSkill)) {
        skillSet.add(serializedSkill);
        uniqueSkills.push(skill);
      }
    });

    return uniqueSkills;
  };

  const allLanguageSkills = languages.flatMap((lang) => lang.skills || []);
  const allSkills = allLanguageSkills.concat(technologies);

  if (groupedBy === "language") {
    organizedSkills = languages.reduce((acc: Record<string, Skill[]>, lang) => {
      if (lang.skills) {
        acc[lang.skill] = removeDuplicates(lang.skills);
      }
      return acc;
    }, {});
    (organizedSkills as Record<string, Skill[]>)["Other"] =
      removeDuplicates(technologies);
  } else if (groupedBy === "category") {
    organizedSkills = allSkills.reduce(
      (acc: Record<string, Skill[]>, skill) => {
        const category = skill.category || "Other";
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
      },
      {}
    );

    Object.keys(organizedSkills as Record<string, Skill[]>).forEach(
      (category) => {
        (organizedSkills as Record<string, Skill[]>)[category] =
          removeDuplicates(
            (organizedSkills as Record<string, Skill[]>)[category]
          );
      }
    );
  } else if (groupedBy === "skillType") {
    organizedSkills = allSkills.reduce(
      (acc: Record<string, Skill[]>, skill) => {
        const skillType = skill.skillType || "Other";
        if (!acc[skillType]) {
          acc[skillType] = [];
        }
        acc[skillType].push(skill);
        return acc;
      },
      {}
    );

    Object.keys(organizedSkills as Record<string, Skill[]>).forEach(
      (skillType) => {
        (organizedSkills as Record<string, Skill[]>)[skillType] =
          removeDuplicates(
            (organizedSkills as Record<string, Skill[]>)[skillType]
          );
      }
    );
  } else {
    // groupedBy === "none"
    organizedSkills = removeDuplicates(allSkills);
  }

  return organizedSkills;
};

export default groupSkills;
