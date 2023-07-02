import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ChangingText = () => {
  const ATTRIBUTES = [
    "Software Developer",
    "Tea Drinker",
    "Creator",
    "Problem Solver",
    "Collaborator",
    "Registered Dietitian",
    "Lifelong Learner",
    "Outdoor Enthusiast",
    "Traveler",
    "Godzilla Fan"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = (index + 1) % ATTRIBUTES.length;
      setIndex(newIndex);
    }, 3000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 500, opacity: 0 }}
          transition={{ duration: 1 }}
          className="changing-text"
        >
          {ATTRIBUTES[index]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ChangingText;
