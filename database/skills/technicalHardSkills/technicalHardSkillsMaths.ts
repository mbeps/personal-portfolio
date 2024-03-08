import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import { mathematics } from "../generalSkills";

export const probability: SkillInterface = {
  name: "Probability",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "probability",
  relatedSkills: [mathematics],
};

export const statistics: SkillInterface = {
  name: "Statistics",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "statistics",
  relatedSkills: [mathematics],
};

export const calculus: SkillInterface = {
  name: "Calculus",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "calculus",
  relatedSkills: [mathematics],
};

export const trigonometry: SkillInterface = {
  name: "Trigonometry",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "trigonomtry",
  relatedSkills: [mathematics],
};

export const algebra: SkillInterface = {
  name: "Algebra",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "algebra",
  relatedSkills: [mathematics],
};

export const linearAlgebra: SkillInterface = {
  name: "Linear Algebra",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "linear-algebra",
  relatedSkills: [mathematics],
};

export const discrete: SkillInterface = {
  name: "Discrete",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "discrete-mathematics",
  relatedSkills: [mathematics],
};

export const geometry: SkillInterface = {
  name: "Geometry",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "geometry",
  relatedSkills: [mathematics],
};

export const logics: SkillInterface = {
  name: "Logics",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "logics",
  relatedSkills: [mathematics],
};

export const vectors: SkillInterface = {
  name: "Vectors",
  category: SkillCategoriesEnum.Mathematics,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "vectors",
  relatedSkills: [mathematics],
};

export const mechanics: SkillInterface = {
  name: "Mechanics",
  category: SkillCategoriesEnum.Mathematics,
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
