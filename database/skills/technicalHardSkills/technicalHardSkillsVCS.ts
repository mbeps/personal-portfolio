import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsVCS: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.Git]: {
    name: "Git",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.VersionControlSystems,
      SkillSlugEnum.GitHub,
      SkillSlugEnum.GitLab,
      SkillSlugEnum.BitBucket,
    ],
  },
  [SkillSlugEnum.GitHub]: {
    name: "GitHub",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.VersionControlSystems,
      SkillSlugEnum.GitHubActions,
    ],
  },
  [SkillSlugEnum.GitLab]: {
    name: "GitLab",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.VersionControlSystems,
      SkillSlugEnum.GitLabCI,
    ],
  },
  [SkillSlugEnum.BitBucket]: {
    name: "BitBucket",
    category: SkillCategoriesEnum.VersionControl,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.VersionControlSystems],
  },
};

export default technicalHardSkillsVCS;
