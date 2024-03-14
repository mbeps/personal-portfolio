import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsMaths: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Probability]: {
    name: "Probability",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Mathematics,
      SkillSlugEnum.MachineLearning,
      SkillSlugEnum.DeepLearning,
      SkillSlugEnum.ArtificialIntelligence,
    ],
  },
  [SkillSlugEnum.Statistics]: {
    name: "Statistics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Mathematics,
      SkillSlugEnum.MachineLearning,
      SkillSlugEnum.DeepLearning,
      SkillSlugEnum.ArtificialIntelligence,
    ],
  },
  [SkillSlugEnum.Calculus]: {
    name: "Calculus",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Mathematics,
      SkillSlugEnum.MachineLearning,
      SkillSlugEnum.DeepLearning,
      SkillSlugEnum.ArtificialIntelligence,
    ],
  },
  [SkillSlugEnum.Trigonometry]: {
    name: "Trigonometry",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Mathematics],
  },
  [SkillSlugEnum.Algebra]: {
    name: "Algebra",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Mathematics,
      SkillSlugEnum.MachineLearning,
      SkillSlugEnum.DeepLearning,
      SkillSlugEnum.ArtificialIntelligence,
    ],
  },
  [SkillSlugEnum.LinearAlgebra]: {
    name: "Linear Algebra",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Mathematics,
      SkillSlugEnum.MachineLearning,
      SkillSlugEnum.DeepLearning,
      SkillSlugEnum.ArtificialIntelligence,
    ],
  },
  [SkillSlugEnum.Discrete]: {
    name: "Discrete",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Mathematics],
  },
  [SkillSlugEnum.Geometry]: {
    name: "Geometry",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Mathematics],
  },
  [SkillSlugEnum.Logics]: {
    name: "Logics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Mathematics],
  },
  [SkillSlugEnum.Mechanics]: {
    name: "Mechanics",
    category: SkillCategoriesEnum.Mathematics,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Mathematics],
  },
};

export default technicalHardSkillsMaths;
