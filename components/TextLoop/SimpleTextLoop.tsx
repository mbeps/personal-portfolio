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
 * Loops through an array of strings and displays them one by one.
 *
 * @param loopItems Array of strings to loop through
 * @param delay Delay between each loop in milliseconds
 * @param className Class name to apply to the span element
 * @returns A span element that loops through the given array of strings
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
    <motion.span
      key={currentItemIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 10,
        transition: {
          duration: 1, // Adjust this value to control the speed of the fade out
          ease: "easeInOut",
        },
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.5,
      }}
      style={{ transitionProperty: "opacity, transform" }}
      className={className}
    >
      {loopItems[currentItemIndex]}
    </motion.span>
  );
};

export default SimpleTextLoop;
