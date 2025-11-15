import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge Tailwind CSS classes.
 * It uses `clsx` to conditionally join class names and `tailwind-merge` to resolve conflicts.
 * This is a common pattern in projects using Tailwind CSS.
 *
 * @param inputs A list of class values to be merged.
 * @returns A string of combined and de-duplicated class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
