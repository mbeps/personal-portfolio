import React, { ReactNode } from "react";

interface GridProps {
  items: ReactNode[];
  gap?: number; // optional gap prop
}

/**
 * Responsive two-column grid wrapper used by course, certificate, and blog lists to keep card spacing consistent.
 * Centers orphan cards when the item count is odd to avoid ragged layouts.
 *
 * @param items Array of already rendered cards.
 * @param gap Custom gap between grid cells (defaults to 20px).
 * @returns Grid container with auto-centering last cell when needed.
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
