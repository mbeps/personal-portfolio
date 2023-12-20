import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface ExpandCollapseButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}

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
