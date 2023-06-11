import React from "react";
import { IconType } from "react-icons";

interface SocialIconProps {
  link: string;
  IconComponent: IconType;
  isEmail?: boolean;
}

/**
 * Social media icon component.
 * Displays the icon which links to the social media account.
 *
 * @param link (string): Link to the social media account
 * @param IconComponent (IconType): Icon component to be displayed
 * @param isEmail (boolean): Whether the link is an email or not
 * @returns (JSX.Element): Social media icon
 */
const SocialIcon: React.FC<SocialIconProps> = ({
  link,
  IconComponent,
  isEmail = false,
}) => (
  <a href={isEmail ? `mailto:${link}` : link} rel="noreferrer" target="_blank">
    <IconComponent
      className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
      size={30}
    />
  </a>
);

export default SocialIcon;
