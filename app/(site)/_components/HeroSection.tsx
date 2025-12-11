import Socials from "@/components/socials/Socials";
import TextLoop from "@/components/text-loop/TextLoop";
import NextSectionButton from "@/components/ui/NextSectionButton";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import subtitles from "@/constants/subtitles";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

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
      <div
        className="
          flex flex-col lg:flex-row
          text-center lg:text-left
          items-center
          justify-center lg:justify-start
          lg:space-x-12
          my-auto w-full
      "
      >
        {/* Right / Top Section */}
        <div
          className="
            flex
            lg:w-1/2
            justify-center
            p-8 lg:p-0
        "
        >
          <Image
            src="/profile.png"
            alt="Profile image of the developer"
            width={335}
            height={335}
            className="rounded-full shadow-2xl"
            quality={60}
            priority
          />
        </div>

        {/* Left / Bottom Section */}
        <div
          className="
            md:mt-1
            lg:w-3/5 w-full
            items-center justify-center lg:justify-start
            space-y-4 sm:space-y-5 md:space-y-4
            "
        >
          <div className="flex flex-col space-y-2">
            <h2
              className="
                text-3xl md:text-5xl 
                font-normal 
                text-neutral-600 dark:text-neutral-300
              "
            >
              {`Hi, I'm`}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold">{developerName}</h1>
          </div>

          {/* Roles */}
          <TextLoop
            loopItems={subtitles}
            implementation="typewriter"
            className={subtitleStyle}
          />

          <Socials
            iconSize={40}
            className="
              justify-center md:justify-center lg:justify-start
              md:space-x-5
            "
          />

          {/* Buttons */}
          <div
            className="
              w-full
              flex justify-center lg:justify-start
            "
          >
            <div
              className="
                flex flex-col md:flex-row
                space-y-2 md:space-x-3 md:space-y-0
                w-full md:w-3/5
                mt-5 md:mt-6
              "
            >
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
