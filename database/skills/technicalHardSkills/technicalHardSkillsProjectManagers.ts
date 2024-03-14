import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsProjectManagers: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.NPM]: {
    name: "NPM",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Java, SkillSlugEnum.TypeScript],
  },
  [SkillSlugEnum.Yarn]: {
    name: "Yarn",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Java, SkillSlugEnum.TypeScript],
  },
  [SkillSlugEnum.PNPM]: {
    name: "PNPM",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Java, SkillSlugEnum.TypeScript],
  },
  [SkillSlugEnum.Poetry]: {
    name: "Poetry",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Python],
  },
  [SkillSlugEnum.PyBuilder]: {
    name: "PyBuilder",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Python],
  },
  [SkillSlugEnum.Maven]: {
    name: "Maven",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Java],
  },
  [SkillSlugEnum.Gradle]: {
    name: "Gradle",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Java],
  },
  [SkillSlugEnum.Tox]: {
    name: "Tox",
    category: SkillCategoriesEnum.ProjectManagers,
    skillType: SkillTypesEnum.Hard,
  },
  [SkillSlugEnum.NxJS]: {
    name: "Nx.js",
    category: SkillCategoriesEnum.ProjectManagers,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Java, SkillSlugEnum.TypeScript],
  },
};

export default technicalHardSkillsProjectManagers;
