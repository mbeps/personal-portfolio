import React, { ReactNode } from "react";

interface GridProps {
  items: ReactNode[];
  gap?: number; // optional gap prop
}

/**
 * Grid component which displays items in a 2-column grid layout.
 * If the total number of items is odd, the last item will be centered.
 * The gap between items can be customized.
 *
 * @param items Items to be displayed in a grid
 * @param gap The gap between grid items, default is 5
 * @returns All the items in a grid layout
 */
const Grid: React.FC<GridProps> = ({ items, gap = 20 }) => {
  const isOddTotal: boolean = items.length % 2 !== 0;

  // Define grid style dynamically based on the gap prop
  const gridStyle = {
    gridGap: `${gap}px`,
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={gridStyle} // Apply the dynamic grid style here
    >
      {items.map((item, idx) => {
        const isLastItem = idx === items.length - 1;
        return isLastItem && isOddTotal ? (
          <div key={idx} className="md:col-span-2 flex justify-center">
            <div className="w-full md:w-1/2">{item}</div>
          </div>
        ) : (
          <div className="w-full" key={idx}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
