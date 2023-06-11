import React from "react";

interface TitleProps {
  title: string;
}

/**
 * Title component shown at the top of each section.
 *
 * @param title (string): Title to be displayed for each section
 * @returns (JSX.Element): Title component
 */
const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="text-center font-bold text-4xl">
      {title}
      <hr className="w-6 h-1 mx-auto my-4 bg-red-500 border-0 rounded" />
    </h1>
  );
};

export default Title;
