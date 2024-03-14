import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsMachineLearning: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.ScikitLearn]: {
    name: "Scikit Learn",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.MachineLearning,
      SkillSlugEnum.DataScience,
      SkillSlugEnum.ContinuousIntegration,
      SkillSlugEnum.Hyperparameters,
      SkillSlugEnum.Boosting,
      SkillSlugEnum.NeuralNetworks,
    ],
  },
  [SkillSlugEnum.Pandas]: {
    name: "Pandas",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.DataScience,
      SkillSlugEnum.DataVisualisation,
    ],
  },
  [SkillSlugEnum.NumPy]: {
    name: "NumPy",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.DataScience,
      SkillSlugEnum.Mathematics,
    ],
  },
  [SkillSlugEnum.Matplotlib]: {
    name: "Matplotlib",
    category: SkillCategoriesEnum.DataScience,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.DataScience,
      SkillSlugEnum.DataVisualisation,
    ],
  },
  [SkillSlugEnum.Seaborn]: {
    name: "Seaborn",
    category: SkillCategoriesEnum.DataScience,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.DataScience,
      SkillSlugEnum.DataVisualisation,
    ],
  },
  [SkillSlugEnum.Keras]: {
    name: "Keras",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Python,
      SkillSlugEnum.MachineLearning,
      SkillSlugEnum.DataScience,
      SkillSlugEnum.ArtificialIntelligence,
      SkillSlugEnum.NeuralNetworks,
      SkillSlugEnum.DeepLearning,
    ],
  },
  [SkillSlugEnum.Jupyter]: {
    name: "Jupyter Notebooks",
    category: SkillCategoriesEnum.DataScience,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Python, SkillSlugEnum.DataScience],
  },
};

export default technicalHardSkillsMachineLearning;
