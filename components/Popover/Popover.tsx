"use client";

import React, { ReactNode } from "react";
import { Popover as HeadlessPopover } from "@headlessui/react"; // Importing Popover as HeadlessPopover
import { BsChevronDown } from "react-icons/bs";

interface MyPopoverProps {
  children: ReactNode;
}

export const Popover: React.FC<MyPopoverProps> = ({ children }) => {
  return (
    <div className="relative w-full">
      <HeadlessPopover>
        {({ open }) => (
          <>
            <HeadlessPopover.Button // Use HeadlessPopover.Button here
              className={`
                inline-flex justify-between items-center
                z-10
                w-56
                px-4 py-2 
                text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize
                rounded-lg shadow-md
                bg-neutral-100 dark:bg-neutral-800 
                border-2 ${
                  open
                    ? "border-red-500 dark:border-red-950"
                    : "border-transparent"
                }
                hover:border-red-500 dark:hover:border-red-950
                transition-colors duration-500 ease-in-out
              `}
            >
              Toggle Popover
              <BsChevronDown
                className={`ml-2 h-5 w-5 ${open ? "rotate-180 transform" : ""}`}
              />
            </HeadlessPopover.Button>{" "}
            {/* Use HeadlessPopover.Button here */}
            <HeadlessPopover.Panel // Use HeadlessPopover.Panel here
              className={`absolute w-full z-10 p-4 mt-2 rounded-xl shadow-xl 
              bg-neutral-100 dark:bg-stone-950
              `}
            >
              {children}
            </HeadlessPopover.Panel>{" "}
            {/* Use HeadlessPopover.Panel here */}
          </>
        )}
      </HeadlessPopover>{" "}
      {/* Use the imported HeadlessPopover here */}
    </div>
  );
};
