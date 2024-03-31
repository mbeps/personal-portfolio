import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface ExpandCollapseButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}

/**
 * Button that allows the user to expand or collapse content.
 * This is used to show more or less information.
 *
 * @param isExpanded If the content is expanded or not
 * @param onToggle Function to toggle the content
 * @param className Additional classes for the button
 * @returns Button to expand or collapse content
 */
const ExpandCollapseButton: React.FC<ExpandCollapseButtonProps> = ({
  isExpanded,
  onToggle,
  className = "",
}) => {
  return (
    <button
      className={`${className} mt-2 text-red-600 hover:text-red-800 flex items-center`}
      onClick={onToggle}
    >
      {isExpanded ? "Show Less" : "Show More"}
      {isExpanded ? (
        <MdKeyboardArrowUp size={25} />
      ) : (
        <MdKeyboardArrowDown size={25} />
      )}
    </button>
  );
};

export default ExpandCollapseButton;
