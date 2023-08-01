import { twMerge } from "tailwind-merge";
import React, { Fragment, ReactNode } from "react";
import { Popover as HeadlessPopover, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

interface MyPopoverProps {
  title: string;
  children: ReactNode;
  className?: string;
}
/**
 * Displays a button which opens a popover when clicked.
 * The popover displays the children passed to it.
 * It is scrollable and has a max height of 50vh.
 * @param title (string): text to display in the popover button
 * @returns (JSX.Element): A popover component.
 */
export const Popover: React.FC<MyPopoverProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <div className="relative w-full">
      <HeadlessPopover>
        {({ open }) => (
          <>
            <HeadlessPopover.Button
              className={twMerge(
                `
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
              `,
                className // Merge user-provided className
              )}
            >
              {title}
              <BsChevronDown
                className={`ml-2 h-5 w-5 ${open ? "rotate-180 transform" : ""}`}
              />
            </HeadlessPopover.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <HeadlessPopover.Panel
                className={`
                  absolute w-full min-w-[320px] md:w-[900px] max-h-[50vh] overflow-auto
                  z-10 p-4 mt-2 rounded-xl shadow-xl 
                  bg-neutral-100 dark:bg-stone-950
                `}
              >
                {children}
              </HeadlessPopover.Panel>
            </Transition>
          </>
        )}
      </HeadlessPopover>
    </div>
  );
};
