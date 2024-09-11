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
    <footer
      className="
        w-full
        mt-8 p-4 
        border-t border-neutral-200 dark:border-neutral-700
        bg-white dark:bg-black
        transition-colors duration-700 ease-in-out
      "
    >
      <div className="max-w-[2560px] mx-auto">
        <div
          className="
            space-y-4 md:space-y-0
            flex flex-col md:flex-row 
            text-center text-neutral-900 
            md:justify-between
          "
        >
          <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
            <Link href="/">
              <p>{`© 2023-${currentYear} ${developerName}`}</p>
            </Link>
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
