"use client";

import isSkillAssociatedWithMaterial from "@/actions/material/isSkillAssociatedWithMaterial";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import materialDatabase from "@/database/material";
import skillsHashmap from "@/database/skills/skills";
import SkillInterface from "@/interfaces/skills/SkillInterface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Tag from "./Tag";
import SkillSlugEnum from "@/enums/SkillSlugEnum";

interface TagProps {
  skillKey: SkillSlugEnum;
  hide?: boolean;
}

const SkillTag: React.FC<TagProps> = ({ skillKey, hide }) => {
  const currentPath: string = usePathname();

  const skill: SkillInterface = skillsHashmap[skillKey];

  const hasMaterial: boolean = isSkillAssociatedWithMaterial(
    skillKey,
    materialDatabase
  );

  if (hide) {
    return <></>;
  }

  let skillLink = `/skills/${skillKey}`;
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
