import React, { ReactNode } from "react";

interface GridProps {
  items: ReactNode[];
}

const Grid: React.FC<GridProps> = ({ items }) => {
  const isOddTotal = items.length % 2 !== 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-5">
      {items.map((item, idx) => {
        const isLastItem = idx === items.length - 1;

        if (isLastItem && isOddTotal) {
          return (
            <div key={idx} className="md:col-span-2 flex justify-center">
              {item}
            </div>
          );
        } else {
          return <div key={idx}>{item}</div>;
        }
      })}
    </div>
  );
};

export default Grid;