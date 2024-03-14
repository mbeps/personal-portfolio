import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { javascript, python, typescript } from "../languages";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsCodeQuality: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Black]: {
    name: "Black",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python],
  },
  [SkillSlugEnum.Zod]: {
    name: "Zod",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [typescript],
  },
  [SkillSlugEnum.ESLint]: {
    name: "ESLint",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript],
  },
  [SkillSlugEnum.Prettier]: {
    name: "Prettier",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript],
  },
  [SkillSlugEnum.PyLint]: {
    name: "PyLint",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python],
  },
  [SkillSlugEnum.Checkstyle]: {
    name: "Checkstyle",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
  },
};

export default technicalHardSkillsCodeQuality;
