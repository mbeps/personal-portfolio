import React, { ReactNode } from "react";

interface GridProps {
  items: ReactNode[];
  columns: number;
}

const Grid: React.FC<GridProps> = ({ items, columns }) => {
  // Calculate the number of items in the last row
  const lastRowItemCount = items.length % columns;
  const isLastRowIncomplete = lastRowItemCount !== 0;

  // Determine the CSS class for grid columns based on the 'columns' prop
  const gridColumnsClass = `grid-cols-1 md:grid-cols-${columns}`;

  return (
    <div className={`grid ${gridColumnsClass} gap-5 md:gap-x-5`}>
      {items.map((item, idx) => {
        const isLastRowStart = idx >= items.length - lastRowItemCount;

        if (isLastRowStart && isLastRowIncomplete) {
          // For items in the last row, when it's incomplete
          const colSpanClass = `md:col-span-${columns / lastRowItemCount}`;
          return (
            <div key={idx} className={`flex justify-center ${colSpanClass}`}>
              {item}
            </div>
          );
        } else {
          // Regular grid item
          return <div key={idx}>{item}</div>;
        }
      })}
    </div>
  );
};

export default Grid;
