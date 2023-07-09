"use client"; // this is a client component
import scrollToSection from "@/actions/scrollToSection";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules";
import Button from "../Atoms/Button";

/**+
 * Hero section component shown at the top of the page.
 * Contains a short description of myself, a picture and a link to the projects section.
 */
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-between items-center"
    >
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 md:flex-row md:space-x-4 md:text-left my-auto">
        {/* Profile Image */}
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Maruf!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-red-500 dark:text-red-700">
              Software Engineer{" "}
            </span>
            based in London, UK. Working towards creating software that makes
            life easier and more meaningful.
          </p>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Button
              variant="filled"
              onClick={() => {
                scrollToSection("projects");
              }}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                scrollToSection("about");
              }}
            >
              About
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center my-4">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
