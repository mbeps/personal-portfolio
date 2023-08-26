"use client"; // this is a client component
import { useNavbarStore } from "@/atoms/navbarStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import NavbarItem from "./NavbarItem";
import ThemeToggle from "./ThemeToggle";
import HomeButton from "./HomeButton";
import { NAV_ITEMS } from "@/constants/pages";
import Overlay from "./Overlay";

/**
 * Navbar component shown at the top of the page.
 *
 * @returns (JSX.Element): Navbar component
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { isOpen: isOverOpen, toggle: setOverlayOpen } = useNavbarStore();

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

  const transitionDuration = isOverOpen ? "1000ms" : "700ms";

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
            scrolled && !isOverOpen ? "shadow-lg " : ""
          } dark:shadow-neutral-800 
          bg-white dark:bg-stone-900 
          transition-all ease-in-out 
          ${
            !isOverOpen
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
                onClick={() => setOverlayOpen()}
              >
                {isOverOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
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
                    <NavbarItem to={item.page} active={pathname === item.page}>
                      {item.label}
                    </NavbarItem>
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
      <Overlay isOpen={isOverOpen} toggle={setOverlayOpen} items={NAV_ITEMS} />
    </>
  );
}
