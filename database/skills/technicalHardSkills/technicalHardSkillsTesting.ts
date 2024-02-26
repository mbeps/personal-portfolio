import SkillInterface, {
  SkillCategories,
  SkillTypes,
} from "@/interfaces/skills/SkillInterface";
import { java, javascript, python, typescript } from "../languages";

export const jest: SkillInterface = {
  name: "Jest",
  category: SkillCategories.Testing,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "jest",
  relatedSkills: [javascript, typescript],
};

export const vitest: SkillInterface = {
  name: "Vitest",
  category: SkillCategories.Testing,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "vitest",
  relatedSkills: [javascript, typescript],
};

export const pytest: SkillInterface = {
  name: "PyTest",
  category: SkillCategories.Testing,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "pytest",
  relatedSkills: [python],
};

export const unittest: SkillInterface = {
  name: "UnitTest",
  category: SkillCategories.Testing,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "unittest",
  relatedSkills: [python],
};

export const junit: SkillInterface = {
  name: "JUnit",
  category: SkillCategories.Testing,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "junit",
  relatedSkills: [java],
};

export const cypress: SkillInterface = {
  name: "Cypress",
  category: SkillCategories.Testing,
  skillType: SkillTypes.Hard,
  slug: "cypress",
};

export const reactTestingLibrary: SkillInterface = {
  name: "React Testing Library",
  category: SkillCategories.Testing,
  skillType: SkillTypes.Hard,
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
