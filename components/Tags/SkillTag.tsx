"use client";

import isSkillAssociatedWithBlogs from "@/actions/skills/isSkillAssociatedWithBlogs";
import isSkillAssociatedWithCertificate from "@/actions/skills/isSkillAssociatedWithCertificate";
import isSkillAssociatedWithProject from "@/actions/skills/isSkillAssociatedWithProject";
import Skill from "@/types/skills";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Tag from "./Tag";
import blogs from "@/database/blogs";
import certificates from "@/database/certificates";
import allProjects from "@/database/projects";
import allSkills from "@/database/skills/skills";
import hasAssociatedSkills from "@/actions/skills/hasAssociatedSkills";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";

interface TagProps {
  skill: Skill;
  hide?: boolean;
}

const SkillTag: React.FC<TagProps> = ({ skill, hide }) => {
  const currentPath = usePathname();

  const skills = allSkills;
  const allBlogs = blogs;
  const projects = allProjects;

  const hasProjects = isSkillAssociatedWithProject(skill, projects);
  const hasCertificates = isSkillAssociatedWithCertificate(skill, certificates);
  const hasBlogs = isSkillAssociatedWithBlogs(skill, allBlogs);
  const hasSkill = hasAssociatedSkills(skill, skills);
  const hasMaterial = hasProjects || hasCertificates || hasBlogs || hasSkill;

  if (hide && !hasMaterial) {
    return <></>;
  }

  let skillLink = `/skills/${skill.slug}`;
  if (!hasMaterial) {
    skillLink = currentPath;
    return <Tag hasHover={hasMaterial}>{skill.name}</Tag>;
  }

  return (
    <Tooltip>
      <TooltipTrigger>
        <Link href={skillLink}>
          <Tag hasHover={hasMaterial}>{skill.name}</Tag>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-lg">{`Navigate to all material related to ${skill.name}`}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default SkillTag;
