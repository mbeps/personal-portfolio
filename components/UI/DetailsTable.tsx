import React from "react";
import HeadingFour from "../Text/HeadingFour";
import { twMerge } from "tailwind-merge";

interface TableDataPair {
  heading: string;
  value: string;
}

interface TableProps {
  details: TableDataPair[];
  className?: string;
}

/**
 * Component to render a grid of details.
 * Each detail consists of a heading and a corresponding value.
 *
 * @param details The details to render as a list of titles and value pairs.
 * @param className Custom class name to apply to the outer div.
 * @returns The rendered grid of details.
 */
const DetailsTable: React.FC<TableProps> = ({ details, className }) => {
  const baseStyle: string = `grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4`;
  const overlayStyle: string = twMerge(baseStyle, className);

  return (
    <div className={overlayStyle}>
      {details.map((detail, index) => (
        <div key={index}>
          <HeadingFour title={detail.heading} />
          <p className="mt-2 text-neutral-800 dark:text-neutral-200">
            {detail.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DetailsTable;
