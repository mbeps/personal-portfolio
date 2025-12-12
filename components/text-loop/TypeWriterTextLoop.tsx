import React from "react";
import TypewriterComponent from "typewriter-effect";

type TypeWriterTextLoopProps = {
  loopItems: string[];
  className: string;
};

/**
 * Typewriter variant of the hero subtitle loop, wrapping `typewriter-effect` with custom cursor styling for consistent theming.
 *
 * @param className Tailwind classes applied to the wrapper.
 * @param loopItems Strings to cycle through.
 * @returns Container rendering the looping typewriter animation.
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
