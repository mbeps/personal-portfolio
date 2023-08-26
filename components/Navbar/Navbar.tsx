"use client";
import { useNavbarStore } from "@/atoms/navbarStore";
import { NAV_ITEMS } from "@/constants/pages";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import HomeButton from "./HomeButton";
import NavbarItem from "./NavbarItem";
import NavbarOverlay from "./NavbarOverlay";
import ThemeToggle from "./ThemeToggle";

/**
 * Navbar component shown at the top of the page.
 * It displays the logo, links to other pages, and a dark / light mode toggle.
 * It also displays a hamburger menu for mobile devices.
 * When the hamburger menu is clicked, it opens a sidebar with the links to other pages.
 *
 * @returns (JSX.Element): Navbar component
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen: isOverlayOpen, toggle: toggleOverlay } = useNavbarStore();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transitionDuration = isOverlayOpen ? "1000ms" : "700ms";

  return (
    <>
      <header
        className={`
          w-full mx-auto  
          px-4 sm:px-20 
          fixed 
          top-0 
          z-50 
          ${
            scrolled && !isOverlayOpen ? "shadow-lg " : ""
          } dark:shadow-neutral-800 
          bg-white dark:bg-stone-900 
          transition-all ease-in-out 
          ${
            !isOverlayOpen
              ? "bg-opacity-60 dark:bg-opacity-60 backdrop-blur-xl"
              : "bg-opacity-0 dark:bg-opacity-0"
          }
        `}
        style={{ transitionDuration }}
      >
        <div className="justify-between md:items-center md:flex globalWidth">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <HomeButton />
            <div className="md:hidden flex items-center">
              {/* Dark / Light Mode toggle for mobile */}
              <ThemeToggle />
              {/* Hamburger menu */}
              <button
                className="
                  p-2 
                  text-neutral-800 dark:text-neutral-200 
                  rounded-xl 
                  outline-none ml-2"
                onClick={() => toggleOverlay()}
              >
                {isOverlayOpen ? (
                  <IoMdClose size={30} />
                ) : (
                  <IoMdMenu size={30} />
                )}
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div
              className="
              md:flex
              items-center justify-center 
              space-y-8 md:space-x-6 md:space-y-0"
            >
              {/* Links  */}
              {NAV_ITEMS.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="flex justify-center w-full md:w-auto"
                  >
                    <NavbarItem to={item.page}>{item.label}</NavbarItem>
                  </div>
                );
              })}
              {/* Dark / Light Mode toggle for desktop */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
            </div>
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
