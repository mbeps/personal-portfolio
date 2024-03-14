import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";

const technicalHardSkillsDevOps: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.GitHubActions]: {
    name: "GitHub Actions",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.InfrastructureAsCode,
      SkillSlugEnum.ContinuousDelivery,
      SkillSlugEnum.ContinuousIntegration,
      SkillSlugEnum.ContinuousDeployment,
      SkillSlugEnum.DevOps,
      SkillSlugEnum.Automation,
      SkillSlugEnum.GitHub,
    ],
  },
  [SkillSlugEnum.GitLabCI]: {
    name: "GitLab CI",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.InfrastructureAsCode,
      SkillSlugEnum.ContinuousDelivery,
      SkillSlugEnum.ContinuousIntegration,
      SkillSlugEnum.ContinuousDeployment,
      SkillSlugEnum.DevOps,
      SkillSlugEnum.Automation,
      SkillSlugEnum.GitLab,
    ],
  },
  [SkillSlugEnum.Jenkins]: {
    name: "Jenkins",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.InfrastructureAsCode,
      SkillSlugEnum.ContinuousDelivery,
      SkillSlugEnum.ContinuousIntegration,
      SkillSlugEnum.ContinuousDeployment,
      SkillSlugEnum.DevOps,
      SkillSlugEnum.Automation,
      SkillSlugEnum.Groovy,
    ],
  },
  [SkillSlugEnum.TeamCity]: {
    name: "TeamCity",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.InfrastructureAsCode,
      SkillSlugEnum.ContinuousDelivery,
      SkillSlugEnum.ContinuousIntegration,
      SkillSlugEnum.ContinuousDeployment,
      SkillSlugEnum.DevOps,
      SkillSlugEnum.Automation,
    ],
  },
  [SkillSlugEnum.Docker]: {
    name: "Docker",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Containerisation, SkillSlugEnum.DevOps],
  },
  [SkillSlugEnum.Podman]: {
    name: "Podman",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [SkillSlugEnum.Containerisation, SkillSlugEnum.DevOps],
  },
  [SkillSlugEnum.Kubernetes]: {
    name: "Kubernetes",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.Containerisation,
      SkillSlugEnum.DevOps,
      SkillSlugEnum.Clusterisation,
    ],
  },
  [SkillSlugEnum.Ansible]: {
    name: "Ansible",
    category: SkillCategoriesEnum.DevOps,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.InfrastructureAsCode,
      SkillSlugEnum.DevOps,
      SkillSlugEnum.Automation,
    ],
  },
  [SkillSlugEnum.Vagrant]: {
    name: "Vagrant",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      SkillSlugEnum.InfrastructureAsCode,
      SkillSlugEnum.DevOps,
      SkillSlugEnum.Automation,
    ],
  },
};

export default technicalHardSkillsDevOps;
