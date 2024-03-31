import React from "react";
import TypewriterComponent from "typewriter-effect";

type TypeWriterTextLoopProps = {
  loopItems: string[];
  className: string;
};

/**
 * Loops through an array of strings and displays them one by one.
 * Uses a type writer effect to loop through the text.
 *
 * @param className Class name to apply to the span element
 * @param loopItems Array of strings to loop through
 * @returns A span element that loops through the given array of strings
 */
const TypeWriterTextLoop: React.FC<TypeWriterTextLoopProps> = ({
  className,
  loopItems,
}) => {
  return (
    <div>
      <p className={className}>
        <TypewriterComponent
          options={{
            strings: loopItems,
            autoStart: true,
            loop: true,
          }}
        />
      </p>
    </div>
  );
};
export default TypeWriterTextLoop;
