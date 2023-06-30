"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen?: boolean; // whether the modal is open or not
  onClose: () => void; // function to close the modal
  children: React.ReactNode; // children of the modal (the body)
}

/**
 * Base modal component which is displayed on top of the page.
 * The body of the modal is passed as a child.
 *
 * @param param0 : ModalProps
 * @returns (JSX.Element): base modal component
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
              bg-opacity-90 dark:bg-opacity-90
              transition-all duration-700 ease-in-out
              backdrop-blur-md dark:backdrop-blur-md
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
                className="
                  relative 
                  transform 
                  overflow-hidden 
                  rounded-xl 
                  bg-white dark:bg-stone-900
                  text-black dark:text-white
                  px-4 
                  pb-4
                  pt-5 
                  text-left 
                  shadow-xl 
                  transition-all duration-700 ease-in-out
                  w-full
                  max-h-[70vh]
                  overflow-y-auto
                  sm:my-8 
                  sm:w-full 
                  sm:max-w-lg 
                  sm:p-6
                "
              >
                <div
                  className="
                    absolute 
                    right-0 
                    top-0 
                    w-full
                    pr-4 
                    pt-4 
                    block
                    z-10
                  "
                >
                  <button
                    type="button"
                    className="
                      float-right
                      rounded-lg 
                      bg-white dark:bg-stone-900 
                      hover:bg-gray-100 dark:hover:bg-stone-800
                      text-gray-400 dark:text-gray-500
                      hover:text-gray-500 dark:hover:text-red-900
                      transition-colors duration-700 ease-in-out
                    "
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <IoClose className="h-7 w-7" aria-hidden="true" />
                  </button>
                </div>
                <div className="py-8">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
