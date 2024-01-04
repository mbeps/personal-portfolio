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
import useIsMounted from "@/hooks/useIsMounted";

interface TagProps {
  skill: Skill;
}

const SkillTag: React.FC<TagProps> = ({ skill }) => {
  const currentPath = usePathname();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  const skills = allSkills;
  const allBlogs = blogs;
  const projects = allProjects;

  const hasProjects = isSkillAssociatedWithProject(skill, projects);
  const hasCertificates = isSkillAssociatedWithCertificate(skill, certificates);
  const hasBlogs = isSkillAssociatedWithBlogs(skill, allBlogs);
  const hasSkill = hasAssociatedSkills(skill, skills);
  const hasMaterial = hasProjects || hasCertificates || hasBlogs || hasSkill;

  let skillLink = `/skills/${skill.slug}`;
  if (!hasMaterial) {
    skillLink = currentPath;
    return <Tag hasHover={hasMaterial}>{skill.name}</Tag>;
  }

  return (
    <Link
      href={skillLink}
      title={`Navigate to all material related to ${skill.name}`}
    >
      <Tag hasHover={hasMaterial}>{skill.name}</Tag>
    </Link>
  );
};

export default SkillTag;
