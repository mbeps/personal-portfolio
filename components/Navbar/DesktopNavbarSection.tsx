import NavigationItemInterface from "@/interfaces/NavigationItemInterface";
import React from "react";
import NavbarItem from "./NavbarItem";

interface NavbarSectionProps {
  items: Array<NavigationItemInterface>;
}

/**
 * Section of the navbar that displays the links to the pages and the dark / light mode toggle.
 * This is used for desktop devices and it is hidden on mobile devices.
 *
 * @param items Links and names of pages that can be accessed via the navbar
 * @returns Component displaying the navbar section with the links to the pages
 */
const DesktopNavbarSection: React.FC<NavbarSectionProps> = ({ items }) => {
  return (
    <div className="hidden lg:block">
      <div
        className="
					md:flex
					items-center justify-center 
					space-y-7 md:space-x-5 md:space-y-0"
      >
        {/* Links  */}
        {items
          .filter((item) => item.isMain)
          .map((item) => {
            return (
              <div
                key={item.label}
                className="flex justify-center w-full md:w-auto"
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
