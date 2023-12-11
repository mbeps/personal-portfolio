import { Skill } from "@/types/skills";
import softSkills from "./skills/softSkills";
import hardSkills from "./skills/hardSkills";
import generalSkills from "./skills/generalSkills";

const allSkills: Skill[] = [...hardSkills, ...generalSkills, ...softSkills];

export default allSkills;
