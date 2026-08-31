import Link from "next/link";
import Reader from "@/components/reader/Reader";
import NextSectionButton from "@/components/ui/NextSectionButton";
import { PATHS } from "@/constants/paths";
import { ROUTES } from "@/constants/routes";
import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import LanguageSection from "./LanguageSection";
import TechnologiesSection from "./TechnologiesSection";

/**
 * Markdown-backed about preview that pairs the Reader with the interactive language/technology sub sections.
 * Acts as the first touchpoint to the `/about` longform page while keeping the skill taxonomy consistent with the Skills view.
 *
 * @returns About block with CTA to the detailed page.
 */
const AboutSection = () => {
  /**
   * About me written in markdown.
   * This markdown is converted to HTML and displayed on the page.
   */
  const blogContent: string | null = getMarkdownFromFileSystem(
    PATHS.ABOUT.SHORT,
  );

  return (
    <section id="about" className="home-section-wrapper">
      <div className="my-auto w-full">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-red-500" />
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-8 align-top md:space-y-5 lg:flex-row lg:space-x-6 lg:space-y-0 lg:p-4 lg:text-left">
          {/* Left section */}
          <div className="lg:w-1/2">
            <h1 className="mt-6 mb-6 text-center font-bold text-2xl md:text-left">
              Get to know me!
            </h1>

            <div className="space-y-2">
              <Reader content={blogContent} size="lg" />
              <Link
                href={ROUTES.ABOUT.path}
                className="font-bold transition-colors duration-300 ease-in-out hover:text-red-500 hover:underline dark:hover:text-red-700"
              >
                {"Read More About Me!"}
              </Link>
            </div>
          </div>

          {/* Right section */}
          <div className="text-center md:text-left lg:w-1/2">
            <LanguageSection />
            <div className="mt-2 h-3 md:mt-4" />
            <TechnologiesSection />
          </div>
        </div>
      </div>
      <NextSectionButton section="projects" />
    </section>
  );
};

export default AboutSection;
