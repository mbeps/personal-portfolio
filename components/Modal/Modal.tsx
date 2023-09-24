"use client";

import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";
import HeadingTwo from "../Text/HeadingTwo";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  className?: string;
}

/**
 * Base modal component which is displayed on top of the page.
 * The body of the modal is passed as a child.
 *
 * @param isOpen (boolean) Whether the modal is open or not
 * @param onClose (function) Function to close the modal
 * @param children (React.ReactNode) The body of the modal
 * @returns (JSX.Element): base modal component
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className,
}) => {
  const defaultDialogPanelClasses = `
    transform 
    overflow-hidden 
    rounded-xl 
    bg-white dark:bg-stone-900
    text-black dark:text-white
    shadow-2xl
    transition-all duration-500 ease-in-out
    w-full sm:w-full sm:max-w-lg
    max-h-[70vh] min-h-[70vh]
    overflow-y-auto 
    scrollbar-hide
    sm:my-8 
    sm:p-0
  `;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 " onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="
            fixed 
            inset-0 
            bg-neutral-300 dark:bg-neutral-700
            backdrop-blur-md bg-opacity-50 dark:bg-opacity-30
            transition-all duration-700 ease-in-out
          "
          />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="
              flex 
              min-h-full 
              items-center 
              justify-center 
              p-4 
              text-center 
              sm:p-0
            "
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={twMerge(defaultDialogPanelClasses, className)}
              >
                {/* Title and Close Button */}
                <div
                  className={`
                    sticky 
                    top-0 
                    bg-white dark:bg-stone-900
                    z-10 
                    flex flex-col space-y-2 
                    transition-all duration-500 ease-in-out
                    `}
                >
                  <button
                    type="button"
                    className={`
                      self-end
                      rounded-full 
                      m-4 sm:m-3
                      bg-transparent dark:bg-transparent 
                      hover:bg-neutral-100 dark:hover:bg-neutral-800
                      text-neutral-400 dark:text-neutral-500
                      hover:text-red-600 dark:hover:text-red-900
                      transition-colors duration-700 ease-in-out
                    `}
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <IoClose className="h-7 w-7" aria-hidden="true" />
                  </button>
                  {/* Assuming HeadingTwo is a known component */}
                  <HeadingTwo title={title} />
                </div>
                {/* Content */}
                <div className="py-8 px-4 sm:px-8">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
