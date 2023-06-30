import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

type GroupedByType = "language" | "category";

interface DropdownProps {
  selected: GroupedByType;
  options: GroupedByType[];
  setSelected: React.Dispatch<React.SetStateAction<GroupedByType>>;
}

/**
 * Dropdown menu for selecting options.
 *
 * @param selected (GroupedByType) The selected option
 * @param options (GroupedByType[]) The list of options
 * @param setSelected (React.Dispatch<React.SetStateAction<GroupedByType>>) The function to set the selected option
 * @returns (JSX.Element): a dropdown menu
 */
const Dropdown: React.FC<DropdownProps> = ({
  selected,
  options,
  setSelected,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={`
						inline-flex justify-between items-center
						w-full px-4 py-2 
						text-base font-medium text-neutral-700 dark:text-neutral-200	 capitalize
						rounded-lg shadow-sm
						bg-neutral-100 dark:bg-neutral-800 
						border-2 ${open ? "border-red-500 dark:border-red-950" : "border-transparent"}
						hover:border-red-500 dark:hover:border-red-950
						transition-colors duration-500 ease-in-out
						`}
          >
            {selected}
            <span className="ml-2">
              {open ? <BsChevronUp /> : <BsChevronDown />}
            </span>
          </Menu.Button>
          <Menu.Items
            className="
						absolute right-0 w-56 mt-2 origin-top-right 
						bg-white dark:bg-neutral-800 divide-y divide-neutral-100 
						rounded-xl shadow-lg 
						ring-1 ring-black ring-opacity-5 
						focus:outline-none
						transition-colors duration-500 ease-in-out
						"
          >
            <div className="px-1 py-1 space-y-2">
              {options.map((option, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? `bg-gray-200 dark:bg-red-950 
                              font-bold group:hover:text-neutral-900 dark:group:hover:text-white`
                          : "text-neutral-900 dark:text-neutral-100"
                      } group flex rounded-lg items-center w-full px-2 py-2 text-base capitalize`}
                      onClick={() => setSelected(option)}
                    >
                      {option}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
export type { GroupedByType };
