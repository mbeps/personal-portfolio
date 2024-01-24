import SkillInterface from "@/interfaces/skills/SkillInterface";
import { mathematics } from "../generalSkills";

export const probability: SkillInterface = {
  name: "Probability",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "probability",
  relatedSkills: [mathematics],
};

export const statistics: SkillInterface = {
  name: "Statistics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "statistics",
  relatedSkills: [mathematics],
};

export const calculus: SkillInterface = {
  name: "Calculus",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "calculus",
  relatedSkills: [mathematics],
};

export const trigonometry: SkillInterface = {
  name: "Trigonometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "trigonomtry",
  relatedSkills: [mathematics],
};

export const algebra: SkillInterface = {
  name: "Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "algebra",
  relatedSkills: [mathematics],
};

export const linearAlgebra: SkillInterface = {
  name: "Linear Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "linear-algebra",
  relatedSkills: [mathematics],
};

export const discrete: SkillInterface = {
  name: "Discrete",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "discrete-mathematics",
  relatedSkills: [mathematics],
};

export const geometry: SkillInterface = {
  name: "Geometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "geometry",
  relatedSkills: [mathematics],
};

export const logics: SkillInterface = {
  name: "Logics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "logics",
  relatedSkills: [mathematics],
};

export const vectors: SkillInterface = {
  name: "Vectors",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "vectors",
  relatedSkills: [mathematics],
};

export const mechanics: SkillInterface = {
  name: "Mechanics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "mechanics",
  relatedSkills: [mathematics],
};

const technicalHardSkillsMaths: SkillInterface[] = [
  probability,
  statistics,
  calculus,
  trigonometry,
  algebra,
  linearAlgebra,
  discrete,
  geometry,
  logics,
  vectors,
  mechanics,
];

export default technicalHardSkillsMaths;
