import React, { ReactNode } from "react";
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
 * Grid-based key/value renderer used on the about page and role detail pages for quick facts.
 *
 * @param details Array of heading/value pairs.
 * @param className Optional grid overrides.
 * @returns Grid of labeled values with support for nested lists.
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
          <h4>{detail.heading}</h4>
          {renderValue(detail.value)}
        </div>
      ))}
    </div>
  );
};

export default DetailsTable;
