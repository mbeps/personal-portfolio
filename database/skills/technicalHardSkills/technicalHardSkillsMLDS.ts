import SkillInterface, {
  SkillCategories,
  SkillTypes,
} from "@/interfaces/skills/SkillInterface";
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
  category: SkillCategories.ArtificialIntelligence,
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
  category: SkillCategories.ArtificialIntelligence,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "pandas",
  relatedSkills: [python, dataScience, dataVisualisation],
};

export const numpy: SkillInterface = {
  name: "NumPy",
  category: SkillCategories.ArtificialIntelligence,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "numpy",
  relatedSkills: [python, dataScience, mathematics],
};

export const matplotlib: SkillInterface = {
  name: "Matplotlib",
  category: SkillCategories.DataScience,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "matplotlib",
  relatedSkills: [python, dataScience, dataVisualisation],
};

export const seaborn: SkillInterface = {
  name: "Seaborn",
  category: SkillCategories.DataScience,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "seaborn",
  relatedSkills: [python, dataScience, dataVisualisation],
};

export const keras: SkillInterface = {
  name: "Keras",
  category: SkillCategories.ArtificialIntelligence,
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
  category: SkillCategories.DataScience,
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
