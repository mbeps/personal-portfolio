import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

/**
 * Array of languages.
 * Each skill has an array of skills and repositories.
 */
const languages: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Python]: {
    name: "Python",
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },
  [SkillSlugEnum.JavaScript]: {
    name: "JavaScript",
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },
  [SkillSlugEnum.TypeScript]: {
    name: "TypeScript",
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },
  [SkillSlugEnum.Java]: {
    name: "Java",
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },
  [SkillSlugEnum.GameMakerLanguage]: {
    name: "GameMaker Language",
    isMainSkill: false,
    skillType: SkillTypesEnum.Hard,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },
  [SkillSlugEnum.ShellScript]: {
    name: "Shell Script",
    isMainSkill: false,
    skillType: SkillTypesEnum.Hard,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },
  [SkillSlugEnum.RLanguage]: {
    name: "R",
    isMainSkill: false,
    skillType: SkillTypesEnum.Hard,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },
  [SkillSlugEnum.Groovy]: {
    name: "Groovy",
    isMainSkill: false,
    skillType: SkillTypesEnum.Hard,
    category: SkillCategoriesEnum.ProgrammingLanguages,
  },
};

export { languages };
