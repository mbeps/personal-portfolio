"use client";

import isSkillAssociatedWithMaterial from "@/actions/material/isSkillAssociatedWithMaterial";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import materialDatabase from "@/database/material";
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

  const skills: SkillInterface[] = allSkills;

  const hasMaterial: boolean = isSkillAssociatedWithMaterial(
    skill,
    materialDatabase
  );

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
