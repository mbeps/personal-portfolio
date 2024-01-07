import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "@/providers/Providers";
import "./globals.css";
import { NAVBAR_HEIGHT } from "@/constants/NAVBAR";

/**
 * Layout component which applies to all pages.
 * Contains:
 * - Navbar
 * - Footer
 * - Children (page content)
 * It also applies the theme to the page.
 * @param children (React.ReactNode): Page content
 * @returns (JSX.Element): Layout component
 */
export default function RootLayoutWithProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Providers>
            <Navbar />
            <main
              className={`
                bg-white dark:bg-neutral-900
                transition-colors duration-700 ease-in-out
                min-h-[calc(100vh-4rem)]
                pt-${NAVBAR_HEIGHT}
              `}
            >
              <div
                className="
                  mx-auto max-w-3xl md:max-w-6xl
                  pt-10 p-1.5 md:p-0
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
