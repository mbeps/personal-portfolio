import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface ExpandCollapseButtonProps {
  isExpanded: boolean;
  onToggle: () => void;
  className?: string;
}

/**
 * Simple disclosure trigger reused where sections need “Show more / Show less” affordances without bringing in a full accordion.
 *
 * @param isExpanded Whether the content is currently expanded.
 * @param onToggle Click handler to flip the state.
 * @param className Optional button styles.
 * @returns Text button with directional arrow icon.
 */
const ExpandCollapseButton: React.FC<ExpandCollapseButtonProps> = ({
  isExpanded,
  onToggle,
  className = "",
}) => {
  return (
    <button
      className={`${className} mt-2 text-red-700 hover:text-red-500 flex items-center`}
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
