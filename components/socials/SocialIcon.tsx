import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import SocialLinkInterface from "@/interfaces/SocialLinkInterface";
import Link from "next/link";
import React from "react";

interface SocialIconProps extends SocialLinkInterface {
  iconSize?: number;
}

/**
 * Tooltip-wrapped icon link used by the hero, footer, and overlays to keep social CTAs consistent.
 *
 * @param name Label shown in the tooltip.
 * @param link External URL or mailto string.
 * @param IconComponent Icon to render.
 * @param iconSize Optional override for icon size.
 * @returns Tooltip + link combo for a social destination.
 */
const SocialIcon: React.FC<SocialIconProps> = ({
  name,
  link,
  IconComponent,
  iconSize = 30,
}) => (
  <Tooltip>
    <TooltipTrigger>
      <Link href={link} target="_blank">
        <IconComponent
          className="md:hover:-translate-y-1 cursor-pointer text-neutral-600 dark:text-neutral-300 transition-all duration-300"
          size={iconSize}
        />
      </Link>
    </TooltipTrigger>
    <TooltipContent>
      <p>{name}</p>
    </TooltipContent>
  </Tooltip>
);

export default SocialIcon;
