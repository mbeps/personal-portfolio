"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { RiComputerLine, RiMoonFill, RiSunLine } from "react-icons/ri";
import { LuMonitor } from "react-icons/lu";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../shadcn/ui/context-menu";

/**
 * A button to toggle the theme (dark or light).
 *
 * @returns A button to toggle the theme (dark or light)
 */
const ThemeToggle: React.FC = () => {
  type ThemeType = "dark" | "light" | "system" | undefined;
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeType>();

  useEffect(() => {
    setCurrentTheme(resolvedTheme as ThemeType);
  }, [resolvedTheme]);

  function handleThemeChange() {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  const baseButtonClass =
    "group p-2.5 rounded-full transition-colors duration-1000";
  const darkButtonClass = "bg-black hover:bg-white";
  const lightButtonClass = "bg-white hover:bg-black";

  const baseIconClass = "transition-colors duration-700";
  const darkIconClass = "text-white group-hover:text-black";
  const lightIconClass = "text-black group-hover:text-white";

  return (
    <ContextMenu>
      <ContextMenuTrigger>
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
      </ContextMenuTrigger>

      <ContextMenuContent
        className="
        menu-content-styles 
        space-y-1 w-[12rem]
        transition-all duration-300
        "
      >
        <ContextMenuItem
          className={`menu-item-styles ${theme === "light" ? "font-bold" : ""}`}
          onSelect={() => setTheme("light")}
        >
          <RiSunLine size={20} className="mr-3" />
          Light
        </ContextMenuItem>
        <ContextMenuItem
          className={`menu-item-styles ${theme === "dark" ? "font-bold" : ""}`}
          onSelect={() => setTheme("dark")}
        >
          <RiMoonFill size={20} className="mr-3" />
          Dark
        </ContextMenuItem>
        <ContextMenuItem
          className={`menu-item-styles ${
            theme === "system" ? "font-bold" : ""
          }`}
          onSelect={() => setTheme("system")}
        >
          <LuMonitor size={20} className="mr-3" />
          System
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default ThemeToggle;
