"use client";

import LanguageSection from "./LanguageSection";
import SkillSection from "./SkillSection";

/**
 * About section component.
 * Split into two sections: left and right.
 * Left section contains a short description of myself.
 * Right section contains a list of skills, languages and technologies.
 * On mobile, the sections are stacked on top of each other.
 *
 * The skills, languages and technologies are displayed as tags.
 * Some of these tags can be clicked which will open a modal.
 * There is also a view more button that opens a modal to show more skills, languages or technologies.
 * @returns (JSX.Element): About section
 */
const AboutSection = () => {
  return (
    <section id="about" className="wrapper">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded"></hr>
        </h1>

        <div
          className="
            flex flex-col md:flex-row 
            space-y-10 md:space-y-0
            items-stretch justify-center align-top 
            md:space-x-10  md:p-4 
            md:text-left 
          "
        >
          {/* Left section */}
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 mt-6 md:text-left">
              Get to know me!
            </h1>

            <p>
              Greetings! I&apos;m Maruf, a{" "}
              <span className="font-bold">software engineer</span> from Royal
              Holloway University with a First Class Honours in Computer
              Science. My journey is driven intensely by{" "}
              <span className="font-bold">curiosity</span> and an unyielding
              passion for innovative technology.
            </p>
            <div className="m-2.5" />
            <p>
              My experience spans the{" "}
              <span className="font-bold">software development lifecycle</span>.
              Yet, I see every day as a new opportunity to learn. With a
              penchant for{" "}
              <span className="font-bold">constantly adapting</span>, pushing
              boundaries, and{" "}
              <span className="font-bold">challenging the norms</span>, my
              explorations have led me into the depths of{" "}
              <span className="font-bold">Machine Learning</span> and{" "}
              <span className="font-bold">Mathematics</span>. Presently,
              I&apos;m deepening my understanding of advanced ML techniques.
            </p>
            <div className="m-2.5" />
            <p>
              Additionally, my commitment to{" "}
              <span className="font-bold">problem-solving</span> and{" "}
              <span className="font-bold">creativity</span> has introduced me to
              the world of <span className="font-bold">DevOps</span> via Udemy.
              Here, I&apos;m amalgamating innovation with efficiency to refine
              and automate tech processes.
            </p>
            <div className="m-2.5" />
            <p>
              Outside the realm of code, my passions include football,
              badminton, science literature, and travel. Every day is an
              adventure, and I believe in{" "}
              <span className="font-bold">seizing every moment</span> with{" "}
              <span className="font-bold">unbridled enthusiasm</span>.
            </p>
          </div>

          {/* Right section */}
          <div className="text-center md:w-1/2 md:text-left ">
            <LanguageSection />
            <div className="h-1 mt-2 md:mt-6 " />
            <SkillSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
