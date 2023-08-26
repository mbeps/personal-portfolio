"use client";

import { useNavbarStore } from "@/atoms/navbarStore";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface NavbarItemProps {
  to: string;
  children: React.ReactNode;
}

/**
 * Navbar button that navigates to a different page when clicked.
 * It also highlights the button when the user is on the page it links to.
 * The button is also highlighted when the user hovers over it.
 * @param to (string) - The path to navigate to when the navbar item is clicked
 * @param children (ReactNode) - The content to display inside the navbar item
 * @returns (JSX.Element) - A navbar item component
 */
const NavbarItem: React.FC<NavbarItemProps> = ({ to, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen: isOverlayOpen, toggle: toggleOverlay } = useNavbarStore();

  /**
   * Handles the click event of the navbar item.
   * It closes the overlay and navigates to the page.
   */
  const handleClick = () => {
    toggleOverlay();
    router.push(to);
  };

  let active = pathname === to;

  const navbarItemStyle = `
      block lg:inline-block 
      ${active ? "font-bold" : "font-normal"} 
      text-neutral-900 dark:text-neutral-100 text-center
      dark:hover:text-neutral-200 
      px-4 py-3 m-2 w-full md:w-24 
      cursor-pointer 
      transition-all 
      hover:font-bold duration-300 
      relative group
      overflow-hidden
      md:text-base text-xl
    `;

  return (
    <div className={navbarItemStyle} onClick={() => handleClick()}>
      {children}
      <span
        className="
            w-full h-[3px]   
            rounded-full
            
            absolute 
            bottom-[2px]    
            left-0 inline-block 
            bg-red-500 dark:bg-red-900 
            -translate-x-[100%] group-hover:translate-x-0 transition-transform 
            duration-300"
      />
    </div>
  );
};

export default NavbarItem;
