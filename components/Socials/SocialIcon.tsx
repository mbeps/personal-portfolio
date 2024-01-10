import SocialLink from "@/types/social";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import Link from "next/link";

interface SocialIconProps extends SocialLink {
  iconSize?: number;
}

/**
 * Social media icon component.
 * Displays the icon which links to the social media account.
 *
 * @param title (string): title shown as tooltip when hovering
 * @param link (string): Link to the social media account
 * @param IconComponent (IconType): Icon component to be displayed
 * @param isEmail (boolean): Whether the link is an email or not
 * @returns (JSX.Element): Social media icon
 */
const SocialIcon: React.FC<SocialIconProps> = ({
  name,
  link,
  IconComponent,
  isEmail = false,
  iconSize = 30,
}) => (
  <Tooltip>
    <TooltipTrigger>
      <Link href={isEmail ? `mailto:${link}` : link} target="_blank">
        <IconComponent
          className="
              md:hover:-translate-y-1
              cursor-pointer
              text-neutral-600 dark:text-neutral-200
              transition-all duration-300
            "
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
