"use client";

import isSkillAssociatedWithMaterial from "@/actions/material/isSkillAssociatedWithMaterial";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import materialDatabaseMap from "@/database/Materials/MaterialDatabaseMap";
import skillDatabaseMap from "@/database/Skills/SkillDatabaseMap";
import SkillInterface from "@/database/Skills/SkillInterface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Tag from "./Tag";
import SkillDatabaseKeys from "@/database/Skills/SkillDatabaseKeys";

interface TagProps {
  skillKey: SkillDatabaseKeys;
  hide?: boolean;
}

/**
 * Tag component for displaying a skill.
 * This component can be clicked to navigate to the skill's material if the skill has associated material.
 * Associated material are projects, blogs, certifications, etc.
 *
 * @param skillKey The key of the skill to be displayed
 * @param hide Whether to hide the tag or not
 * @returns A tag with the name of the skill
 */
const SkillTag: React.FC<TagProps> = ({ skillKey, hide }) => {
  const currentPath: string = usePathname();
  const skill: SkillInterface = skillDatabaseMap[skillKey];

  const hasMaterial: ConstrainBoolean = isSkillAssociatedWithMaterial(
    skillKey,
    materialDatabaseMap
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
