import type { Metadata } from "next";
import developerName from "@/constants/developer-name";
import { PATHS } from "@/constants/paths";
import { ROUTES } from "@/constants/routes";
import subtitles from "@/constants/subtitles";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";
import AboutSection from "./_components/about-section/about-section";
import HeroSection from "./_components/hero-section";
import ProjectsSection from "./_components/project-section";

const aboutContent: string | undefined = getMarkdownFromFileSystem(
  PATHS.ABOUT.SHORT,
)?.replace(/^\*/gm, "");

export const metadata: Metadata = {
  title: developerName,
  description: `${
    aboutContent || ROUTES.HOME.description
  }. My main programming languages are Python, Java, JavaScript, and TypeScript.`,
  category: "Homepage",
  creator: developerName,
  keywords: [...subtitles, "Python", "Java", "JavaScript", "TypeScript"],
};

/**
 * Landing experience that stitches together the hero, about snapshot, and curated projects for quick scanning.
 * Pulls markdown powered about copy and passes hero metadata to downstream sections.
 *
 * @returns Composed homepage content.
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
