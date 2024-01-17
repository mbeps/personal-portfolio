import SkillInterface from "@/interfaces/skills/SkillInterface";

export const jest: SkillInterface = {
  name: "Jest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "jest",
};

export const vitest: SkillInterface = {
  name: "Vitest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "vitest",
};

export const pytest: SkillInterface = {
  name: "PyTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "pytest",
};

export const unittest: SkillInterface = {
  name: "UnitTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "unittest",
};

export const junit: SkillInterface = {
  name: "JUnit",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "junit",
};

export const cypress: SkillInterface = {
  name: "Cypress",
  category: "Testing",
  skillType: "hard",
  slug: "cypress",
};

export const reactTestingLibrary: SkillInterface = {
  name: "React Testing Library",
  category: "Testing",
  skillType: "hard",
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
