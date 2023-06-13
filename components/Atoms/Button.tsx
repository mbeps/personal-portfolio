import { useRouter } from "next/navigation";
import React from "react";

type ButtonVariant = "filled" | "outlined" | "ghost";

interface ButtonProps {
  to: string;
  variant: ButtonVariant;
  children: React.ReactNode;
  isSamePage?: boolean;
}

/**
 * Displays a button.
 * This button has many different variants:
 * - filled: a filled button with a background color
 * - outlined: a button with a border and no background color
 * - ghost: a button with no background color and no border
 * This button can redirect to a different page or scroll to an element on the same page.
 *
 * @param to (string) The path to navigate to
 * @param variant (ButtonVariant) The variant of the button
 * @param children (React.ReactNode) The content of the button
 * @param isSamePage (boolean) Whether the button is on the same page or not
 * @returns (JSX.Element): a button
 */
const Button = ({ to, variant, children, isSamePage = false }: ButtonProps) => {
  const router = useRouter();

  /**
   * Handles the click event on the button.
   * If the button is on the same page, it scrolls to the element with the id specified in the "to" prop.
   * If the button is on a different page, it navigates to the path specified in the "to" prop.
   */
  const handleClick = () => {
    if (isSamePage) {
      // Using window.scrollTo to scroll to the element
      const element = document.getElementById(to);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      router.push(to);
    }
  };

  const baseStyle = `
	px-6 py-3 rounded-xl cursor-pointer 
	transition-colors duration-500 
	font-semibold
	hover:bg-red-400 hover:dark:bg-red-950`;

  const filled = `
		text-neutral-100 
		shadow-xl hover:shadow-lg   
		bg-red-500 
		dark:bg-red-800 `;
  const outlined = `
		text-red-500 hover:text-neutral-100
		dark:text-red-500 dark:hover:text-neutral-100
		border-red-500 dark:border-red-900 border-2 
		bg-transparent hover:bg-red-400 dark:hover:bg-red-900`;
  const ghost = `text-red-500 
		bg-transparent
		border-0  hover:text-neutral-100`;

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
