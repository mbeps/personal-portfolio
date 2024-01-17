import SkillInterface from "@/interfaces/skills/SkillInterface";
import { gameDevelopment } from "../generalSkills";

export const gameMakerStudio: SkillInterface = {
  name: "GameMaker Studio 2",
  category: "Game Development",
  skillType: "hard",
  slug: "gamemaker-studio",
  technicalGeneralSkills: [gameDevelopment],
};

const technicalHardSkillsGameDev: SkillInterface[] = [gameMakerStudio];

export default technicalHardSkillsGameDev;
