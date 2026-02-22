import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClick?: () => void;
  hasHover?: boolean;
}

/**
 * Generic tag component used for module listings, issuers, and filter badges, with optional click affordances.
 *
 * @param children Tag label contents.
 * @param onClick Optional click handler (enables hover state + arrow).
 * @param hasHover Forces hover styling even without an onClick.
 * @returns Styled tag element with optional arrow indicator.
 */
const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ children, onClick, hasHover, ...props }, ref) => {
  const baseClassName: string = `
    group
    bg-gray-200 dark:bg-red-950
    px-4 py-2 mr-2 mt-2 rounded-lg
    text-gray-500 dark:text-gray-300 font-semibold
    transition-all duration-700 ease-in-out
    border-2 border-gray-200 dark:border-red-950
  `;

  const hoverClassName: string = `
    md:hover:border-gray-400 md:dark:hover:border-red-900
    hover:shadow-sm
    cursor-pointer
  `;

  const className: string =
    onClick || hasHover ? `${baseClassName} ${hoverClassName}` : baseClassName;

  return (
    <div className={className} onClick={onClick} ref={ref} {...props}>
      <div className="flex items-center space-x-2">
        <div className="text-left flex-1">{children}</div>
        {(onClick || hasHover) && (
          <IoIosArrowForward
            className={`md:group-hover:text-red-400 transition-colors duration-200 flex-shrink-0 ${
              children === "..." ? "bounce-horizontal" : ""
            }`}
          />
        )}
      </div>
    </div>
  );
});

Tag.displayName = "Tag";

export default Tag;
