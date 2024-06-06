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
 * Social media icon component.
 * Displays the icon which links to the social media account.
 *
 * @param title Title shown as tooltip when hovering
 * @param link Link to the social media account
 * @param IconComponent Icon component to be displayed
 * @param isEmail Whether the link is an email or not
 * @returns Social media icon
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
          className="
              md:hover:-translate-y-1
              cursor-pointer
              text-neutral-600 dark:text-neutral-300
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
