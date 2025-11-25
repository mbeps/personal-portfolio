import React from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface MobileNavbarSectionProps {
  isOverlayOpen: boolean;
  toggleOverlay: () => void;
}

/**
 * Mobile-only trigger that toggles the fullscreen navigation overlay so large nav lists remain accessible on phones.
 *
 * @param isOverlayOpen Current overlay state.
 * @param toggleOverlay Callback from the navbar store that flips the overlay state.
 * @returns Button that swaps between hamburger and close icons.
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
