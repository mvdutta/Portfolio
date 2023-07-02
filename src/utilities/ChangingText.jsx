import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useIsTabVisible from "./useIsTabVisible";

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
    "Godzilla Fan",
  ];
  const [index, setIndex] = useState(0);
  const isVisible = useIsTabVisible();

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = index + 1;
      setIndex(newIndex);
    }, 3000);

    if (!isVisible) clearInterval(timer);

    return () => {
      clearInterval(timer);
    };
  }, [index, isVisible]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: -500, opacity: 0 }} // Initial position and opacity
          animate={{ x: 0, opacity: 1 }} // Animation to fly in from the left
          exit={{ x: 500, opacity: 0 }} // Animation to fly out to the right
          transition={{ duration: 1.5, ease: "easeInOut" }} // Animation duration
          className="changing-text"
        >
          {ATTRIBUTES[index % ATTRIBUTES.length]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ChangingText;
