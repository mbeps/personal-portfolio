"use client";

import React from "react";
import SimpleTextLoop from "./SimpleTextLoop";
import TypeWriterTextLoop from "./TypeWriterTextLoop";
import useIsMounted from "@/hooks/useIsMounted";

type TextLoopProps = {
  loopItems: string[];
  implementation: "simple" | "typewriter";
  className: string;
};

/**
 * Client-only wrapper that swaps between the marquee and typewriter subtitle animations on the hero section.
 *
 * @param loopItems Subtitle strings sourced from `constants/subtitles`.
 * @param implementation Animation style to render.
 * @param className Tailwind classes forwarded to the inner component.
 */
const TextLoop: React.FC<TextLoopProps> = ({
  loopItems,
  implementation,
  className,
}) => {
  const isMounted: boolean = useIsMounted();

  return (
    <>
      {isMounted ? (
        <>
          {/* Type Writer Implementation */}
          {implementation === "typewriter" && (
            <TypeWriterTextLoop className={className} loopItems={loopItems} />
          )}

          {/* Simple Loop Implementation */}
          {implementation === "simple" && (
            <SimpleTextLoop
              loopItems={loopItems}
              delay={4000}
              className={className}
            />
          )}
        </>
      ) : (
        <div className={className}>{loopItems[1]}</div>
      )}
    </>
  );
};
export default TextLoop;
