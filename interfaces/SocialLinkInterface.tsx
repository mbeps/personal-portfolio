import { IconType } from "react-icons";

/**
 * Interface representing social links for example GitHub, LinkedIn, and Email.
 * These store the data required to display and navigate to the social media profiles of the user.
 */
export default interface SocialLinkInterface {
  name: string;
  link: string;
  IconComponent: IconType;
}
