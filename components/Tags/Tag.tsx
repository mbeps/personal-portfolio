import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
  hasHover?: boolean;
}

/**
 * Tag component which can execute an action when clicked.
 * Has hover effect and little arrow when clickable.
 * If it is not clickable, it will not have the hover effect.
 * If the tag is a "..." it will have a little animation.
 * @param children (React.ReactNode) The content of the tag
 * @param onClick (function) The action to be performed when the tag is clicked
 * @returns (JSX.Element): a tag
 */
const Tag: React.FC<TagProps> = ({ children, onClick, hasHover }) => {
  const baseClassName = `
    group
    bg-gray-200 dark:bg-red-950
    px-4 py-2 mr-2 mt-2 rounded-lg
    text-gray-500 dark:text-gray-300 font-semibold
    transition-colors duration-700 ease-in-out
    border-2 border-gray-200 dark:border-red-950
  `;
  const hoverClassName = `
    md:hover:border-gray-400 md:hover:dark:border-red-900
    cursor-pointer
  `;

  const className =
    onClick || hasHover ? `${baseClassName} ${hoverClassName}` : baseClassName;

  return (
    <div className={className} onClick={onClick}>
      <div className="flex items-center justify-between space-x-2">
        <p>{children}</p>
        {(onClick || hasHover) && (
          <IoIosArrowForward
            className={`md:group-hover:text-red-400 transition-colors duration-200 ${
              children === "..." ? "bounce-horizontal" : ""
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default Tag;
