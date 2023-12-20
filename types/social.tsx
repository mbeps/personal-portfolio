import { IconType } from "react-icons";

/**
 * Social link interface.
 */
export default interface SocialLink {
  name: string;
  link: string;
  IconComponent: IconType;
  isEmail?: boolean;
}
