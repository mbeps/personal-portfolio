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
 * Displays a component for looping over an array of strings.
 * Can loop over the text in a variety of styles:
 * - Simple: loops through the text in a subtle animation
 * - Type Writer: loops through the text in as a type writer
 *
 * @param loopItems Array of strings to loop through
 * @param implementation The implementation to use for looping through the text
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
