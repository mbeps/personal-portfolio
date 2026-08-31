import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/shadcn/ui/button";
import Socials from "@/components/socials/socials";
import TextLoop from "@/components/text-loop/text-loop";
import NextSectionButton from "@/components/ui/next-section-button";
import developerName from "@/constants/developer-name";
import { PATHS } from "@/constants/paths";
import subtitles from "@/constants/subtitles";

/**
 * Front page hero that pairs the looping subtitle narrative with socials, CTA buttons, and the profile image.
 * Sets the tone for the portfolio by linking into the shared subtitles array and the Scroll-aware section IDs.
 */
const HeroSection = () => {
  const subtitleStyle: string = `
    text-2xl md:text-4xl font-semibold
    p-1 bg-clip-text text-transparent
    bg-linear-to-r from-red-600 via-orange-500 to-rose-500 dark:from-red-700 dark:via-orange-600 dark:to-rose-800 tracking-wide
    `;

  return (
    <section id="home" className="home-section-wrapper">
      <div className="my-auto flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-start lg:space-x-12 lg:text-left">
        {/* Right / Top Section */}
        <div className="flex justify-center p-8 lg:w-1/2 lg:p-0">
          <div className="relative">
            {/* The Glow */}
            <div className="absolute inset-0 hidden rounded-full bg-linear-to-r from-orange-700 to-yellow-500 opacity-60 blur-[100px] dark:block" />

            {/* The Image */}
            <div className="relative rounded-full shadow-2xl dark:shadow-none">
              <Image
                src={PATHS.PROFILE}
                alt="Profile image of the developer"
                width={335}
                height={335}
                className="rounded-full"
                quality={60}
                priority
              />
            </div>
          </div>
        </div>

        {/* Left / Bottom Section */}
        <div className="w-full items-center justify-center space-y-4 sm:space-y-5 md:mt-1 md:space-y-4 lg:w-3/5 lg:justify-start">
          <div className="flex flex-col space-y-2">
            <h2 className="font-normal text-3xl text-neutral-600 md:text-5xl dark:text-neutral-300">
              {`Hi, I'm`}
            </h2>
            <h1 className="font-bold text-5xl md:text-7xl">{developerName}</h1>
          </div>

          {/* Roles */}
          <TextLoop
            loopItems={subtitles}
            implementation="typewriter"
            className={subtitleStyle}
          />

          <Socials
            iconSize={40}
            className="justify-center md:justify-center md:space-x-5 lg:justify-start"
          />

          {/* Buttons */}
          <div className="flex w-full justify-center lg:justify-start">
            <div className="mt-5 flex w-full flex-col space-y-2 md:mt-6 md:w-3/5 md:flex-row md:space-x-3 md:space-y-0">
              <Link href="#projects" className="w-full">
                <Button variant="gradient" className="w-full">
                  Projects
                </Button>
              </Link>

              <Link href="#about" className="w-full">
                <Button variant="ghost" className="w-full">
                  About
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NextSectionButton section="about" />
    </section>
  );
};

export default HeroSection;
