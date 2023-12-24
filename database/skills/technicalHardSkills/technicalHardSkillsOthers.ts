import Skill from "@/types/skills";
import { gameDevelopment } from "../generalSkills";

export const gameMakerStudio: Skill = {
  name: "GameMaker Studio 2",
  category: "Game Development",
  skillType: "hard",
  slug: "gamemaker-studio",
  technicalGeneralSkills: [gameDevelopment],
};

const technicalHardSkillsGameDev: Skill[] = [gameMakerStudio];

export default technicalHardSkillsGameDev;
