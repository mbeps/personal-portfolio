import SocialLinkInterface from "@/interfaces/SocialLinkInterface";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

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
    link: "bepary71@gmail.com",
    IconComponent: AiOutlineMail,
    isEmail: true,
  },
];

export default socialLinks;
