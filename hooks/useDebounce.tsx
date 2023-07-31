import { useEffect, useState } from "react";

/**
 * Debounces a value after a delay.
 * Useful for search bars where you don't want to search as the user is typing but rather after they pause typing.
 *
 * @param value (T): value to be debounced
 * @param delay (number): delay in milliseconds
 * @returns (T): debounced value
 */
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value); // debounced value
  const defaultTimeDelay = 500; // default delay time

  useEffect(() => {
    const timer = setTimeout(
      () => setDebouncedValue(value),
      delay || defaultTimeDelay
    ); // set debounced value after delay

    return () => {
      clearTimeout(timer); // clear timeout on unmount
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
