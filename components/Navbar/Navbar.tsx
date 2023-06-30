"use client"; // this is a client component
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import NavbarItem from "./NavbarItem";
import ThemeToggle from "./ThemeToggle";

interface NavItem {
  label: string;
  page: string;
}

/**
 * Buttons to be displayed in the navbar.
 */
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "Projects",
    page: "/projects",
  },
  {
    label: "Posts",
    page: "/posts",
  },
];

export const NavbarContext = createContext({
  setNavbar: (_: boolean) => {},
});

/**
 * Navbar component shown at the top of the page.
 *
 * @returns (JSX.Element): Navbar component
 */
export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <NavbarContext.Provider value={{ setNavbar }}>
      <header
        className={`
        w-full mx-auto  
        px-4 
        sm:px-20 
        fixed 
        top-0 
        z-50 
        shadow 
        bg-white 
        dark:bg-stone-900 
        dark:border-b 
        dark:border-stone-600 
        transition-colors duration-700 ease-in-out
  `}
      >
        <div className="justify-between md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <HomeButton />
              <div className="md:hidden flex items-center">
                {/* Dark / Light Mode toggle for mobile */}
                <ThemeToggle />
                {/* Hamburger menu */}
                <button
                  className="p-2 
                  text-neutral-800 dark:text-neutral-200 
                  rounded-xl 
                  outline-none ml-2"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {/* Links  */}
                {NAV_ITEMS.map((item) => {
                  return (
                    <div
                      key={item.label}
                      className="flex justify-center w-full md:w-auto"
                    >
                      <NavbarItem
                        to={item.page}
                        active={pathname === item.page}
                      >
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
        </div>
      </header>
    </NavbarContext.Provider>
  );
}

/**
 * Home button component.
 * When clicked, scrolls to the top of the page if the user is already on the home page.
 * Otherwise, navigates to the home page.
 * @returns (JSX.Element): Home button component
 */
const HomeButton: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Scrolls to the top of the page if the user is already on the home page.
   * Otherwise, navigates to the home page.
   */
  const navigateHome = () => {
    const homeElement = document.getElementById("home");

    // If the user is already on the home page, scroll to the top of the page
    if (pathname === "/" && homeElement) {
      window.scrollTo({
        top: homeElement.offsetTop,
        behavior: "smooth",
      });
      // Otherwise, navigate to the home page
    } else {
      router.push("/");
    }
  };

  return (
    <div
      onClick={navigateHome}
      className="container flex items-center space-x-2 cursor-pointer"
    >
      <h2
        className="
        text-2xl font-bold
        hover:text-red-500 dark:hover:text-red-800
        transition-colors duration-700 ease-in-out
        "
      >
        Maruf Bepary
      </h2>
    </div>
  );
};
