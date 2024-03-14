import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { mathematics } from "../generalSkills";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsMaths: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Probability]: {
    name: "Probability",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
  [SkillSlugEnum.Statistics]: {
    name: "Statistics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
  [SkillSlugEnum.Calculus]: {
    name: "Calculus",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
  [SkillSlugEnum.Trigonometry]: {
    name: "Trigonometry",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
  [SkillSlugEnum.Algebra]: {
    name: "Algebra",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
  [SkillSlugEnum.LinearAlgebra]: {
    name: "Linear Algebra",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
  [SkillSlugEnum.Discrete]: {
    name: "Discrete",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
  [SkillSlugEnum.Geometry]: {
    name: "Geometry",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
  [SkillSlugEnum.Logics]: {
    name: "Logics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
  [SkillSlugEnum.Mechanics]: {
    name: "Mechanics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [mathematics],
  },
};

export default technicalHardSkillsMaths;
