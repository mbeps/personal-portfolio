"use client";

import React, { ReactNode } from "react";
import { Popover as HeadlessPopover } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

interface MyPopoverProps {
  title: string;
  children: ReactNode;
}

export const Popover: React.FC<MyPopoverProps> = ({ children, title }) => {
  return (
    <div className="relative w-full">
      <HeadlessPopover>
        {({ open }) => (
          <>
            <HeadlessPopover.Button
              className={`
                inline-flex justify-between items-center
                z-10
                w-56
                px-4 py-2 
                text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize
                rounded-xl
                shadow-md hover:shadow-lg focus:shadow-lg
                bg-neutral-100 dark:bg-neutral-800 
                border-2 ${
                  open
                    ? "border-red-500 dark:border-red-950"
                    : "border-transparent"
                }
                hover:border-red-500 dark:hover:border-red-950
                transition-all duration-500 ease-in-out
              `}
            >
              {title}
              <BsChevronDown
                className={`ml-2 h-5 w-5 ${open ? "rotate-180 transform" : ""}`}
              />
            </HeadlessPopover.Button>{" "}
            {/* Use HeadlessPopover.Button here */}
            <HeadlessPopover.Panel // Use HeadlessPopover.Panel here
              className={`
                absolute w-full md:w-[900px] max-h-[50vh] overflow-auto
                z-10 p-4 mt-2 rounded-xl shadow-xl 
                bg-neutral-100 dark:bg-stone-950
              `}
            >
              {children}
            </HeadlessPopover.Panel>
            {/* Use HeadlessPopover.Panel here */}
          </>
        )}
      </HeadlessPopover>{" "}
      {/* Use the imported HeadlessPopover here */}
    </div>
  );
};
