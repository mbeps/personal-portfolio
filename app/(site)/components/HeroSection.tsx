"use client";
import scrollToSection from "@/actions/scrollToSection";
import Button from "@/components/Atoms/Button";
import Socials from "@/components/Socials/Socials";
import TextLoop from "@/components/TextLoop/TextLoop";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";

/**
 * Hero section component shown at the top of the page.
 * Contains a short description of myself, a picture and a link to the projects section.
 */
const HeroSection = () => {
  /**
   * Array of strings to loop through.
   */
  const loopItems = [
    "Software Engineering",
    "Full Stack Development",
    "Machine Learning",
    "Mathematics",
  ];

  return (
    <section
      id="home"
      className="wrapper flex flex-col justify-between items-center"
    >
      <div
        className="
          flex flex-col 
          text-center items-center justify-center 
          animate-fadeIn animation-delay-2
          md:flex-row md:space-x-12 md:text-left  
          my-auto w-full
"
      >
        {/* Profile Image */}
        <div className="flex md:w-1/2 justify-center p-8 md:p-0">
          <Image
            src="/profile.png"
            alt="Profile image of Maruf Bepary"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>

        <div className="md:mt-2 md:w-3/5 space-y-7 md:space-y-5 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mt-6 md:mt-0 mb-6">
            {`Hi, I'm Maruf!`}
          </h1>

          {/* Roles */}
          <TextLoop
            loopItems={loopItems}
            implementation="typewriter"
            className="
              text-2xl md:text-4xl 
              font-semibold 
              p-1 bg-clip-text text-transparent 
              bg-gradient-to-r 
              from-red-600 via-orange-500 to-rose-500 
              dark:from-red-700 dark:via-orange-600 dark:to-rose-800
              tracking-wide
            "
          />

          <Socials
            iconSize={40}
            className="
              md:space-x-5
            "
          />

          {/* Buttons */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 w-full md:w-3/5">
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
