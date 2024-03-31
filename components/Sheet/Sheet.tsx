import React from "react";
import { twMerge } from "tailwind-merge";

interface OverlayProps {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
  className?: string;
}
/**
 * Overlay component that pops up from the right side of the screen.
 * It displays the children passed to it.
 *
 * @param isOpen Whether the overlay is open or not
 * @param toggle Function to toggle the overlay
 * @param children Children to render inside the overlay
 * @returns Overlay component
 */

const Overlay: React.FC<OverlayProps> = ({
  isOpen,
  toggle,
  children,
  className,
}) => {
  const baseStyle = `fixed top-0 right-0 h-screen w-full z-40 
    transform ${isOpen ? "translate-x-0" : "translate-x-full"}
    transition-all duration-700 ease-in-out
    bg-white dark:bg-neutral-900 overflow-y-auto
    backdrop-blur-xl 
    bg-opacity-60 dark:bg-opacity-60
    flex flex-col justify-between`;

  const overlayStyle = twMerge(baseStyle, className);

  return <div className={overlayStyle}>{children}</div>;
};

export default Overlay;
