"use client";

import { NAVBAR_HEIGHT } from "@/constants/NAVBAR";
import NAV_ITEMS from "@/constants/pages";
import { useNavbarStore } from "@/hooks/useNavbarStore";
import { useEffect, useState } from "react";
import SearchButton from "../GlobalSearch/SearchButton";
import DesktopNavbarSection from "./DesktopNavbarSection";
import HomeButton from "./HomeButton";
import MobileNavbarSection from "./MobileNavbarSection";
import NavbarOverlay from "./NavbarOverlay";
import ThemeToggle from "./ThemeToggle";

/**
 * Navbar component shown at the top of the page.
 * It displays the logo, links to other pages, and a dark / light mode toggle.
 * It allows the user to search for content on the website.
 * It also displays a hamburger menu for mobile devices.
 * When the hamburger menu is clicked, it opens a sidebar with the links to other pages.
 *
 * @returns Navbar component
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen: isOverlayOpen, toggle: toggleOverlay } = useNavbarStore();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled: boolean = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transitionDuration: string = isOverlayOpen ? "1000ms" : "700ms";

  return (
    <>
      <header
        className={`
          h-${NAVBAR_HEIGHT}
          w-full mx-auto
          px-4 md:px-6
          fixed 
          top-0 
          z-50 
          ${
            scrolled && !isOverlayOpen ? "shadow-lg " : ""
          } dark:shadow-neutral-800 
          bg-neutral-50 dark:bg-neutral-900 
          transition-all ease-in-out 
          ${
            !isOverlayOpen
              ? "bg-opacity-60 dark:bg-opacity-60 backdrop-blur-xl"
              : "bg-opacity-0 dark:bg-opacity-0"
          }
        `}
        style={{ transitionDuration }}
      >
        <div
          className="
            flex lg:flex-row md:flex
            items-center justify-between md:items-center 
            py-3 md:py-1
            mx-auto 
            max-w-[2560px]"
        >
          <HomeButton />

          <div className="flex flex-row items-center space-x-2">
            <DesktopNavbarSection items={NAV_ITEMS} />
            <SearchButton />
            <ThemeToggle />
            <MobileNavbarSection
              isOverlayOpen={isOverlayOpen}
              toggleOverlay={toggleOverlay}
            />
          </div>
        </div>
      </header>
      <NavbarOverlay
        isOpen={isOverlayOpen}
        toggle={toggleOverlay}
        items={NAV_ITEMS}
      />
    </>
  );
}
