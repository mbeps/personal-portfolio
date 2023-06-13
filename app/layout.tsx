"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import Footer from "@/components/Footer/Footer";

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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <html lang="en" className={currentTheme === "dark" ? "dark" : ""}>
      <title>Maruf</title>
      <head />
      <body
        className={`
          bg-white dark:bg-stone-900
          transition-colors duration-700 ease-in-out
        `}
      >
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          <div className="pt-24" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
