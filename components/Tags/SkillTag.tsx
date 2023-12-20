"use client";

import isSkillAssociatedWithBlogs from "@/actions/skills/isSkillAssociatedWithBlogs";
import isSkillAssociatedWithCertificate from "@/actions/skills/isSkillAssociatedWithCertificate";
import isSkillAssociatedWithProject from "@/actions/skills/isSkillAssociatedWithProject";
import blogs from "@/constants/blogs";
import certificates from "@/constants/certificates";
import allProjects from "@/constants/projects";
import allSkills from "@/constants/skills";
import Skill from "@/types/skills";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Tag from "./Tag";

interface TagProps {
  skill: Skill;
}

const SkillTag: React.FC<TagProps> = ({ skill }) => {
  const currentPath = usePathname();

  const skills = allSkills;
  const allBlogs = blogs;
  const projects = allProjects;

  const hasProjects = isSkillAssociatedWithProject(skill, projects);
  const hasCertificates = isSkillAssociatedWithCertificate(skill, certificates);
  const hasBlogs = isSkillAssociatedWithBlogs(skill, allBlogs);
  const hasMaterial = hasProjects || hasCertificates || hasBlogs;

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
