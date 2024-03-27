import SocialLinkInterface from "@/interfaces/SocialLinkInterface";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

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
    link: "mailto:bepary71@gmail.com",
    IconComponent: AiOutlineMail,
  },
];

export default socialLinks;
