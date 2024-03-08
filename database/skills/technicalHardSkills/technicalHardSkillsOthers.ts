import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { gameDevelopment } from "../generalSkills";
import SkillTypesEnum from "@/enums/SkillTypesEnum";

export const gameMakerStudio: SkillInterface = {
  name: "GameMaker Studio 2",
  category: SkillCategoriesEnum.GameDevelopment,
  skillType: SkillTypesEnum.Hard,
  slug: "gamemaker-studio",
  relatedSkills: [gameDevelopment],
};

export const symphony: SkillInterface = {
  name: "Symphony Solutions",
  category: SkillCategoriesEnum.Automation,
  skillType: SkillTypesEnum.Hard,
  slug: "symphony-solutions",
  relatedSkills: [gameDevelopment],
};

const technicalHardSkillsOthers: SkillInterface[] = [gameMakerStudio, symphony];

export default technicalHardSkillsOthers;
