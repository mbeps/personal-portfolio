import Link from "next/link";
import type React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import type SocialLinkInterface from "@/interfaces/social-link-interface";

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
          className="cursor-pointer text-neutral-600 transition-all duration-300 md:hover:-translate-y-1 dark:text-neutral-300"
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
