import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { java, javascript, python, typescript } from "../languages";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsProjectManagers: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.NPM]: {
    name: "NPM",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript],
  },
  [SkillSlugEnum.Yarn]: {
    name: "Yarn",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript],
  },
  [SkillSlugEnum.PNPM]: {
    name: "PNPM",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [javascript, typescript],
  },
  [SkillSlugEnum.Poetry]: {
    name: "Poetry",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python],
  },
  [SkillSlugEnum.PyBuilder]: {
    name: "PyBuilder",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [python],
  },
  [SkillSlugEnum.Maven]: {
    name: "Maven",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [java],
  },
  [SkillSlugEnum.Gradle]: {
    name: "Gradle",
    category: SkillCategoriesEnum.ProjectManagers,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [java],
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
    relatedSkills: [javascript, typescript],
  },
};

export default technicalHardSkillsProjectManagers;
