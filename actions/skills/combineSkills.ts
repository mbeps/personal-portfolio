import SkillInterface from "@/interfaces/skills/SkillInterface";
import getAssociatedSkillsFromList from "./getAssociatedSkillsFromList";

// combines directly stored skills with associated skills from the skills list
export default function combineSkills(
  skills: SkillInterface[],
): SkillInterface[] {
  return getAssociatedSkillsFromList(skills, "all").concat(skills);
}
