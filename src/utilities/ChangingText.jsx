import React, { useState, useEffect } from "react";

const ChangingText = () => {
  const ATTRIBUTES = [
    "Programmer",
    "Tea Drinker",
    "Creator",
    "Problem Solver",
    "Collaborator",
    "Dietitian",
    "Curious Learner",
    "Meditator",
    "Traveler",
    "Godzilla Fan"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = (index + 1) % ATTRIBUTES.length;
      setIndex(newIndex);
    }, 2000);

    return () => clearTimeout(timer);
  }, [index]);

  return <div className="changing-text">{ATTRIBUTES[index]}</div>;
};

export default ChangingText;
