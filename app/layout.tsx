"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";

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
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Automatically set website theme to match system theme
  useEffect(() => {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(defaultTheme);
  }, [setTheme]);

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
          <div
            className="
              globalWidth 
              px-4 sm:px-6  
              animate-fadeIn animation-delay-2           
              min-h-[85vh]
              "
          >
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
