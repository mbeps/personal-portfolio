import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { userCentricDesign, webDevelopment } from "../generalSkills";
import { javascript, typescript } from "../languages";
import { react, svelte, vue } from "./technicalHardSkillsFrontendWebDev";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsFullStackWebDev: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.NextJS]: {
    name: "Next.js",
    category: SkillCategoriesEnum.FullStackWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,

    relatedSkills: [
      javascript,
      typescript,
      webDevelopment,
      userCentricDesign,
      react,
    ],
  },

  [SkillSlugEnum.AngularJS]: {
    name: "Angular",
    category: SkillCategoriesEnum.FullStackWebDevelopment,
    skillType: SkillTypesEnum.Hard,

    relatedSkills: [webDevelopment, userCentricDesign],
  },
  [SkillSlugEnum.NuxtJS]: {
    name: "Nuxt.js",
    category: SkillCategoriesEnum.FullStackWebDevelopment,
    skillType: SkillTypesEnum.Hard,

    relatedSkills: [
      javascript,
      typescript,
      webDevelopment,
      userCentricDesign,
      vue,
    ],
  },
  [SkillSlugEnum.SvelteKit]: {
    name: "SvelteKit",
    category: SkillCategoriesEnum.FullStackWebDevelopment,
    skillType: SkillTypesEnum.Hard,

    relatedSkills: [
      javascript,
      typescript,
      webDevelopment,
      userCentricDesign,
      svelte,
    ],
  },
};

export default technicalHardSkillsFullStackWebDev;
