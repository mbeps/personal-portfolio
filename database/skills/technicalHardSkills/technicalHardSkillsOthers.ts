import Skill from "@/types/skills";
import { gameDevelopment } from "../generalSkills";

export const zod: Skill = {
  name: "Zod",
  category: "Core Computer Science",
  skillType: "hard",
  slug: "zod",
};

export const gameMakerStudio: Skill = {
  name: "GameMaker Studio 2",
  category: "Game Development",
  skillType: "hard",
  slug: "gamemaker-studio",
  technicalGeneralSkills: [gameDevelopment],
};

const technicalHardSkillsGameDev: Skill[] = [zod, gameMakerStudio];

export default technicalHardSkillsGameDev;
