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
  manifest: "/manifest/manifest.json",
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
      <html lang="en" suppressHydrationWarning>
        <body style={{ overflowX: "hidden" }}>
          <Providers>
            <Navbar />
            <main
              className={`
                bg-white dark:bg-neutral-900
                transition-colors duration-700 ease-in-out
                min-h-[calc(100vh-4rem)]
                pt-${NAVBAR_HEIGHT}
                overflow-x-hidden
              `}
            >
              <div
                className="
                  mx-auto max-w-3xl md:max-w-6xl
                  min-h-[85vh]
                  pt-10 p-4
                "
              >
                {children}
                <Footer />
              </div>
            </main>
          </Providers>
        </body>
      </html>
    </>
  );
}
