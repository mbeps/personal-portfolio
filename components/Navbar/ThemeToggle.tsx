"use client";
import React from "react";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

interface ThemeToggleProps {
  currentTheme: string | undefined;
  setTheme: (theme: string) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  currentTheme,
  setTheme,
}) => {
  return (
    <>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="bg-neutral-700 p-2 rounded-xl hover:bg-red-900 transition-colors duration-300 hover:text-black"
        >
          <RiSunLine
            size={25}
            className="text-white transition-colors duration-300"
          />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
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
