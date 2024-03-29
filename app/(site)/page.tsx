import type { Metadata } from "next";
import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import developerName from "@/constants/developerName";

export const metadata: Metadata = {
  title: developerName,
  description: `The homepage for my personal website. 
    It contains information about me, my projects and my contact information.
    I am a software developer and a computer science student graduate from Royal Holloway, University of London.
    Graduate | Computer Science | Software Developer | Full Stack Developer | Software Engineer`,
};

/**
 * Home page which contains the Hero, About and Projects sections.
 * @returns (JSX.Element): Home page
 */
export default function Home() {
  return (
    <main>
      <div className="flex flex-col space-y-8 md:space-y-36">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
