import React from "react";
import TypewriterComponent from "typewriter-effect";
import SimpleTextLoop from "../Atoms/SimpleTextLoop";

type TextLoopProps = {
  loopItems: string[];
  implementation: "simple" | "typewriter";
};

/**
 * Displays a component for looping over an array of strings.
 * Can loop over the text in a variety of styles:
 * - Simple: loops through the text in a subtle animation
 * - Type Writer: loops through the text in as a type writer
 * @param loopItems (string[]) - Array of strings to loop through
 * @param implementation ("simple" | "typewriter") - The implementation to use for looping through the text
 */
const TextLoop: React.FC<TextLoopProps> = ({ loopItems, implementation }) => {
  return (
    <>
      {/* Type Writer Implementation */}
      {implementation === "typewriter" && (
        <p
          className="
            text-2xl md:text-4xl 
            font-semibold 
            p-1 bg-clip-text text-transparent 
            bg-gradient-to-r 
            from-red-600 via-orange-500 to-rose-500 
            dark:from-red-700 dark:via-orange-600 dark:to-rose-800
            tracking-wide"
        >
          <TypewriterComponent
            options={{
              strings: loopItems,
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      )}

      {/* Simple Loop Implementation */}
      {implementation === "simple" && (
        <SimpleTextLoop loopItems={loopItems} delay={3000} />
      )}
    </>
  );
};
export default TextLoop;
