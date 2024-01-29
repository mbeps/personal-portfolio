"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

/**
 * A button to toggle the theme (dark or light).
 * @returns (JSX.Element): a button to toggle the theme (dark or light)
 */
const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>();

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  const handleThemeChange = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const baseButtonClass =
    "group p-2.5 rounded-full transition-colors duration-1000";
  const darkButtonClass = "bg-black hover:bg-white";
  const lightButtonClass = "bg-white hover:bg-black";

  const baseIconClass = "transition-colors duration-700";
  const darkIconClass = "text-white group-hover:text-black";
  const lightIconClass = "text-black group-hover:text-white";

  return (
    <>
      {currentTheme === "dark" ? (
        <button
          onClick={handleThemeChange}
          className={`${baseButtonClass} ${darkButtonClass}`}
        >
          <RiSunLine
            size={27}
            className={`${baseIconClass} ${darkIconClass}`}
          />
        </button>
      ) : (
        <button
          onClick={handleThemeChange}
          className={`${baseButtonClass} ${lightButtonClass}`}
        >
          <RiMoonFill
            size={27}
            className={`${baseIconClass} ${lightIconClass}`}
          />
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
