"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Forces a scroll reset whenever the pathname changes so sticky header offsets do not leave users mid-page across route transitions.
 */
export default function Scroll() {
  const pathname: string = usePathname();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <></>;
}
