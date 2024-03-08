import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import { gameDevelopment } from "../generalSkills";

export const gameMakerStudio: SkillInterface = {
  name: "GameMaker Studio 2",
  category: SkillCategoriesEnum.GameDevelopment,
  skillType: SkillTypes.Hard,
  slug: "gamemaker-studio",
  relatedSkills: [gameDevelopment],
};

export const symphony: SkillInterface = {
  name: "Symphony Solutions",
  category: SkillCategoriesEnum.Automation,
  skillType: SkillTypes.Hard,
  slug: "symphony-solutions",
  relatedSkills: [gameDevelopment],
};

const technicalHardSkillsOthers: SkillInterface[] = [gameMakerStudio, symphony];

export default technicalHardSkillsOthers;
