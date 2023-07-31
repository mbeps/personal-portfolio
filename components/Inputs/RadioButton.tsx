"use client";

import { useState } from "react";

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
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
 * @returns (JSX.Element): A radio button component.
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  const [hovered, setHovered] = useState(false);

  const borderColor = checked
    ? "border-red-500 dark:border-red-900"
    : hovered
    ? "border-neutral-300 dark:border-red-950"
    : "border-neutral-200 dark:border-stone-800";
  return (
    <label
      className={`
        border-2 ${borderColor}
        bg-neutral-200 dark:bg-stone-800
        hover:bg-neutral-300 dark:hover:bg-red-950
        transition-colors duration-300 ease-in-out
        rounded-xl p-2 my-2 
        flex items-center cursor-pointer
      `}
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
      <span className="ml-2 text-lg">{label}</span>
    </label>
  );
};

export default RadioButton;
