"use client";

import { useNavbarStore } from "@/hooks/useNavbarStore";
import Link from "next/link";
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
  const { isOpen: isOverlayOpen, close: closeOverlay } = useNavbarStore();

  /**
   * Handles the click event of the navbar item.
   * It closes the overlay and navigates to the page.
   */
  const handleClick = () => {
    if (isOverlayOpen) {
      closeOverlay();
    }
  };

  let active = pathname === to;

  const navbarItemStyle = `
    block lg:inline-block 
    ${active ? "font-bold" : "font-normal"} 
    text-neutral-900 dark:text-neutral-100 text-center
    md:dark:hover:text-neutral-200 
    px-4 py-3 m-2 w-full md:w-26
    cursor-pointer 
    transition-all 
    duration-300 
    relative group
    overflow-hidden
    md:text-base text-xl
  `;

  return (
    <Link href={to} className={navbarItemStyle} onClick={() => handleClick()}>
      {children}
      <span
        className="
            w-full h-[3px]   
            rounded-full
            
            absolute 
            bottom-[2px]    
            left-0 inline-block 
            bg-red-500 dark:bg-red-900 
            -translate-x-[100%] md:group-hover:translate-x-0 transition-transform 
            duration-300"
      />
    </Link>
  );
};

export default NavbarItem;
