import React from "react";

interface TagProps {
  children: React.ReactNode;
}

/**
 * Tag component.
 * @param children (React.ReactNode) The content of the tag
 * @returns (JSX.Element): a tag
 */
const Tag: React.FC<TagProps> = ({ children }) => (
  <p className="bg-gray-200 dark:bg-red-950 px-4 py-2 mr-2 mt-2 text-gray-500 dark:text-gray-300 rounded-lg font-semibold transition-colors duration-700 ease-in-out">
    {children}
  </p>
);

export default Tag;
