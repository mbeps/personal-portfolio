import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import developerName from "@/constants/developerName";
import { HOME_PAGE } from "@/constants/pages";
import subtitles from "@/constants/subtitles";
import type { Metadata } from "next";
import AboutSection from "./_components/AboutSection/AboutSection";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectSection";

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
