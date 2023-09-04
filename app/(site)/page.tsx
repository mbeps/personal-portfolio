import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maruf - Home",
  description:
    "The homepage for my personal website. It contains information about me, my projects and my contact information.",
};

/**
 * Home page which contains the Hero, About and Projects sections.
 * @returns (JSX.Element): Home page
 */
export default function Home() {
  return (
    <main>
      <div className="flex flex-col space-y-8 md:space-y-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
