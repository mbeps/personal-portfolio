import Skill from "@/types/skills";

const groupSkills = (
  groupedBy: string,
  skills: Skill[]
): Record<string, Skill[]> => {
  let organizedSkills: Record<string, Skill[]> = {};

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

  if (groupedBy === "language") {
    organizedSkills = skills.reduce((acc: Record<string, Skill[]>, skill) => {
      if (skill.technicalGeneralSkills) {
        acc[skill.name] = removeDuplicates(skill.technicalGeneralSkills);
      }
      return acc;
    }, {});
  } else if (groupedBy === "category") {
    organizedSkills = skills.reduce((acc: Record<string, Skill[]>, skill) => {
      const category = skill.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {});
  } else if (groupedBy === "skill-type") {
    organizedSkills = skills.reduce((acc: Record<string, Skill[]>, skill) => {
      const skillType = skill.skillType || "Other";
      if (!acc[skillType]) {
        acc[skillType] = [];
      }
      acc[skillType].push(skill);
      return acc;
    }, {});
  } else {
    // groupedBy === "none"
    organizedSkills["None"] = removeDuplicates(skills);
  }

  // Remove duplicates for each category
  for (const key in organizedSkills) {
    organizedSkills[key] = removeDuplicates(organizedSkills[key]);
  }

  return organizedSkills;
};

export default groupSkills;
