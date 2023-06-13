"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import Button from "../Atoms/Button";
import HeadingOne from "./Text/HeadingOne";

/**+
 * Hero section component shown at the top of the page.
 * Contains a short description of myself, a picture and a link to the projects section.
 */
const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
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

          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Button to="projects" variant="filled" isSamePage>
              Projects
            </Button>
            <Button to="about" variant="ghost" isSamePage>
              About
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
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
