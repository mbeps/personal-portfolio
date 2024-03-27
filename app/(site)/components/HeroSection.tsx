"use client";

import scrollToSection from "@/actions/scrollToSection";
import Socials from "@/components/Socials/Socials";
import TextLoop from "@/components/TextLoop/TextLoop";
import { Button } from "@/components/shadcn/ui/button";
import developerName from "@/constants/developerName";
import subtitles from "@/constants/subtitles";
import useIsMounted from "@/hooks/useIsMounted";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";

/**
 * Hero section component shown at the top of the page.
 * Contains:
 * - Profile image of myself
 * - My full name
 * - My roles which loop through a list
 * - Social media links such as GitHub, LinkedIn, and email
 * - Buttons to navigate to the projects and about sections
 */
const HeroSection = () => {
  const isMounted: boolean = useIsMounted();

  return (
    <section id="home" className="home-section-wrapper">
      <div
        className="
          flex flex-col lg:flex-row
          text-center lg:text-left
          items-center
          justify-center lg:justify-start
          animate-fadeIn animation-delay-2
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
          {/* Profile Image */}
          <Image
            src="/profile.png"
            alt="Profile image of the developer"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
            quality={60}
            loading="eager"
            priority
          />
        </div>

        {/* Left / Bottom Section */}
        <div
          className="
            md:mt-2
            lg:w-3/5 w-full
            space-y-7 md:space-y-4
            items-center justify-center lg:justify-start
        "
        >
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl md:text-5xl font-normal">{`Hi, I'm`}</h1>
            <h1 className="text-5xl md:text-7xl font-bold">{developerName}</h1>
          </div>

          {/* Roles */}
          {isMounted && (
            <TextLoop
              loopItems={subtitles}
              implementation="typewriter"
              className="
                text-2xl md:text-4xl font-semibold
                p-1 bg-clip-text text-transparent
                bg-gradient-to-r from-red-600 via-orange-500 to-rose-500 dark:from-red-700 dark:via-orange-600 dark:to-rose-800 tracking-wide"
            />
          )}

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
                space-y-4 md:space-x-4 md:space-y-0
                w-full md:w-3/5
          "
            >
              <Button
                variant="gradient"
                onClick={() => {
                  scrollToSection("projects");
                }}
                className="w-full"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  scrollToSection("about");
                }}
                className="w-full"
              >
                About
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="
        flex flex-row 
        items-center text-center justify-center 
        my-10 md:my-4
      "
      >
        <div
          onClick={() => {
            scrollToSection("about");
          }}
        >
          <HiArrowDown size={35} className="animate-bounce slow-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
