"use client";

import { useRouter } from "next/navigation";
import React from "react";

type ButtonVariant = "filled" | "outlined" | "ghost" | "gradient";

interface ButtonProps {
  onClick: string | (() => void);
  variant: ButtonVariant;
  children: React.ReactNode;
}

/**
 * Displays a button which can be clicked to execute an action.
 * This button has many different variants:
 * - filled: a filled button with a background color
 * - outlined: a button with a border and no background color
 * - ghost: a button with no background color and no border
 *
 * The onClick prop can be a string or a function.
 * If it is a string, it will redirect to the page.
 * If it is a function, it will execute the function.
 *
 * @param onClick (string | function): the action to be performed when the button is clicked
 * @param variant (ButtonVariant): the variant of the button
 * @param children (React.ReactNode): the content of the button
 *
 * @returns (JSX.Element): button component
 */
const Button = ({ onClick, variant, children }: ButtonProps) => {
  const router = useRouter();

  /**
   * Handles the click event of the button.
   * If the onClick prop is a function, it will execute the function.
   * If the onClick prop is a string, it will redirect to the page.
   */
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick();
    } else if (typeof onClick === "string") {
      router.push(onClick);
    }
    return;
  };

  const baseStyle = `
    px-6 py-3 rounded-xl cursor-pointer 
    transition-all duration-500 
    font-semibold
    hover:bg-red-400 hover:dark:bg-red-950`;

  const filled = `
		text-neutral-100 
		shadow-xl hover:shadow-lg   
		bg-red-500 dark:bg-red-800
    transform hover:scale-105`;
  const outlined = `
		text-red-500 hover:text-neutral-100
		dark:text-red-500 dark:hover:text-neutral-100
		border-red-500 dark:border-red-900 border-2 
		bg-transparent hover:bg-red-400 dark:hover:bg-red-900`;
  const ghost = `text-red-500 
		bg-transparent
		border-0  hover:text-neutral-100`;
  const gradient = `
    text-neutral-100 
    bg-gradient-to-r 
    from-red-600 to-amber-500 
    dark:from-red-800 dark:to-amber-700
    transform hover:scale-105`;

  let buttonStyle;
  switch (variant) {
    case "filled":
      buttonStyle = filled;
      break;
    case "outlined":
      buttonStyle = outlined;
      break;
    case "ghost":
      buttonStyle = ghost;
      break;
    case "gradient":
      buttonStyle = gradient;
      break;
    default:
      throw new Error(`Unknown variant: ${variant}`);
  }

  return (
    <button onClick={handleClick} className={`${baseStyle} ${buttonStyle}`}>
      {children}
    </button>
  );
};

export default Button;
