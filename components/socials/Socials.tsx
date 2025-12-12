import React from "react";
import SocialIcon from "./SocialIcon";
import { twMerge } from "tailwind-merge";
import socialLinks from "@/constants/socials";

type SocialsProps = {
  className?: string;
  iconSize?: number;
};

/**
 * Shared renderer for the curated socialLinks array, keeping the hero, footer, and overlays aligned.
 *
 * @param className Optional container overrides.
 * @param iconSize Override for the icon size passed to `SocialIcon`.
 * @returns Flex row of social icons.
 */
const Socials: React.FC<SocialsProps> = ({ className, iconSize }) => {
  const baseStyles = `
    flex flex-row 
    items-center 
    justify-center 
    lg:items-center 
    lg:justify-start 
    space-x-6 md:space-x-2
    mb-1
  `;

  // Merge the base styles with the className passed in as a prop.
  const mergedStyles: string = twMerge(baseStyles, className);

  return (
    <div className={mergedStyles}>
      {socialLinks.map((link) => (
        <SocialIcon
          key={link.name}
          name={link.name}
          link={link.link}
          IconComponent={link.IconComponent}
          iconSize={iconSize}
        />
      ))}
    </div>
  );
};

export default Socials;
