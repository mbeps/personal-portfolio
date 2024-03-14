import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsCodeQuality: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Black]: {
    name: "Black",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Python, SkillSlugEnum.Linting],
  },
  [SkillSlugEnum.Zod]: {
    name: "Zod",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.TypeScript],
  },
  [SkillSlugEnum.ESLint]: {
    name: "ESLint",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.JavaScript,
      SkillSlugEnum.TypeScript,
      SkillSlugEnum.Linting,
    ],
  },
  [SkillSlugEnum.Prettier]: {
    name: "Prettier",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.JavaScript, SkillSlugEnum.TypeScript],
  },
  [SkillSlugEnum.PyLint]: {
    name: "PyLint",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Python, SkillSlugEnum.Linting],
  },
  [SkillSlugEnum.Checkstyle]: {
    name: "Checkstyle",
    category: SkillCategoriesEnum.CodeQuality,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Java, SkillSlugEnum.Linting],
  },
};

export default technicalHardSkillsCodeQuality;
