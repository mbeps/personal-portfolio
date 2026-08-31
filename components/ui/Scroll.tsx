"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Forces a scroll reset whenever the pathname changes so sticky header offsets do not leave users mid-page across route transitions.
 */
export default function Scroll() {
  const pathname: string = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: Scroll reset triggers on pathname transitions
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <></>;
}
