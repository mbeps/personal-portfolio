import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import { versionControl } from "../generalSkills";
import { gitHubActions, gitlabCI } from "./technicalHardSkillsDevOps";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsVCS: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Git]: {
    name: "Git",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [versionControl, gitHub, gitLab, bitBucket],
  },
  [SkillSlugEnum.GitHub]: {
    name: "GitHub",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [versionControl, gitHubActions],
  },
  [SkillSlugEnum.GitLab]: {
    name: "GitLab",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [versionControl, gitlabCI],
  },
  [SkillSlugEnum.BitBucket]: {
    name: "BitBucket",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [versionControl],
  },
};

export default technicalHardSkillsVCS;
