import type { Metadata } from "next";
import AboutSection from "@/app/(site)/_components/about-section/about-section";
import HeroSection from "@/app/(site)/_components/hero-section";
import ProjectsSection from "@/app/(site)/_components/project-section";
import { DEVELOPER } from "@/config/developer-info";
import { PATHS } from "@/config/paths";
import { ROUTES } from "@/config/routes";
import getMarkdownFromFileSystem from "@/lib/file-system/get-markdown-from-file-system";

const aboutContent: string | undefined = getMarkdownFromFileSystem(
  PATHS.ABOUT.SHORT,
)?.replace(/^\*/gm, "");

export const metadata: Metadata = {
  title: DEVELOPER.NAME,
  description: `${
    aboutContent || ROUTES.HOME.description
  }. My main programming languages are Python, Java, JavaScript, and TypeScript.`,
  category: "Homepage",
  creator: DEVELOPER.NAME,
  keywords: [
    ...DEVELOPER.SUBTITLES,
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
  ],
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
