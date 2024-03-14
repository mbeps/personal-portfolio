import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { java, javascript, python, typescript } from "../languages";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsTesting: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Jest]: {
    name: "Jest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript],
  },
  [SkillSlugEnum.Vitest]: {
    name: "Vitest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript],
  },
  [SkillSlugEnum.PyTest]: {
    name: "PyTest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python],
  },
  [SkillSlugEnum.UnitTest]: {
    name: "UnitTest",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python],
  },
  [SkillSlugEnum.JUnit]: {
    name: "JUnit",
    category: SkillCategoriesEnum.Testing,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [java],
  },
  [SkillSlugEnum.Cypress]: {
    name: "Cypress",
    category: SkillCategoriesEnum.Testing,
    skillType: SkillTypesEnum.Hard,
  },
  [SkillSlugEnum.ReactTestingLibrary]: {
    name: "React Testing Library",
    category: SkillCategoriesEnum.Testing,
    skillType: SkillTypesEnum.Hard,
  },
};

export default technicalHardSkillsTesting;
