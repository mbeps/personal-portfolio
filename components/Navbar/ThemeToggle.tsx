import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

/**
 * A button to toggle the theme (dark or light).
 * @returns (JSX.Element): a button to toggle the theme (dark or light)
 */
const ThemeToggle: React.FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>();

  // Checks the current theme and sets it to the current theme.
  useEffect(() => {
    const appliedTheme = theme === "system" ? systemTheme : theme;
    setCurrentTheme(appliedTheme || "light");
  }, [theme, systemTheme]);

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
          className="bg-neutral-700 p-2 rounded-xl hover:bg-red-900 transition-colors duration-300 hover:text-black"
        >
          <RiSunLine
            size={25}
            className="text-white transition-colors duration-300"
          />
        </button>
      ) : (
        <button
          onClick={handleThemeChange}
          className="bg-slate-100 p-2 rounded-xl hover:bg-red-300 transition-colors duration-300"
        >
          <RiMoonFill
            size={25}
            className="text-black transition-colors duration-300"
          />
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
