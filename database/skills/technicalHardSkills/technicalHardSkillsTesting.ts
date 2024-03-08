import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, {
  SkillTypesEnum,
} from "@/interfaces/skills/SkillInterface";
import { java, javascript, python, typescript } from "../languages";

export const jest: SkillInterface = {
  name: "Jest",
  category: SkillCategoriesEnum.Testing,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "jest",
  relatedSkills: [javascript, typescript],
};

export const vitest: SkillInterface = {
  name: "Vitest",
  category: SkillCategoriesEnum.Testing,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "vitest",
  relatedSkills: [javascript, typescript],
};

export const pytest: SkillInterface = {
  name: "PyTest",
  category: SkillCategoriesEnum.Testing,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "pytest",
  relatedSkills: [python],
};

export const unittest: SkillInterface = {
  name: "UnitTest",
  category: SkillCategoriesEnum.Testing,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "unittest",
  relatedSkills: [python],
};

export const junit: SkillInterface = {
  name: "JUnit",
  category: SkillCategoriesEnum.Testing,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "junit",
  relatedSkills: [java],
};

export const cypress: SkillInterface = {
  name: "Cypress",
  category: SkillCategoriesEnum.Testing,
  skillType: SkillTypesEnum.Hard,
  slug: "cypress",
};

export const reactTestingLibrary: SkillInterface = {
  name: "React Testing Library",
  category: SkillCategoriesEnum.Testing,
  skillType: SkillTypesEnum.Hard,
  slug: "react-testing-library",
};

const technicalHardSkillsTesting: SkillInterface[] = [
  jest,
  vitest,
  pytest,
  unittest,
  junit,
  cypress,
  reactTestingLibrary,
];

export default technicalHardSkillsTesting;
