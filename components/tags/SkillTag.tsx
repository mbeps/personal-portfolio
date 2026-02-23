"use client";

import { isSkillAssociatedWithMaterial } from "@/lib/material/skillUsageHelpers";
import materialDatabaseMap from "@/database/materials/MaterialDatabaseMap";
import skillDatabaseMap from "@/database/skills/SkillDatabaseMap";
import SkillInterface from "@/database/skills/SkillInterface";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Tag from "./Tag";
import SkillDatabaseKeys from "@/database/skills/SkillDatabaseKeys";
import { SKILL_PAGE } from "@/constants/pages";

interface TagProps {
  skillKey: SkillDatabaseKeys;
  hide?: boolean;
}

/**
 * Skill-specific tag that links to `/skills/[skillKey]` only when the aggregated material map shows at least one usage.
 * Used across the homepage, skill directory, and detail views so CTA behavior stays consistent.
 *
 * @param skillKey Skill slug from the database.
 * @param hide When true the tag renders nothing (used for filtering).
 * @returns Clickable tag when the skill has material, otherwise a static label.
 */
const SkillTag: React.FC<TagProps> = ({ skillKey, hide }) => {
  const currentPath: string = usePathname();
  const skill: SkillInterface = skillDatabaseMap[skillKey];

  const hasMaterial: ConstrainBoolean = isSkillAssociatedWithMaterial(skillKey);

  if (hide || !skill) {
    return <></>;
  }

  // If the skill exists but there's no associated material, adjust the link accordingly
  let skillLink: string = hasMaterial
    ? `${SKILL_PAGE.path}/${skillKey}`
    : currentPath;

  // Render the skill tag with a link if there's associated material, otherwise just show the tag
  return hasMaterial ? (
    <Link href={skillLink}>
      <Tag hasHover={true}>{skill.name}</Tag>
    </Link>
  ) : (
    <Tag hasHover={false}>{skill.name}</Tag>
  );
};

export default SkillTag;
