"use client";

import isSkillAssociatedWithMaterial from "@/actions/material/isSkillAssociatedWithMaterial";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import materialDatabase from "@/database/material";
import skillDatabase from "@/database/skills";
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
  const skill: SkillInterface = skillDatabase[skillKey];

  const hasMaterial: ConstrainBoolean = isSkillAssociatedWithMaterial(
    skillKey,
    materialDatabase
  );

  if (hide || !skill) {
    return <></>;
  }

  // If the skill exists but there's no associated material, adjust the link accordingly
  let skillLink: string = hasMaterial ? `/skills/${skillKey}` : currentPath;

  // Render the skill tag with a link if there's associated material, otherwise just show the tag
  return hasMaterial ? (
    <Tooltip>
      <TooltipTrigger>
        <Link href={skillLink}>
          <Tag hasHover={true}>{skill.name}</Tag>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{`Navigate to all material related to ${skill.name}`}</p>
      </TooltipContent>
    </Tooltip>
  ) : (
    <Tag hasHover={false}>{skill.name}</Tag>
  );
};

export default SkillTag;
