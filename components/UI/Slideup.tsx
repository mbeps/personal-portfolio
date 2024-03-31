"use client";

import React, { useEffect, useRef, ReactNode } from "react";

interface Props {
  offset?: string;
  children?: ReactNode;
}

/**
 * Animates the content by sliding it up.
 * Anything wrapped around it is animated.
 *
 * @param offset The offset of the element from the viewport
 * @param children The content to be animated
 * @returns Animated content
 */
export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-slideUpCubiBezier");
          }
        });
      },
      { rootMargin: offset }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [offset, ref]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
