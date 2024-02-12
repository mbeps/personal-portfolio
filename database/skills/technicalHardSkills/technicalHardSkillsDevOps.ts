import SkillInterface, {
  SkillCategories,
  SkillTypes,
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
  category: SkillCategories.DevOps,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
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
  category: SkillCategories.DevOps,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
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
  category: SkillCategories.DevOps,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
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
  category: SkillCategories.DevOps,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
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
  category: SkillCategories.DevOps,
  skillType: SkillTypes.Hard,
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
  category: SkillCategories.DevOps,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "docker",
  relatedSkills: [containerization],
};

export const podman: SkillInterface = {
  name: "Podman",
  category: SkillCategories.DevOps,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "podman",
  relatedSkills: [containerization],
};

export const kubernetes: SkillInterface = {
  name: "Kubernetes",
  category: SkillCategories.DevOps,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
  slug: "kubernetes",
  relatedSkills: [containerization, clusterisation],
};

export const ansible: SkillInterface = {
  name: "Ansible",
  category: SkillCategories.DevOps,
  skillType: SkillTypes.Hard,
  slug: "ansible",
  relatedSkills: [infrastructureAsCode, devOps, automation],
};

export const vagrant: SkillInterface = {
  name: "Vagrant",
  category: SkillCategories.DevOps,
  isMainSkill: true,
  skillType: SkillTypes.Hard,
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
