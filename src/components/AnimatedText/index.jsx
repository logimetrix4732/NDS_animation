import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, x: 40, scale: 0.95 }, // Right se aayega
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 80,
      mass: 0.6,
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
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
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
