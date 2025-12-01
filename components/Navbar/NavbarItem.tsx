"use client";

import { useNavbarStore } from "@/hooks/useNavbarStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
}

/**
 * Shared navigation link that syncs active state with the current pathname and closes the mobile overlay on click.
 *
 * @param href Destination path.
 * @param children Label contents.
 * @returns Styled link with overlay-aware click handler.
 */
const NavbarItem: React.FC<NavbarItemProps> = ({ href, children }) => {
  const pathname: string = usePathname();
  const { isOpen: isOverlayOpen, close: closeOverlay } = useNavbarStore();

  /**
   * Handles the click event of the navbar item.
   * It closes the overlay and navigates to the page.
   */
  function handleClick() {
    if (isOverlayOpen) {
      closeOverlay();
    }
  }

  let isActive: boolean = pathname === href;

  const navbarItemStyle = `
    block lg:inline-block 
    ${isActive ? "font-bold" : "font-normal"} 
    text-neutral-900 dark:text-neutral-100 text-center
    md:dark:hover:text-neutral-200 
    px-4 py-3 m-2 w-full md:w-full md:w-auto
    cursor-pointer 
    transition-all 
    duration-300 
    relative group
    overflow-hidden
    md:text-base text-2xl 
    font-semibold md:font-normal
  `;

  return (
    <Link href={href} className={navbarItemStyle} onClick={() => handleClick()}>
      {children}

      {/* Hover Underline */}
      <span
        className="
          w-full h-[3px]   
          rounded-full
          absolute 
          bottom-0.5
          left-0 inline-block 
          bg-red-500 dark:bg-red-900 
          -translate-x-full md:group-hover:translate-x-0 transition-transform 
          duration-300"
      />
    </Link>
  );
};

export default NavbarItem;
