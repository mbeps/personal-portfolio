import SkillInterface from "@/interfaces/skills/SkillInterface";
import { versionControl } from "../generalSkills";
import { gitHubActions, gitlabCI } from "./technicalHardSkillsDevOps";

export const gitHub: SkillInterface = {
  name: "GitHub",
  category: "Version Control",
  skillType: "hard",
  slug: "github",
  technicalGeneralSkills: [versionControl],
  technicalHardSkills: [gitHubActions],
};

export const gitLab: SkillInterface = {
  name: "GitLab",
  category: "Version Control",
  skillType: "hard",
  slug: "gitlab",
  technicalGeneralSkills: [versionControl],
  technicalHardSkills: [gitlabCI],
};

export const bitBucket: SkillInterface = {
  name: "BitBucket",
  category: "Version Control",
  skillType: "hard",
  slug: "bit-bucket",
  technicalGeneralSkills: [versionControl],
};

export const git: SkillInterface = {
  name: "Git",
  category: "Version Control",
  skillType: "hard",
  slug: "git",
  technicalGeneralSkills: [versionControl],
  technicalHardSkills: [gitHub, gitLab, bitBucket],
};

const technicalHardSkillsVCS: SkillInterface[] = [
  git,
  gitHub,
  gitLab,
  bitBucket,
];

export default technicalHardSkillsVCS;
