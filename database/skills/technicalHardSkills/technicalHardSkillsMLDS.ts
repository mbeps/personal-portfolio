import SkillInterface from "@/interfaces/skills/SkillInterface";
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

export const scikitLearn: SkillInterface = {
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

export const pandas: SkillInterface = {
  name: "Pandas",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "pandas",
  technicalGeneralSkills: [dataScience, dataVisualisation],
};

export const numpy: SkillInterface = {
  name: "NumPy",
  category: "Artificial Intelligence & Machine Learning",
  isMainSkill: true,
  skillType: "hard",
  slug: "numpy",
  technicalGeneralSkills: [dataScience, mathematics],
};

export const matplotlib: SkillInterface = {
  name: "Matplotlib",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "matplotlib",
  technicalGeneralSkills: [dataScience, dataVisualisation],
};

export const seaborn: SkillInterface = {
  name: "Seaborn",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "seaborn",
  technicalGeneralSkills: [dataScience, dataVisualisation],
};

export const keras: SkillInterface = {
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

export const jupyterNotebooks: SkillInterface = {
  name: "Jupyter Notebooks",
  category: "Data Science",
  isMainSkill: true,
  skillType: "hard",
  slug: "juptyer-notebooks",
  technicalGeneralSkills: [dataScience],
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
