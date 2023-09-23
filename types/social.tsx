import { IconType } from "react-icons";

/**
 * Social link interface.
 */
interface SocialLink {
  name: string;
  link: string;
  IconComponent: IconType;
  isEmail?: boolean;
}

export type { SocialLink };
