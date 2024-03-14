import SkillCategoriesEnum from "@/enums/SkillCategoriesEnum";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import {
  automation,
  clusterisation,
  containerization,
  continuousDelivery,
  continuousDeployment,
  continuousIntegration,
  devOps,
  infrastructureAsCode,
} from "../generalSkills";
import SkillTypesEnum from "@/enums/SkillTypesEnum";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

const technicalHardSkillsDevOps: { [key: string]: SkillInterface } = {
  [SkillSlugEnum.GitHubActions]: {
    name: "GitHub Actions",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      infrastructureAsCode,
      continuousDelivery,
      continuousIntegration,
      continuousDeployment,
      devOps,
      automation,
    ],
  },
  [SkillSlugEnum.GitLabCI]: {
    name: "GitLab CI",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      infrastructureAsCode,
      continuousDelivery,
      continuousIntegration,
      continuousDeployment,
      devOps,
      automation,
    ],
  },
  [SkillSlugEnum.Jenkins]: {
    name: "Jenkins",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      infrastructureAsCode,
      continuousDelivery,
      continuousIntegration,
      continuousDeployment,
      devOps,
      automation,
    ],
  },
  [SkillSlugEnum.TeamCity]: {
    name: "TeamCity",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [
      infrastructureAsCode,
      continuousDelivery,
      continuousIntegration,
      continuousDeployment,
      devOps,
      automation,
    ],
  },
  [SkillSlugEnum.Docker]: {
    name: "Docker",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [containerization],
  },
  [SkillSlugEnum.Podman]: {
    name: "Podman",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [containerization],
  },
  [SkillSlugEnum.Kubernetes]: {
    name: "Kubernetes",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [containerization, clusterisation],
  },
  [SkillSlugEnum.Ansible]: {
    name: "Ansible",
    category: SkillCategoriesEnum.DevOps,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [infrastructureAsCode, devOps, automation],
  },
  [SkillSlugEnum.Vagrant]: {
    name: "Vagrant",
    category: SkillCategoriesEnum.DevOps,
    isMainSkill: true,
    skillType: SkillTypesEnum.Hard,
    relatedSkills: [infrastructureAsCode, devOps],
  },
};

export default technicalHardSkillsDevOps;
