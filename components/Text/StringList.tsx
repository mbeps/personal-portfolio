import React from "react";
import { TbCircleFilled } from "react-icons/tb";

interface StringListProps {
  items: string[];
}

/**
 * Renders a list of strings with bullet points.
 *
 * @param items - An array of strings to render.
 * @returns A list of strings with bullet points.
 */
const StringList: React.FC<StringListProps> = ({ items }) => {
  return (
    <div>
      <ul className="list-none text-lg flex flex-col gap-6">
        {items.map((item, index) => (
          <li key={index} className="flex">
            <div className="mr-2">
              <TbCircleFilled size={6} className="mt-3 mx-3 text-neutral-500" />
            </div>
            <div className="text-neutral-900 dark:text-neutral-200">{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StringList;
