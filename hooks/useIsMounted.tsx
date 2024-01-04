import { useEffect, useState } from "react";

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
