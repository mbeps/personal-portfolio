import { useEffect, useState } from "react";

/**
 * A custom hook to determine if a component is mounted.
 * This is useful for avoiding state updates on unmounted components,
 * which can prevent memory leaks and errors in asynchronous operations.
 *
 * @returns `true` after the component has mounted, otherwise `false`.
 */
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Optional: Return a cleanup function if needed
    return () => setIsMounted(false);
  }, []);

  return isMounted;
};

export default useIsMounted;
