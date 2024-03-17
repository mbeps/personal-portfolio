import type { Metadata } from "next";
import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import developerName from "@/constants/developerName";
import { HOME_PAGE } from "@/constants/pages";

export const metadata: Metadata = {
  title: developerName,
  description: HOME_PAGE.description,
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
        {/* <ProjectsSection /> */}
      </div>
    </main>
  );
}
