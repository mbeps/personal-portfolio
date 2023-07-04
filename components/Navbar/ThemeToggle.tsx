"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

/**
 * A button to toggle the theme (dark or light).
 * @returns (JSX.Element): a button to toggle the theme (dark or light)
 */
const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>();

  // Checks the current theme and sets it to the current theme.
  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  /**
   * Toggle the theme (dark or light).
   */
  const handleThemeChange = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      {currentTheme === "dark" ? (
        <button
          onClick={handleThemeChange}
          className="group bg-black p-2 rounded-xl hover:bg-white transition-colors duration-1000"
        >
          <RiSunLine
            size={25}
            className="text-white group-hover:text-black transition-colors duration-700"
          />
        </button>
      ) : (
        <button
          onClick={handleThemeChange}
          className="group bg-white p-2 rounded-xl hover:bg-black transition-colors duration-1000"
        >
          <RiMoonFill
            size={25}
            className="text-black group-hover:text-white transition-colors duration-700"
          />
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
