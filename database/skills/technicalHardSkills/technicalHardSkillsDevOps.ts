import SkillInterface from "@/interfaces/skills/SkillInterface";
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

export const gitHubActions: SkillInterface = {
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

export const gitlabCI: SkillInterface = {
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

export const jenkins: SkillInterface = {
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

export const teamCity: SkillInterface = {
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

export const travisCI: SkillInterface = {
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

export const docker: SkillInterface = {
  name: "Docker",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "docker",
  technicalGeneralSkills: [containerization],
};

export const podman: SkillInterface = {
  name: "Podman",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "podman",
  technicalGeneralSkills: [containerization],
};

export const kubernetes: SkillInterface = {
  name: "Kubernetes",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "kubernetes",
  technicalGeneralSkills: [containerization, clusterisation],
};

export const ansible: SkillInterface = {
  name: "Ansible",
  category: "DevOps",
  skillType: "hard",
  slug: "ansible",
  technicalGeneralSkills: [infrastructureAsCode, devOps, automation],
};

export const vagrant: SkillInterface = {
  name: "Vagrant",
  category: "DevOps",
  isMainSkill: true,
  skillType: "hard",
  slug: "valgrant",
  technicalGeneralSkills: [infrastructureAsCode, devOps],
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
