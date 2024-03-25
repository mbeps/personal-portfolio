import SkillKeysEnum from "@/enums/DatabaseKeysEnums/SkillKeysEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function getSkillsHashmapFromSlugArray(
  skills: Database<SkillInterface>,
  skillIDs: SkillKeysEnum[]
): Database<SkillInterface> {
  const filteredSkills: Database<SkillInterface> = {};

  skillIDs.forEach((id) => {
    if (skills[id]) {
      filteredSkills[id] = skills[id];
    }
  });

  return filteredSkills;
}
