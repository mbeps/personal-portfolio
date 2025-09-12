import React from "react";
import TypewriterComponent from "typewriter-effect";

type TypeWriterTextLoopProps = {
  loopItems: string[];
  className: string;
};

/**
 * Loops through an array of strings and displays them one by one.
 * Uses a type writer effect to loop through the text.
 * Includes custom styling to ensure cursor visibility across browsers.
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
    <div className="typewriter-container">
      <style jsx>{`
        .typewriter-container :global(.Typewriter__cursor) {
          display: inline-block !important;
          opacity: 1 !important;
          width: 0.1em !important;
          height: 1em !important;
          background-color: currentColor !important;
          margin-left: 0.1em !important;
          animation: typewriter-cursor-blink 1s step-end infinite !important;
          -webkit-animation: typewriter-cursor-blink 1s step-end infinite !important;
        }

        @keyframes typewriter-cursor-blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @-webkit-keyframes typewriter-cursor-blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
      <div className={className}>
        <TypewriterComponent
          options={{
            strings: loopItems,
            autoStart: true,
            loop: true,
            cursor: "|",
            cursorClassName: "typewriter-cursor",
            delay: 40,
            deleteSpeed: 20,
          }}
        />
      </div>
    </div>
  );
};

export default TypeWriterTextLoop;
