"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextLoopProps {
  loopItems: string[];
  delay: number;
}

/**
 * Loops through an array of strings and displays them one by one.
 * @param loopItems (string[]) - Array of strings to loop through
 * @param delay (number) - Delay between each loop in milliseconds
 * @returns (JSX.Element): A span element that loops through the given array of strings
 */
const SimpleTextLoop: React.FC<TextLoopProps> = ({ loopItems, delay }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % loopItems.length);
    }, delay);

    return () => clearInterval(interval);
  }, [loopItems, delay]);

  return (
    <motion.span
      key={currentItemIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ transitionProperty: "opacity, transform" }}
      className="
        text-2xl md:text-4xl 
        font-semibold 
        p-1 bg-clip-text text-transparent 
        bg-gradient-to-r 
        from-red-600 via-orange-500 to-rose-500 
        dark:from-red-700 dark:via-orange-600 dark:to-rose-800
        tracking-wide"
    >
      {loopItems[currentItemIndex]}
    </motion.span>
  );
};

export default SimpleTextLoop;
