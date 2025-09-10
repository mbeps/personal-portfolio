"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { LuMonitor } from "react-icons/lu";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../shadcn/ui/context-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "../shadcn/ui/tooltip";

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

  function getMenuItemStyles(currentTheme: string): string {
    return `menu-item-styles ${
      theme === currentTheme ? "font-bold text-red-800 dark:text-red-300" : ""
    }`;
  }

  return (
    <ContextMenu>
      <Tooltip>
        <TooltipTrigger>
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
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Right Click <br /> for Options
          </p>
        </TooltipContent>
      </Tooltip>

      <ContextMenuContent
        className="
          menu-content-styles 
          space-y-1 w-48
          transition-all duration-300
        "
      >
        <ContextMenuItem
          className={getMenuItemStyles("light")}
          onSelect={() => setTheme("light")}
        >
          <RiSunLine size={20} className="mr-3" />
          Light
        </ContextMenuItem>
        <ContextMenuItem
          className={getMenuItemStyles("dark")}
          onSelect={() => setTheme("dark")}
        >
          <RiMoonFill size={20} className="mr-3" />
          Dark
        </ContextMenuItem>
        <ContextMenuItem
          className={getMenuItemStyles("system")}
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
