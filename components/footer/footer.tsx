import Link from "next/link";
import developerName from "@/constants/developer-name";
import Socials from "../socials/socials";

/**
 * Global footer that mirrors the hero social bar and links back to the source repo so every page ends with consistent branding.
 *
 * @returns Footer element with copyright and socials.
 */
const Footer = () => {
  const currentYear: number = new Date().getFullYear() || 2024;

  return (
    <footer className="mt-8 w-full border-neutral-200 border-t bg-white p-4 transition-colors duration-700 ease-in-out dark:border-neutral-700 dark:bg-black">
      <div className="mx-auto max-w-[2560px]">
        <div className="flex flex-col space-y-4 text-center text-neutral-900 md:flex-row md:justify-between md:space-y-0">
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
