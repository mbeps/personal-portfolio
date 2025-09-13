import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { NAVBAR_HEIGHT } from "@/constants/NAVBAR";
import developerName from "@/constants/developerName";
import { HOME_PAGE } from "@/constants/pages";
import subtitles from "@/constants/subtitles";
import { Providers } from "@/providers/Providers";
import type { Metadata } from "next";
import "./globals.css";
import getMarkdownFromFileSystem from "@/actions/file-system/getMarkdownFromFileSystem";
import { VercelTrackers } from "@/providers/VercelTrackers";
import Scroll from "@/components/UI/Scroll";
import "katex/dist/katex.min.css";

import { Inter } from "next/font/google";

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
  `public/about/short.md`
)?.content.replace(/^\*/gm, "");

export const metadata: Metadata = {
  title: developerName,
  description: aboutContent || HOME_PAGE.description,
  icons: ["/manifest/icon512_maskable.png", "/manifest/icon512_rounded.png"],
  category: "Homepage",
  creator: developerName,
  keywords: subtitles,
};

/**
 * Layout component which applies to all pages.
 * Contains:
 * - Navbar
 * - Footer
 * - Children (page content)
 * It also applies the theme to the page.
 * @param children Page content
 * @returns Layout component
 */
export default function RootLayoutWithProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
              className={`
                bg-neutral-50 dark:bg-neutral-900
                transition-colors duration-700 ease-in-out
                pt-${NAVBAR_HEIGHT}
                overflow-x-hidden
              `}
            >
              <div
                className="
                  mx-auto max-w-3xl md:max-w-6xl
                  min-h-[calc(100vh-4rem)]
                  pt-4 px-4 md:px-4 lg:px-0
                "
              >
                {children}
              </div>
              <Footer />
            </main>
          </Providers>
          <VercelTrackers />
        </body>
      </html>
    </>
  );
}
