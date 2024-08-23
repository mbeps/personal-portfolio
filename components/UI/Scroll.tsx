"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * When clicking a link, the user will not scroll to the top of the page if the header is sticky.
 * Their current scroll position will persist to the next page.
 * This useEffect is a workaround to 'fix' that behavior.
 */
export default function Scroll() {
  const pathname: string = usePathname();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <></>;
}
