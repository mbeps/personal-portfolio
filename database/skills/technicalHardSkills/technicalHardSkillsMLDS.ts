import Skill from "@/types/skills";
import {
  machineLearning,
  dataScience,
  artificialIntelligence,
  hyperparameters,
  boosting,
  neuralNetworks,
  dataVisualisation,
  mathematics,
} from "../generalSkills";

export const scikitLearn: Skill = {
  name: "Scikit Learn",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "scikit-learn",
  technicalGeneralSkills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    hyperparameters,
    boosting,
    neuralNetworks,
  ],
};

export const pandas: Skill = {
  name: "Pandas",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "pandas",
  technicalGeneralSkills: [dataScience, dataVisualisation],
};

export const numpy: Skill = {
  name: "NumPy",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "numpy",
  technicalGeneralSkills: [dataScience, mathematics],
};

export const matplotlib: Skill = {
  name: "Matplotlib",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "matplotlib",
  technicalGeneralSkills: [dataScience, dataVisualisation],
};

export const seaborn: Skill = {
  name: "Seaborn",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "seaborn",
  technicalGeneralSkills: [dataScience, dataVisualisation],
};

export const keras: Skill = {
  name: "Keras",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "keras",
  technicalGeneralSkills: [
    machineLearning,
    dataScience,
    artificialIntelligence,
    neuralNetworks,
  ],
};

export const jupyterNotebooks: Skill = {
  name: "Jupyter Notebooks",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "juptyer-notebooks",
  technicalGeneralSkills: [dataScience],
};

const technicalHardSkillsMachineLearning: Skill[] = [
  scikitLearn,
  pandas,
  numpy,
  matplotlib,
  seaborn,
  keras,
  jupyterNotebooks,
];

export default technicalHardSkillsMachineLearning;
