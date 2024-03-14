import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsFullStackWebDev: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.NextJS]: {
    name: "Next.js",
    category: SkillCategoriesEnum.FullStackWebDevelopment,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,

    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
      SkillSlugEnum.ReactJS,
    ],
  },

  [SkillSlugEnum.AngularJS]: {
    name: "Angular",
    category: SkillCategoriesEnum.FullStackWebDevelopment,
    skillType: SkillTypesEnum.Hard,

    relatedSkills: [
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
    ],
  },
  [SkillSlugEnum.NuxtJS]: {
    name: "Nuxt.js",
    category: SkillCategoriesEnum.FullStackWebDevelopment,
    skillType: SkillTypesEnum.Hard,

    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
      SkillSlugEnum.VueJS,
    ],
  },
  [SkillSlugEnum.SvelteKit]: {
    name: "SvelteKit",
    category: SkillCategoriesEnum.FullStackWebDevelopment,
    skillType: SkillTypesEnum.Hard,

    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.WebDevelopment,
      SkillSlugEnum.UserCentricDesign,
      SkillSlugEnum.SvelteJS,
    ],
  },
};

export default technicalHardSkillsFullStackWebDev;
