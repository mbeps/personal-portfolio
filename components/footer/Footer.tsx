import Link from "next/link";
import Socials from "../socials/Socials";
import developerName from "@/constants/developerName";

/**
 * Global footer that mirrors the hero social bar and links back to the source repo so every page ends with consistent branding.
 *
 * @returns Footer element with copyright and socials.
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
            <Link href="https://github.com/mbeps/personal-portfolio">
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
