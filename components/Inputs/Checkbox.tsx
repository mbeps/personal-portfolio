import React, { ChangeEvent, useState } from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string; // Adding the className prop
}

/**
 * Checkbox component which allows the user to select multiple options.
 * The checkbox is checked when the user clicks on it.
 * @param id (string): The id of the checkbox.
 * @param checked (boolean): Whether the checkbox is checked or not.
 * @param onChange (function): A function that handles the onChange event.
 * @param label (string): The label of the checkbox.
 * @param className (string): The custom classes to be applied to the checkbox.
 * @returns (JSX.Element): A checkbox component.
 */
const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  label,
  className,
}) => {
  const [hovered, setHovered] = useState(false);

  const borderColor = checked
    ? "border-red-500 dark:border-red-900"
    : hovered
    ? "border-neutral-300 dark:border-red-950"
    : "border-neutral-200 dark:border-stone-800";

  const combinedClassName = twMerge(
    `
      border-2 ${borderColor}
      bg-neutral-200 dark:bg-stone-800
      hover:bg-neutral-300 dark:hover:bg-red-950
      transition-colors duration-300 ease-in-out
      rounded-xl p-2 my-2 
      flex items-center cursor-pointer
    `,
    className // Merge user-provided className
  );

  return (
    <label
      htmlFor={id}
      className={combinedClassName}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="form-checkbox text-red-500 dark:text-red-900 h-6 w-6 sr-only"
      />
      <span className="ml-2 text-lg">{label}</span>
    </label>
  );
};

export default Checkbox;
