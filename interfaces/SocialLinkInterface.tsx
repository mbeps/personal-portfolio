import { IconType } from "react-icons";

/**
 * Represents a social link used in the footer and hero sections so contact routes stay consistent across the site.
 */
export default interface SocialLinkInterface {
  /** Platform name displayed beside the icon. */
  name: string;
  /** Destination URL, often matching the icon folder under `public/socials`. */
  link: string;
  /** Icon renderer from `react-icons` paired with the platform. */
  IconComponent: IconType;
}
