import React from "react";

interface HeadingOneProps {
  title: string;
}

/**
 * Sub heading component shown at the top of each section but under main headings.
 *
 * @param title (string): subheading to be displayed for each section
 * @returns (JSX.Element): subheading component
 */
const HeadingOne: React.FC<HeadingOneProps> = ({ title }) => {
  return (
    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-center ">
      {title}
    </h1>
  );
};

export default HeadingOne;
