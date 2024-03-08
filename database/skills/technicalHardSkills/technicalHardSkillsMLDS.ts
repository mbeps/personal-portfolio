import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
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

export const scikitLearn: SkillInterface = {
  name: "Scikit Learn",
  category: SkillCategoriesEnum.ArtificialIntelligence,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "scikit-learn",
  relatedSkills: [
    python,
    machineLearning,
    dataScience,
    artificialIntelligence,
    hyperparameters,
    boosting,
    neuralNetworks,
  ],
};

export const pandas: SkillInterface = {
  name: "Pandas",
  category: SkillCategoriesEnum.ArtificialIntelligence,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "pandas",
  relatedSkills: [python, dataScience, dataVisualisation],
};

export const numpy: SkillInterface = {
  name: "NumPy",
  category: SkillCategoriesEnum.ArtificialIntelligence,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "numpy",
  relatedSkills: [python, dataScience, mathematics],
};

export const matplotlib: SkillInterface = {
  name: "Matplotlib",
  category: SkillCategoriesEnum.DataScience,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "matplotlib",
  relatedSkills: [python, dataScience, dataVisualisation],
};

export const seaborn: SkillInterface = {
  name: "Seaborn",
  category: SkillCategoriesEnum.DataScience,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "seaborn",
  relatedSkills: [python, dataScience, dataVisualisation],
};

export const keras: SkillInterface = {
  name: "Keras",
  category: SkillCategoriesEnum.ArtificialIntelligence,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "keras",
  relatedSkills: [
    python,
    machineLearning,
    dataScience,
    artificialIntelligence,
    neuralNetworks,
  ],
};

export const jupyterNotebooks: SkillInterface = {
  name: "Jupyter Notebooks",
  category: SkillCategoriesEnum.DataScience,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "juptyer-notebooks",
  relatedSkills: [python, dataScience],
};

const technicalHardSkillsMachineLearning: SkillInterface[] = [
  scikitLearn,
  pandas,
  numpy,
  matplotlib,
  seaborn,
  keras,
  jupyterNotebooks,
];

export default technicalHardSkillsMachineLearning;
