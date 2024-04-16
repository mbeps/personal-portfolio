import React from "react";
import HeadingFour from "../Text/HeadingFour";

interface TableDataPair {
  heading: string;
  value: string;
}

interface TableProps {
  details: TableDataPair[];
}

/**
 * Component to render a grid of details.
 * Each detail consists of a heading and a corresponding value.
 *
 * @param props Contains details, an array of TableDataPair.
 * @returns The rendered grid of details.
 */
const DetailsTable: React.FC<TableProps> = ({ details }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
