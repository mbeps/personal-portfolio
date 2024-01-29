"use client";

import hasAssociatedSkills from "@/actions/skills/hasAssociatedSkills";
import isSkillAssociatedWithBlogs from "@/actions/skills/isSkillAssociatedWithBlogs";
import isSkillAssociatedWithCertificate from "@/actions/skills/isSkillAssociatedWithCertificate";
import isSkillAssociatedWithProject from "@/actions/skills/isSkillAssociatedWithProject";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import blogs from "@/database/blogs";
import certificates from "@/database/certificates";
import allProjects from "@/database/projects";
import allSkills from "@/database/skills/skills";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Tag from "./Tag";

interface TagProps {
  skill: SkillInterface;
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
  const hasMaterial = hasProjects || hasCertificates || hasBlogs;

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
        <p>{`Navigate to all material related to ${skill.name}`}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default SkillTag;
