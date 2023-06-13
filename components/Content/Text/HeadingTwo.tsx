import React from "react";

interface HeadingTwoProps {
  title: string;
}

/**
 * Heading 2 text component shown at the top of each section.
 *
 * @param title (string): Heading to be displayed for each section
 * @returns (JSX.Element): Title component
 */
const HeadingTwo: React.FC<HeadingTwoProps> = ({ title }) => {
  return (
    <h1 className="text-center font-bold text-4xl">
      {title}
      <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded" />
    </h1>
  );
};

export default HeadingTwo;
