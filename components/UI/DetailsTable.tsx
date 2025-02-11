import React, { ReactNode } from "react";
import HeadingFour from "../Text/HeadingFour";
import { twMerge } from "tailwind-merge";

interface TableDataPair {
  heading: string;
  value: string | string[] | ReactNode;
}

interface TableProps {
  details: TableDataPair[];
  className?: string;
}

/**
 * Component to render a grid of details.
 * Each detail consists of a heading and a corresponding value.
 * Values can be strings, arrays (rendered as bullet points), or React nodes.
 *
 * @param details The details to render as a list of titles and value pairs.
 * @param className Custom class name to apply to the outer div.
 * @returns The rendered grid of details.
 */
const DetailsTable: React.FC<TableProps> = ({ details, className }) => {
  const baseStyle: string = `grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4`;
  const overlayStyle: string = twMerge(baseStyle, className);

  const renderValue = (value: string | string[] | ReactNode) => {
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc pl-4 mt-2 text-neutral-800 dark:text-neutral-200">
          {value.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return (
      <div className="mt-2 text-neutral-800 dark:text-neutral-200">{value}</div>
    );
  };

  return (
    <div className={overlayStyle}>
      {details.map((detail, index) => (
        <div key={index} className="mb-4">
          <HeadingFour title={detail.heading} />
          {renderValue(detail.value)}
        </div>
      ))}
    </div>
  );
};

export default DetailsTable;
