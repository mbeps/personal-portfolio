import type React from "react";
import type NavigationItemInterface from "@/interfaces/NavigationItemInterface";
import NavbarItem from "./NavbarItem";

interface NavbarSectionProps {
  items: Array<NavigationItemInterface>;
}

/**
 * Renders the main navigation links for large screens while letting the mobile drawer own navigation below the lg breakpoint.
 *
 * @param items NAV_ITEMS array filtered for primary destinations.
 * @returns Horizontal stack of navigation buttons.
 */
const DesktopNavbarSection: React.FC<NavbarSectionProps> = ({ items }) => {
  return (
    <div className="hidden lg:block">
      <div className="items-center justify-center space-y-7 md:flex md:space-x-4 md:space-y-0">
        {/* Links  */}
        {items
          .filter((item) => item.isMain)
          .map((item) => {
            return (
              <div
                key={item.label}
                className="flex w-full justify-center md:w-auto"
              >
                <NavbarItem href={item.path}>{item.label}</NavbarItem>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DesktopNavbarSection;
