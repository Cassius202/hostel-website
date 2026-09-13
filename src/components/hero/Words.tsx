"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const wordTitles = ["Luxury", "Class", "Comfort", "Home", "A beautiful life"];

const Words = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wordTitles.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex} 
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {wordTitles[currentIndex]}
      </motion.span>
    </AnimatePresence>
  );
};

export default Words;