import React from "react";

interface HeadingThreeProps {
  title: string;
}

/**
 * Sub heading component shown at the top of each section but under main headings.
 *
 * @param title (string): subheading to be displayed for each section
 * @returns (JSX.Element): subheading component
 */
const HeadingThree: React.FC<HeadingThreeProps> = ({ title }) => {
  return <h2 className="text-2xl font-bold mb-6 mt-6">{title}</h2>;
};

export default HeadingThree;
