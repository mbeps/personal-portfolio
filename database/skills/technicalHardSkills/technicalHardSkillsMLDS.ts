import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  artificialIntelligence,
  boosting,
  dataScience,
  dataVisualisation,
  hyperparameters,
  machineLearning,
  mathematics,
  neuralNetworks,
} from "../generalSkills";
import { python } from "../languages";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsMachineLearning: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.ScikitLearn]: {
    name: "Scikit Learn",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      python,
      machineLearning,
      dataScience,
      artificialIntelligence,
      hyperparameters,
      boosting,
      neuralNetworks,
    ],
  },
  [SkillSlugEnum.Pandas]: {
    name: "Pandas",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python, dataScience, dataVisualisation],
  },
  [SkillSlugEnum.NumPy]: {
    name: "NumPy",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python, dataScience, mathematics],
  },
  [SkillSlugEnum.Matplotlib]: {
    name: "Matplotlib",
    category: SkillCategoriesEnum.DataScience,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python, dataScience, dataVisualisation],
  },
  [SkillSlugEnum.Seaborn]: {
    name: "Seaborn",
    category: SkillCategoriesEnum.DataScience,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python, dataScience, dataVisualisation],
  },
  [SkillSlugEnum.Keras]: {
    name: "Keras",
    category: SkillCategoriesEnum.ArtificialIntelligence,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      python,
      machineLearning,
      dataScience,
      artificialIntelligence,
      neuralNetworks,
    ],
  },
  [SkillSlugEnum.Jupyter]: {
    name: "Jupyter Notebooks",
    category: SkillCategoriesEnum.DataScience,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python, dataScience],
  },
};

export default technicalHardSkillsMachineLearning;
