"use client";

import isSkillAssociatedWithMaterial from "@/actions/material/isSkillAssociatedWithMaterial";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import blogs from "@/database/blogs";
import certificates from "@/database/certificates";
import allProjects from "@/database/projects";
import allSkills from "@/database/skills/skills";
import BlogInterface from "@/interfaces/material/BlogInterface";
import MaterialInterface from "@/interfaces/material/MaterialInterface";
import ProjectInterface from "@/interfaces/material/ProjectInterface";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Tag from "./Tag";
import CertificateInterface from "@/interfaces/material/CertificateInterface";
import allCertificates from "@/database/certificates";

interface TagProps {
  skill: SkillInterface;
  hide?: boolean;
}

const SkillTag: React.FC<TagProps> = ({ skill, hide }) => {
  const currentPath = usePathname();

  const skills: SkillInterface[] = allSkills;
  const allBlogs: {
    [key: string]: BlogInterface;
  } = blogs;
  // TODO: Remove array translation once all the other material use hashmaps
  const blogsArray: BlogInterface[] = Object.values(allBlogs);
  const certificates: CertificateInterface[] = Object.values(allCertificates);
  const projects: ProjectInterface[] = Object.values(allProjects);

  const allMaterial: MaterialInterface[] = [
    ...projects,
    ...certificates,
    ...blogsArray,
  ];

  const hasMaterial = isSkillAssociatedWithMaterial(skill, allMaterial);

  if (hide) {
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
