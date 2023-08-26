import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import SocialIcon from "../Footer/SocialIcon";

type SocialsProps = {};

const Socials: React.FC<SocialsProps> = () => {
  return (
    <div
      className="
				flex flex-row 
				items-center justify-center 
				space-x-6 md:space-x-2
        mb-1 
			"
    >
      <SocialIcon
        title="GitHub"
        link="https://github.com/mbeps"
        IconComponent={AiOutlineGithub}
      />
      {/* <SocialIcon
        title="Twitter"
        link="https://twitter.com/m_beps"
        IconComponent={AiOutlineTwitter}
      /> */}
      <SocialIcon
        title="LinkedIn"
        link="https://www.linkedin.com/in/maruf-bepary-104722180/"
        IconComponent={AiFillLinkedin}
      />
      <SocialIcon
        title="Email"
        link="bepary71@gmail.com"
        IconComponent={AiOutlineMail}
        isEmail
      />
    </div>
  );
};
export default Socials;
