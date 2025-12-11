import React from "react";
import { twMerge } from "tailwind-merge";

interface OverlayProps {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
  className?: string;
}
/**
 * Minimal sheet implementation used by the mobile navbar overlay and any other right-side drawers.
 * Animates in/out with Tailwind transitions and preserves scroll backdrop blur.
 *
 * @param isOpen Whether the sheet is visible.
 * @param toggle Currently unused handler (kept for API parity).
 * @param children Sheet contents.
 * @param className Optional overrides.
 * @returns Fixed positioned overlay container.
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
