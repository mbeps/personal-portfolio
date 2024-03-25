import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

export default function getSkillsHashmapFromSlugArray(
  skills: Database<SkillInterface>,
  skillIDs: SkillSlugEnum[]
): Database<SkillInterface> {
  const filteredSkills: Database<SkillInterface> = {};

  skillIDs.forEach((id) => {
    if (skills[id]) {
      filteredSkills[id] = skills[id];
    }
  });

  return filteredSkills;
}
