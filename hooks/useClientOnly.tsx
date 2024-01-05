import { useEffect, useState } from "react";

const useClientOnly = (Component: React.FC) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Component />;
};

export default useClientOnly;
