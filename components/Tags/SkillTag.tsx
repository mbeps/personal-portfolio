"use client";

import { Skill } from "@/types/skills";
import React from "react";
import Tag from "../Atoms/Tag";
import Link from "next/link";
import allSkills from "@/constants/skills";
import isSkillAssociatedWithBlogs from "@/actions/skills/isSkillAssociatedWithBlogs";
import isSkillAssociatedWithCertificate from "@/actions/skills/isSkillAssociatedWithCertificate";
import isSkillAssociatedWithProject from "@/actions/skills/isSkillAssociatedWithProject";
import certificates from "@/constants/certificates";
import projects from "@/constants/projects";
import { language } from "gray-matter";
import blogs from "@/constants/blogs";
import allProjects from "@/constants/projects";
import { useRouter } from "next/navigation";

interface TagProps {
  children: React.ReactNode;
  skill: Skill;
}

const SkillTag: React.FC<TagProps> = ({ children, skill }) => {
  const router = useRouter();

  const skills = allSkills;
  const allBlogs = blogs;
  const projects = allProjects;

  const hasProjects = isSkillAssociatedWithProject(skill, projects);
  const hasCertificates = isSkillAssociatedWithCertificate(skill, certificates);
  const hasBlogs = isSkillAssociatedWithBlogs(skill, allBlogs);
  const hasMaterial = hasProjects || hasCertificates || hasBlogs;

  const handleOnClick = () => {
    if (hasMaterial) {
      router.push(`/skills/${skill.slug}`);
    }
  };

  return (
    <>
      <Tag onClick={handleOnClick}>{skill.skill}</Tag>
    </>
  );
};

export default SkillTag;
