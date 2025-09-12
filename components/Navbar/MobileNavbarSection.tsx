import React from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface MobileNavbarSectionProps {
  isOverlayOpen: boolean;
  toggleOverlay: () => void;
}

/**
 * Section of the navbar that displays the hamburger menu for mobile devices.
 * This is specifically for mobile devices and is hidden on desktop devices.
 *
 * @param isOverlayOpen Whether the overlay is open or not
 * @param toggleOverlay Function to toggle the overlay
 * @returns Section of the navbar that displays the hamburger menu for mobile devices
 */
const MobileNavbarSection: React.FC<MobileNavbarSectionProps> = ({
  isOverlayOpen,
  toggleOverlay,
}) => {
  return (
    <div className="lg:hidden flex items-center">
      <button
        className="
          p-2 
          text-neutral-800 dark:text-neutral-200 
          rounded-xl 
          outline-hidden ml-2"
        onClick={toggleOverlay}
      >
        {isOverlayOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
      </button>
    </div>
  );
};

export default MobileNavbarSection;
