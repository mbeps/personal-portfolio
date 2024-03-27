import { useEffect, useState } from "react";

/**
 * A custom hook that returns a boolean indicating whether the component is mounted.
 * This is useful for handling asynchronous operations that should only be executed when the component is mounted.
 * It is mostly used to prevent memory leaks and state updates on unmounted components.
 * @returns A boolean indicating whether the component is mounted.
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
