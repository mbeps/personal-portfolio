import Skill from "@/types/skills";

export const jest: Skill = {
  name: "Jest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "jest",
};

export const vitest: Skill = {
  name: "Vitest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "vitest",
};

export const pytest: Skill = {
  name: "PyTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "pytest",
};

export const unittest: Skill = {
  name: "UnitTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "unittest",
};

export const junit: Skill = {
  name: "JUnit",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "junit",
};

export const cypress: Skill = {
  name: "Cypress",
  category: "Testing",
  skillType: "hard",
  slug: "cypress",
};

export const reactTestingLibrary: Skill = {
  name: "React Testing Library",
  category: "Testing",
  skillType: "hard",
  slug: "react-testing-library",
};

const technicalHardSkillsTesting: Skill[] = [
  jest,
  vitest,
  pytest,
  unittest,
  junit,
  cypress,
  reactTestingLibrary,
];

export default technicalHardSkillsTesting;
