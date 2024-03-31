import { IconType } from "react-icons";

/**
 * Interface representing social links for example GitHub, LinkedIn, and Email.
 * These store the data required to display and navigate to the social media profiles of the user.
 *
 * The fields are:
 * - `name`: the name of the social media platform
 * - `link`: the URL of the social media profile
 * - `IconComponent`: the icon component of the social media platform to be used in the site
 */
export default interface SocialLinkInterface {
  name: string;
  link: string;
  IconComponent: IconType;
}
