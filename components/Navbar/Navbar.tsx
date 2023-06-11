"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

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
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

/**
 * Navbar component shown at the top of the page.
 *
 *
 * @returns (JSX.Element): Navbar component
 */
export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
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
            <Link to="home">
              <div className="container flex items-center space-x-2 cursor-pointer">
                <h2 className="text-2xl font-bold">Maruf Bepary</h2>
              </div>
            </Link>
            <div className="md:hidden flex items-center">
              {/* Dark / Light Mode toggle for mobile */}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-neutral-700 p-2 rounded-xl hover:bg-neutral-100 transition-colors duration-300 mr-2"
                >
                  <RiSunLine
                    size={25}
                    className="text-white hover:text-black transition-colors duration-300"
                  />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl hover:bg-slate-700 transition-colors duration-300 mr-2"
                >
                  <RiMoonFill
                    size={25}
                    className="text-black hover:text-white transition-colors duration-300"
                  />
                </button>
              )}
              {/* Hamburger menu */}
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
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
              {/* Links to sections */}
              {NAV_ITEMS.map((item) => {
                return (
                  <div
                    key={item.label}
                    className="flex justify-center w-full md:w-auto"
                  >
                    <Link
                      to={item.page}
                      className={`block 
                                  lg:inline-block 
                                  text-neutral-900  
                                  dark:text-neutral-100 
                                  cursor-pointer 
                                  transition-all 
                                  font-normal 
                                  hover:font-bold 
                                  duration-300
                                  hover:bg-gray-200 
                                  dark:hover:bg-red-950
                                  dark:hover:text-neutral-200
                                  rounded-lg
                                  px-4 py-3 
                                  m-2
                                  w-full 
                                  md:w-24 
                                  text-center`}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setNavbar(!navbar)}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}

              {/* Dark / Light Mode toggle for desktop */}
              <div className="hidden md:block">
                {currentTheme === "dark" ? (
                  <button
                    onClick={() => setTheme("light")}
                    className="bg-neutral-700 p-2 rounded-xl hover:bg-neutral-100 transition-colors duration-300"
                  >
                    <RiSunLine
                      size={25}
                      className="text-white hover:text-black transition-colors duration-300"
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => setTheme("dark")}
                    className="bg-slate-100 p-2 rounded-xl hover:bg-slate-700 transition-colors duration-300"
                  >
                    <RiMoonFill
                      size={25}
                      className="text-black hover:text-white transition-colors duration-300"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
