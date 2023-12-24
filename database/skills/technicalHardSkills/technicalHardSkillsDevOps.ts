import Skill from "@/types/skills";
import {
  infrastructureAsCode,
  continuousDelivery,
  continuousIntegration,
  continuousDeployment,
  devOps,
  automation,
  clusterisation,
  containerization,
} from "../generalSkills";

export const gitHubActions: Skill = {
  name: "GitHub Actions",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "github-actions",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const gitlabCI: Skill = {
  name: "GitLab CI",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "gitlab-ci",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const jenkins: Skill = {
  name: "Jenkins",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "jenkins",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const teamCity: Skill = {
  name: "TeamCity",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "teamcity",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const travisCI: Skill = {
  name: "Travis CI",
  category: "DevOps",
  skillType: "hard",
  slug: "travis-ci",
  technicalGeneralSkills: [
    infrastructureAsCode,
    continuousDelivery,
    continuousIntegration,
    continuousDeployment,
    devOps,
    automation,
  ],
};

export const docker: Skill = {
  name: "Docker",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "docker",
  technicalGeneralSkills: [containerization],
};

export const podman: Skill = {
  name: "Podman",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "podman",
  technicalGeneralSkills: [containerization],
};

export const kubernetes: Skill = {
  name: "Kubernetes",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "kubernetes",
  technicalGeneralSkills: [containerization, clusterisation],
};

export const ansible: Skill = {
  name: "Ansible",
  category: "DevOps",
  skillType: "hard",
  slug: "ansible",
  technicalGeneralSkills: [infrastructureAsCode, devOps, automation],
};

export const vagrant: Skill = {
  name: "Vagrant",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "valgrant",
  technicalGeneralSkills: [infrastructureAsCode, devOps],
};

const technicalHardSkillsDevOps: Skill[] = [
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
