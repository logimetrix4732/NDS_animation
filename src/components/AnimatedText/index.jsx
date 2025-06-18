import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
    },
  },
};

const AnimatedText = ({ text = "", className = "", tag = "h2" }) => {
  const words = text.split(" ");
  const MotionTag = motion[tag];

  return (
    <MotionTag
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "570px",
        maxWidth: "1200px",
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            marginRight: "8px",
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default AnimatedText;
