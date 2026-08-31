import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import developerName from "@/constants/developerName";
import { NAVBAR_HEIGHT } from "@/constants/navbarHeight";
import { ROUTES } from "@/constants/routes";
import subtitles from "@/constants/subtitles";
import { Providers } from "@/providers/Providers";
import "./globals.css";
import Scroll from "@/components/ui/Scroll";
import getMarkdownFromFileSystem from "@/lib/file-system/getMarkdownFromFileSystem";
import { VercelTrackers } from "@/providers/VercelTrackers";
import "katex/dist/katex.min.css";

import { Inter } from "next/font/google";
import { PATHS } from "@/constants/paths";

// Inter Variable configuration optimised for modern typography
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Markdown detailing the developer's about information.
 * This is the used for SEO.
 */
const aboutContent: string | undefined = getMarkdownFromFileSystem(
  PATHS.ABOUT.SHORT,
)?.replace(/^\*/gm, "");

export const metadata: Metadata = {
  title: developerName,
  description: aboutContent || ROUTES.HOME.description,
  icons: [
    {
      rel: "icon",
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
  ],
  category: "Homepage",
  creator: developerName,
  keywords: subtitles,
};

/**
 * App Router shell that wires Providers, navigation chrome, smooth scrolling, and analytics around every page.
 * Ensures MD-powered metadata, theme context, and the sticky navbar/footer remain consistent across the site.
 *
 * @param children Page content rendered by each route segment.
 * @returns HTML + body tree with shared providers and layout furniture.
 */
export default function RootLayoutWithProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
      className={inter.variable}
    >
      <body style={{ overflowX: "hidden" }}>
        <Providers>
          <Scroll />
          <Navbar />
          <main
            className={`bg-neutral-50 transition-colors duration-700 ease-in-out dark:bg-neutral-900 pt-${NAVBAR_HEIGHT} overflow-x-hidden`}
          >
            <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-3xl px-4 pt-4 md:max-w-6xl md:px-4 lg:px-0">
              {children}
            </div>
            <Footer />
          </main>
        </Providers>
        <VercelTrackers />
      </body>
    </html>
  );
}
