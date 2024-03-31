import React from "react";
import SocialIcon from "./SocialIcon";
import { twMerge } from "tailwind-merge";
import socialLinks from "@/constants/socials";

type SocialsProps = {
  className?: string;
  iconSize?: number;
};

/**
 * Socials component that displays social links.
 *
 * @returns Socials component
 */
const Socials: React.FC<SocialsProps> = ({ className, iconSize }) => {
  const baseStyles = `
    flex flex-row 
    items-center 
    justify-center 
    md:items-center 
    md:justify-start 
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
