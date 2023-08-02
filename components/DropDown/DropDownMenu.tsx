import React from "react";
import { Menu } from "@headlessui/react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

interface DropdownProps {
  selected: string;
  options: string[];
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  width?: string;
}

/**
 * Dropdown menu for selecting options.
 *
 * @param selected (string) The selected option
 * @param options (string[]) The list of options
 * @param setSelected (React.Dispatch<React.SetStateAction<string>>) The function to set the selected option
 * @param className (string) The custom classes to be applied to the dropdown menu
 * @returns (JSX.Element): a dropdown menu
 */
const Dropdown: React.FC<DropdownProps> = ({
  selected,
  options,
  setSelected,
  className = "",
  width = "w-56", // Default width
}) => {
  return (
    <Menu as="div" className={`relative inline-block text-left ${width}`}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`
              inline-flex justify-between items-center
              z-10
              ${width}
              px-4 py-2 
              text-base font-medium text-neutral-700 dark:text-neutral-200 capitalize
              rounded-lg 
              bg-neutral-100 dark:bg-neutral-800 
              border-2 ${
                open
                  ? "border-red-500 dark:border-red-950"
                  : "border-transparent"
              }
              hover:border-red-500 dark:hover:border-red-950
              shadow-md hover:shadow-lg
              transition-all duration-500 ease-in-out
              ${className} // Applying the custom classes here
            `}
          >
            {selected}
            <span className="ml-2">
              {open ? <BsChevronUp /> : <BsChevronDown />}
            </span>
          </Menu.Button>
          <Menu.Items
            className={`
              absolute right-0 ${width} mt-2 origin-top-right 
              bg-white dark:bg-neutral-800 divide-y divide-neutral-100 
              rounded-xl shadow-lg p-1
              z-20
              ring-1 ring-black ring-opacity-5 
              focus:outline-none
              transition-colors duration-500 ease-in-out
            `}
          >
            <div className="px-1 py-1 space-y-2">
              {options.map((option, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      className={`
                        ${
                          active
                            ? "bg-gray-200 dark:bg-red-950 font-bold group:hover:text-neutral-900 dark:group:hover:text-white"
                            : "text-neutral-900 dark:text-neutral-100"
                        } 
                        group flex rounded-lg items-center ${width} px-2 py-2 text-base capitalize
                        w-full
                      `}
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
