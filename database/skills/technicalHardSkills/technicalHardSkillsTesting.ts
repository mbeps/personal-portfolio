import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsTesting: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Jest]: {
    name: "Jest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.JavaScript, SkillSlugEnum.TypeScript],
  },
  [SkillSlugEnum.Vitest]: {
    name: "Vitest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.JavaScript, SkillSlugEnum.TypeScript],
  },
  [SkillSlugEnum.PyTest]: {
    name: "PyTest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Python],
  },
  [SkillSlugEnum.UnitTest]: {
    name: "UnitTest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Python],
  },
  [SkillSlugEnum.JUnit]: {
    name: "JUnit",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Java],
  },
  [SkillSlugEnum.Cypress]: {
    name: "Cypress",
    category: SkillCategoriesEnum.Testing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.JavaScript, SkillSlugEnum.TypeScript],
  },
  [SkillSlugEnum.ReactTestingLibrary]: {
    name: "React Testing Library",
    category: SkillCategoriesEnum.Testing,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.ReactJS,
    ],
  },
};

export default technicalHardSkillsTesting;
