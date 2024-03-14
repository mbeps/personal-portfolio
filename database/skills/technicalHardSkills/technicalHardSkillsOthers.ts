import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { gameDevelopment } from "../generalSkills";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsOthers: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.GameMakerStudio]: {
    name: "GameMaker Studio 2",
    category: SkillCategoriesEnum.GameDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [gameDevelopment],
  },
  [SkillSlugEnum.Symphony]: {
    name: "Symphony Solutions",
    category: SkillCategoriesEnum.Automation,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [],
  },
};

export default technicalHardSkillsOthers;
