import { useEffect, useState } from "react";

/**
 * Simple hook used by client components that rely on browser-only APIs so we can gate rendering until after hydration.
 *
 * @returns `true` once the component mounts on the client, otherwise `false`.
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
