import { ChangeEvent, useState } from "react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
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
      htmlFor={id}
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