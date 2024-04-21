import React from "react";
import { RxTriangleRight } from "react-icons/rx";

interface StringListProps {
  items: string[];
}

const StringList: React.FC<StringListProps> = ({ items }) => {
  return (
    <div>
      <ul className="list-none text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex mb-1.5">
            <div className="mr-2 mt-1.5">
              <RxTriangleRight />
            </div>
            <div className="text-neutral-800 dark:text-neutral-300">{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StringList;
