"use client";

import { useEffect, useState } from "react";
import { NAVBAR_HEIGHT } from "@/constants/navbar-height";
import { NAV_ITEMS } from "@/constants/routes";
import { useNavbarStore } from "@/hooks/use-navbar-store";
import GlobalSearch from "../global-search/search-button";
import DesktopNavbarSection from "./desktop-navbar-section";
import HomeButton from "./home-button";
import MobileNavbarSection from "./mobile-navbar-section";
import NavbarOverlay from "./navbar-overlay";
import ThemeToggle from "./theme-toggle";

/**
 * Sticky navigation bar that coordinates the home button, command palette trigger, theme toggle, and mobile drawer overlay.
 * Uses the Zustand navbar store so the overlay state can be shared with other components (scroll lock, body blur, etc.).
 *
 * @returns Header containing desktop links and mobile toggle with overlay.
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
        className={`h-${NAVBAR_HEIGHT} fixed top-0 z-50 mx-auto w-full px-4 md:px-6 ${
          scrolled && !isOverlayOpen ? "shadow-lg" : ""
        } dark:shadow-neutral-800 ${
          !isOverlayOpen
            ? scrolled
              ? "bg-neutral-50/60 backdrop-blur-xl dark:bg-neutral-900/60"
              : "bg-transparent"
            : "bg-neutral-50/0 dark:bg-neutral-900/0"
        } transition-all ease-in-out`}
        style={{
          transitionDuration,
          backdropFilter: !isOverlayOpen && scrolled ? "blur(20px)" : undefined,
        }}
      >
        <div className="mx-auto flex max-w-[2560px] items-center justify-between py-3 md:flex md:items-center md:py-1 lg:flex-row">
          <HomeButton />

          <div className="flex flex-row items-center space-x-2">
            <DesktopNavbarSection items={NAV_ITEMS} />
            <GlobalSearch />
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
