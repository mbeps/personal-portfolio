"use client";

import type React from "react";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import useIsMounted from "@/hooks/useIsMounted";

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
        `fixed top-0 right-0 z-20 flex h-full w-full transform flex-col pt-24 md:w-[24rem] md:px-2 md:pb-3 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-none transition-all duration-700 ease-in-out`,
        secondaryClassName,
      )}
    >
      <div className={overrideStyle}>
        <div className="flex h-full flex-col">
          <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-2xl px-4 py-0 transition-all duration-700 ease-in-out">
            <h3>{title}</h3>
            <button onClick={toggle}>
              <span className="sr-only">Close</span>
              <IoClose
                className="h-7 w-7 text-neutral-800 transition-colors duration-500 ease-in-out hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-500"
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
