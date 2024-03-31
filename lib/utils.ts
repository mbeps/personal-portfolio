import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * This is a utility function that merges classnames using Tailwind CSS's JIT mode.
 * If there are any conflicts, this function will override the previous classnames.
 *
 * @param inputs:custom classnames to be merged
 * @returns mereged classnames
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
