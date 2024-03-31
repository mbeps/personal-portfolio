import Link from "next/link";
import Socials from "../Socials/Socials";
import developerName from "@/constants/developerName";

/**
 * Footer to be displayed at the bottom of the page.
 * Contains links to social media accounts and the developer's name.
 *
 * @returns Footer component
 */
const Footer = () => {
  const currentYear: number = new Date().getFullYear() || 2024;

  return (
    <footer>
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 dark:bg-neutral-700 border-0"></hr>
      <div
        className="
          mx-auto 
          p-4 space-y-4 md:space-y-0
          flex flex-col md:flex-row 
          text-center text-neutral-900 
          md:justify-between
        "
      >
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          <Link href="/">
            <p>{`© ${currentYear} ${developerName}`}</p>
          </Link>
        </div>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
