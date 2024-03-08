import { SkillCategoriesEnum } from "@/enums/SkillCategoriesEnum";
import SkillInterface, {
  SkillTypesEnum,
} from "@/interfaces/skills/SkillInterface";
import { versionControl } from "../generalSkills";
import { gitHubActions, gitlabCI } from "./technicalHardSkillsDevOps";

export const gitHub: SkillInterface = {
  name: "GitHub",
  category: SkillCategoriesEnum.VersionControl,
  skillType: SkillTypesEnum.Hard,
  slug: "github",
  relatedSkills: [versionControl, gitHubActions],
};

export const gitLab: SkillInterface = {
  name: "GitLab",
  category: SkillCategoriesEnum.VersionControl,
  skillType: SkillTypesEnum.Hard,
  slug: "gitlab",
  relatedSkills: [versionControl, gitlabCI],
};

export const bitBucket: SkillInterface = {
  name: "BitBucket",
  category: SkillCategoriesEnum.VersionControl,
  skillType: SkillTypesEnum.Hard,
  slug: "bit-bucket",
  relatedSkills: [versionControl],
};

export const git: SkillInterface = {
  name: "Git",
  category: SkillCategoriesEnum.VersionControl,
  skillType: SkillTypesEnum.Hard,
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
