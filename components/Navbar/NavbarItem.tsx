"use client";

import { useNavbarStore } from "@/atoms/navbarStore";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface NavbarItemProps {
  to: string;
  children: React.ReactNode;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ to, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen: isOverlayOpen, toggle: toggleOverlay } = useNavbarStore();

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
