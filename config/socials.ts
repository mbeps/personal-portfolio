import { AiOutlineGithub } from "react-icons/ai";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import MailIcon from "@/components/icons/mail-icon";
import type SocialLinkInterface from "@/types/socials/social-link";

/**
 * List of social links that are displayed in the footer and home page.
 */
const socialLinks: SocialLinkInterface[] = [
  {
    name: "GitHub",
    link: "https://github.com/mbeps",
    IconComponent: AiOutlineGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/maruf-bepary",
    IconComponent: LinkedInIcon,
  },
  {
    name: "Email",
    link: "mailto:maruf.h.bepary@gmail.com",
    IconComponent: MailIcon,
  },
];

export default socialLinks;
