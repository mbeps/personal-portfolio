import Skill from "@/types/skills";
import softSkills from "./softSkills";
import hardSkills from "./hardSkills";
import generalSkills from "./generalSkills";

const allSkills: Skill[] = [...hardSkills, ...generalSkills, ...softSkills];

export const technologies: Skill[] = hardSkills.filter(
  (skill) => skill.isMainSkill
);

export default allSkills;
