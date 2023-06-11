import React from "react";

interface SubTitleProps {
  subTitle: string;
}

/**
 * Sub heading component shown at the top of each section but under main headings.
 *
 * @param subTitle (string): subheading to be displayed for each section
 * @returns (JSX.Element): subheading component
 */
const SubTitle: React.FC<SubTitleProps> = ({ subTitle }) => {
  return <h2 className="text-2xl font-bold mb-6 mt-6">{subTitle}</h2>;
};

export default SubTitle;
