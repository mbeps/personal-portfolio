import SkillInterface, {
  SkillCategories,
  SkillTypes,
} from "@/interfaces/skills/SkillInterface";
import { mathematics } from "../generalSkills";

export const probability: SkillInterface = {
  name: "Probability",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "probability",
  relatedSkills: [mathematics],
};

export const statistics: SkillInterface = {
  name: "Statistics",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "statistics",
  relatedSkills: [mathematics],
};

export const calculus: SkillInterface = {
  name: "Calculus",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "calculus",
  relatedSkills: [mathematics],
};

export const trigonometry: SkillInterface = {
  name: "Trigonometry",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "trigonomtry",
  relatedSkills: [mathematics],
};

export const algebra: SkillInterface = {
  name: "Algebra",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "algebra",
  relatedSkills: [mathematics],
};

export const linearAlgebra: SkillInterface = {
  name: "Linear Algebra",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "linear-algebra",
  relatedSkills: [mathematics],
};

export const discrete: SkillInterface = {
  name: "Discrete",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "discrete-mathematics",
  relatedSkills: [mathematics],
};

export const geometry: SkillInterface = {
  name: "Geometry",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "geometry",
  relatedSkills: [mathematics],
};

export const logics: SkillInterface = {
  name: "Logics",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "logics",
  relatedSkills: [mathematics],
};

export const vectors: SkillInterface = {
  name: "Vectors",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "vectors",
  relatedSkills: [mathematics],
};

export const mechanics: SkillInterface = {
  name: "Mechanics",
  category: SkillCategories.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
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
