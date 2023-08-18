"use client"; // this is a client component
import { useNavbarStore } from "@/atoms/navbarStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
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
    label: "Blog",
    page: "/blogs",
  },
];
/**
 * Navbar component shown at the top of the page.
 *
 * @returns (JSX.Element): Navbar component
 */
export default function Navbar() {
  const pathname = usePathname();

  // State to hold whether the user has scrolled or not
  const [scrolled, setScrolled] = useState(false);
  const { isOpen: navbar, toggle: setNavbar } = useNavbarStore();

  // This effect will run every time the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Attach the scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        w-full mx-auto  
        px-4 sm:px-20 
        fixed 
        top-0 
        z-50 
        ${scrolled ? "shadow-lg " : ""} dark:shadow-neutral-800 
        bg-white dark:bg-stone-900 
        transition-all duration-700 ease-in-out
        backdrop-blur-xl bg-opacity-60 dark:bg-opacity-60 
      `}
    >
      <div
        className="
        justify-between md:items-center md:flex 
        globalWidth
      "
      >
        <div>
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
                onClick={() => setNavbar()}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block h-screen" : "hidden"
            } `}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
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
      </div>
    </header>
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
