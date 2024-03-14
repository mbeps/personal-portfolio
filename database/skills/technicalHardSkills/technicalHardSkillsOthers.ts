import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsOthers: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.GameMakerStudio]: {
    name: "GameMaker Studio 2",
    category: SkillCategoriesEnum.GameDevelopment,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.GameDevelopment],
  },
  [SkillSlugEnum.Symphony]: {
    name: "Symphony Solutions",
    category: SkillCategoriesEnum.Automation,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Java,
      SkillSlugEnum.Python,
      SkillSlugEnum.Automation,
      SkillSlugEnum.SDKs,
    ],
  },
};

export default technicalHardSkillsOthers;
