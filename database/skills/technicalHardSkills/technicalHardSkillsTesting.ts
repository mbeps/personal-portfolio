import SkillInterface from "@/interfaces/skills/SkillInterface";
import { java, javascript, python, typescript } from "../languages";

export const jest: SkillInterface = {
  name: "Jest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "jest",
  relatedSkills: [javascript, typescript],
};

export const vitest: SkillInterface = {
  name: "Vitest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "vitest",
  relatedSkills: [javascript, typescript],
};

export const pytest: SkillInterface = {
  name: "PyTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "pytest",
  relatedSkills: [python],
};

export const unittest: SkillInterface = {
  name: "UnitTest",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "unittest",
  relatedSkills: [python],
};

export const junit: SkillInterface = {
  name: "JUnit",
  category: "Testing",
  isMainSkill: true,
  skillType: "hard",
  slug: "junit",
  relatedSkills: [java],
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
