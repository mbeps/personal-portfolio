import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import developerName from "@/constants/developerName";
import { HOME_PAGE } from "@/constants/pages";
import subtitles from "@/constants/subtitles";
import type { Metadata } from "next";
import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectSection";

const aboutContent: string | undefined = getMarkdownFromFileSystem(
  `public/about/short.md`
)?.content.replace(/^\*/gm, "");

export const metadata: Metadata = {
  title: developerName,
  description: `${
    aboutContent || HOME_PAGE.description
  }. My main programming languages are Python, Java, JavaScript, and TypeScript.`,
  category: "Homepage",
  creator: developerName,
  keywords: [...subtitles, "Python", "Java", "JavaScript", "TypeScript"],
};

/**
 * Home page which contains the Hero, About and Projects sections.
 * @returns Home page
 */
export default function Home() {
  return (
    <main>
      <div className="flex flex-col space-y-20 md:space-y-36">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
