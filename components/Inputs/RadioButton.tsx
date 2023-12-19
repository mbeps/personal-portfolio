"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  label: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Radio Button component which allows the user to select one option.
 * The radio button is checked when the user clicks on it.
 * @param id (string): The id of the radio button.
 * @param name (string): The name of the radio button.
 * @param value (string): The value of the radio button.
 * @param checked (boolean): Whether the radio button is checked or not.
 * @param onChange (function): A function that handles the onChange event.
 * @param label (string): The label of the radio button.
 * @param className (string): The custom classes to be applied to the radio button.
 * @returns (JSX.Element): A radio button component.
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  checked,
  label,
  className,
  onChange,
}) => {
  const [hovered, setHovered] = useState(false);

  const borderColor = checked
    ? "border-red-500 dark:border-red-900"
    : hovered
    ? "border-neutral-300 dark:border-red-950"
    : "border-neutral-200 dark:border-neutral-800";

  const combinedClassName = twMerge(
    `
      border-2 ${borderColor}
      bg-neutral-200 dark:bg-neutral-800
      hover:bg-neutral-300 dark:hover:bg-red-950
      transition-colors duration-300 ease-in-out
      rounded-xl 
      p-2 md:p-1.5
      my-2 
      flex items-center cursor-pointer
    `,
    className
  );

  // Add the font weight conditionally based on the checked state
  const labelClassName = checked ? "font-bold" : "";

  return (
    <label
      className={combinedClassName}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-red-500 dark:text-red-900 h-6 w-6 sr-only"
      />
      <span className={`ml-2 text-lg ${labelClassName}`}>{label}</span>
    </label>
  );
};

export default RadioButton;
