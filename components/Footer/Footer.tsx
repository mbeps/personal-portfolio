import {
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import SocialIcon from "./SocialIcon";

/**
 * Footer to be displayed at the bottom of the page.
 * Contains links to social media accounts.
 *
 * @returns (JSX.Element): Footer component
 */
const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-600 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Maruf Bepary<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <SocialIcon
            link="https://github.com/mbeps"
            IconComponent={AiOutlineGithub}
          />
          <SocialIcon
            link="https://twitter.com/m_beps"
            IconComponent={AiOutlineTwitter}
          />
          <SocialIcon
            link="bepary71@gmail.com"
            IconComponent={AiOutlineMail}
            isEmail
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
