"use client";

import { NAVBAR_HEIGHT } from "@/constants/navbarHeight";
import useIsMounted from "@/hooks/useIsMounted";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface SidePanelProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  className?: string;
  secondaryClassName?: string;
}

/**
 * Generic sliding panel used by the desktop filter UI and any future inspector-style experiences.
 * Handles Escape key closing and aligns with the navbar height so it never overlaps the sticky header.
 *
 * @param title Panel heading text.
 * @param children Panel content.
 * @param isOpen Whether the panel is visible.
 * @param toggle Handler that toggles the panel.
 * @param className Optional inner container overrides.
 * @param secondaryClassName Optional wrapper overrides.
 * @returns Fixed positioned side panel.
 */
const SidePanel: React.FC<SidePanelProps> = ({
  isOpen,
  toggle,
  title,
  children,
  className,
  secondaryClassName,
}) => {
  const isMounted: boolean = useIsMounted();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggle();
      }
    };

    if (isMounted) {
      window.addEventListener("keydown", handleEscape);
    }

    // Cleanup the event listener
    return () => {
      if (isMounted) {
        window.removeEventListener("keydown", handleEscape);
      }
    };
  }, [isMounted, toggle]);

  if (!isMounted) {
    return null;
  }

  const baseStyle: string = `mt-auto 
          h-full
          w-full shadow-lg md:rounded-xl 
          border
          border-neutral-300 dark:border-neutral-700
          bg-white dark:bg-black 
          transition-all duration-700 ease-in-out`;
  const overrideStyle: string = twMerge(baseStyle, className);

  return (
    <div
      className={twMerge(
        `
        fixed 
        flex flex-col 
        top-0 right-0 
        h-full 
        pt-24 md:px-2 md:pb-3
        w-full md:w-[24rem]
        z-20 
        transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700 ease-in-out 
        bg-none 
        `,
        secondaryClassName
      )}
    >
      <div className={overrideStyle}>
        <div className="flex flex-col h-full">
          <div
            className="
              sticky top-0
              z-10
              px-4 py-0
              flex justify-between items-center
              transition-all duration-700 ease-in-out
              rounded-t-2xl
            "
          >
            <h3>{title}</h3>
            <button onClick={toggle}>
              <span className="sr-only">Close</span>
              <IoClose
                className="
                  h-7 w-7 
                  text-neutral-800 dark:text-neutral-400 
                  hover:text-red-500 dark:hover:text-red-500 
                  transition-colors duration-500 ease-in-out"
                aria-hidden="true"
              />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
