import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, {
  SkillTypesEnum,
} from "@/interfaces/skills/SkillInterface";
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

export const gitHubActions: SkillInterface = {
  name: "GitHub Actions",
  category: SkillCategoriesEnum.DevOps,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "github-actions",
  relatedSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const gitlabCI: SkillInterface = {
  name: "GitLab CI",
  category: SkillCategoriesEnum.DevOps,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "gitlab-ci",
  relatedSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const jenkins: SkillInterface = {
  name: "Jenkins",
  category: SkillCategoriesEnum.DevOps,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "jenkins",
  relatedSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const teamCity: SkillInterface = {
  name: "TeamCity",
  category: SkillCategoriesEnum.DevOps,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "teamcity",
  relatedSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const travisCI: SkillInterface = {
  name: "Travis CI",
  category: SkillCategoriesEnum.DevOps,
  skillType: SkillTypesEnum.Hard,
  slug: "travis-ci",
  relatedSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const docker: SkillInterface = {
  name: "Docker",
  category: SkillCategoriesEnum.DevOps,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "docker",
  relatedSkills: [containerization],
};

export const podman: SkillInterface = {
  name: "Podman",
  category: SkillCategoriesEnum.DevOps,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "podman",
  relatedSkills: [containerization],
};

export const kubernetes: SkillInterface = {
  name: "Kubernetes",
  category: SkillCategoriesEnum.DevOps,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "kubernetes",
  relatedSkills: [containerization, clusterisation],
};

export const ansible: SkillInterface = {
  name: "Ansible",
  category: SkillCategoriesEnum.DevOps,
  skillType: SkillTypesEnum.Hard,
  slug: "ansible",
  relatedSkills: [infrastructureAsCode, devOps, automation],
};

export const vagrant: SkillInterface = {
  name: "Vagrant",
  category: SkillCategoriesEnum.DevOps,
  isMainSkill: true,
  skillType: SkillTypesEnum.Hard,
  slug: "valgrant",
  relatedSkills: [infrastructureAsCode, devOps],
};

const technicalHardSkillsDevOps: SkillInterface[] = [
  gitHubActions,
  gitlabCI,
  jenkins,
  teamCity,
  travisCI,
  docker,
  podman,
  kubernetes,
  ansible,
  vagrant,
];

export default technicalHardSkillsDevOps;
