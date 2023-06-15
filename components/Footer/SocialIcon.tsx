import React from "react";
import { IconType } from "react-icons";

interface SocialIconProps {
  title: string;
  link: string;
  IconComponent: IconType;
  isEmail?: boolean;
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
  title,
  link,
  IconComponent,
  isEmail = false,
}) => (
  <div title={title}>
    <a
      href={isEmail ? `mailto:${link}` : link}
      rel="noreferrer"
      target="_blank"
    >
      <IconComponent
        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
        size={30}
      />
    </a>
  </div>
);

export default SocialIcon;
