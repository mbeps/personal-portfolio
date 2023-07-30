import AboutSection from "@/components/Content/AboutSection";
import HeroSection from "@/components/Content/HeroSection";
import ProjectsSection from "@/components/Content/ProjectSection";

/**
 * Home page which contains the Hero, About and Projects sections.
 * @returns (JSX.Element): Home page
 */
export default function Home() {
  return (
    <main>
      <div className="flex flex-col space-y-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
