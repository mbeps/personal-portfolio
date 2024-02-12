import SkillInterface, { SkillTypes } from "@/interfaces/skills/SkillInterface";
import { versionControl } from "../generalSkills";
import { gitHubActions, gitlabCI } from "./technicalHardSkillsDevOps";

export const gitHub: SkillInterface = {
  name: "GitHub",
  category: "Version Control",
  skillType: SkillTypes.Hard,
  slug: "github",
  relatedSkills: [versionControl, gitHubActions],
};

export const gitLab: SkillInterface = {
  name: "GitLab",
  category: "Version Control",
  skillType: SkillTypes.Hard,
  slug: "gitlab",
  relatedSkills: [versionControl, gitlabCI],
};

export const bitBucket: SkillInterface = {
  name: "BitBucket",
  category: "Version Control",
  skillType: SkillTypes.Hard,
  slug: "bit-bucket",
  relatedSkills: [versionControl],
};

export const git: SkillInterface = {
  name: "Git",
  category: "Version Control",
  skillType: SkillTypes.Hard,
  slug: "git",
  relatedSkills: [versionControl, gitHub, gitLab, bitBucket],
};

const technicalHardSkillsVCS: SkillInterface[] = [
  git,
  gitHub,
  gitLab,
  bitBucket,
];

export default technicalHardSkillsVCS;
