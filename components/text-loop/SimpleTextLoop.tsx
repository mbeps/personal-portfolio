"use client";

import useIsMounted from "@/hooks/useIsMounted";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface TextLoopProps {
  loopItems: string[];
  delay: number;
  className: string;
}

/**
 * Framer Motion powered subtitle loop used when the hero needs a subtle fade animation instead of the typewriter.
 *
 * @param loopItems Strings to cycle through.
 * @param delay Interval between swaps.
 * @param className Tailwind classes applied to the animated span.
 * @returns Animated span cycling through the provided strings.
 */
const SimpleTextLoop: React.FC<TextLoopProps> = ({
  loopItems,
  delay,
  className,
}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);
  const isMounted = useIsMounted();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % loopItems.length);
    }, delay);

    return () => clearInterval(interval);
  }, [loopItems, delay]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="py-3">
      <motion.span
        key={currentItemIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: 10,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
        }}
        style={{ transitionProperty: "opacity, transform" }}
        className={className}
      >
        {loopItems[currentItemIndex]}
      </motion.span>
    </div>
  );
};

export default SimpleTextLoop;
