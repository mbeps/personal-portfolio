import SkillInterface from "@/interfaces/skills/SkillInterface";
import { mathematics } from "../generalSkills";

export const probability: SkillInterface = {
  name: "Probability",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "probability",
  technicalGeneralSkills: [mathematics],
};

export const statistics: SkillInterface = {
  name: "Statistics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "statistics",
  technicalGeneralSkills: [mathematics],
};

export const calculus: SkillInterface = {
  name: "Calculus",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "calculus",
  technicalGeneralSkills: [mathematics],
};

export const trigonometry: SkillInterface = {
  name: "Trigonometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "trigonomtry",
  technicalGeneralSkills: [mathematics],
};

export const algebra: SkillInterface = {
  name: "Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "algebra",
  technicalGeneralSkills: [mathematics],
};

export const linearAlgebra: SkillInterface = {
  name: "Linear Algebra",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "linear-algebra",
  technicalGeneralSkills: [mathematics],
};

export const discrete: SkillInterface = {
  name: "Discrete",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "discrete-mathematics",
  technicalGeneralSkills: [mathematics],
};

export const geometry: SkillInterface = {
  name: "Geometry",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "geometry",
  technicalGeneralSkills: [mathematics],
};

export const logics: SkillInterface = {
  name: "Logics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "logics",
  technicalGeneralSkills: [mathematics],
};

export const vectors: SkillInterface = {
  name: "Vectors",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "vectors",
  technicalGeneralSkills: [mathematics],
};

export const mechanics: SkillInterface = {
  name: "Mechanics",
  category: "Mathematics",
  isMainSkill: true,
  skillType: "hard",
  slug: "mechanics",
  technicalGeneralSkills: [mathematics],
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
