import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import type SocialLinkInterface from "@/interfaces/social-link-interface";

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
    IconComponent: AiFillLinkedin,
  },
  {
    name: "Email",
    link: "mailto:maruf.h.bepary@gmail.com",
    IconComponent: AiOutlineMail,
  },
];

export default socialLinks;
