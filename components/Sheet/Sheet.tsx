import React from "react";

interface OverlayProps {
  isOpen: boolean;
  toggle: () => void;
  children: React.ReactNode;
}

/**
 * Overlay component that pops up from the right side of the screen.
 * It displays the children passed to it.
 *
 * @param isOpen (boolean) - Whether the overlay is open or not
 * @param toggle (function) - Function to toggle the overlay
 * @param children (ReactNode) - Children to render inside the overlay
 * @returns (JSX.Element) - Overlay component
 */
const Overlay: React.FC<OverlayProps> = ({ isOpen, toggle, children }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full z-40 
			transform ${isOpen ? "translate-x-0" : "translate-x-full"}
			transition-all duration-700 ease-in-out
			bg-white dark:bg-stone-900 overflow-y-auto
			backdrop-blur-xl 
			bg-opacity-60 dark:bg-opacity-60
			flex flex-col justify-between`}
    >
      {children}
    </div>
  );
};

export default Overlay;
