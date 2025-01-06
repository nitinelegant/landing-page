"use client";

import { motion } from "framer-motion";

export default function AnimatedTitle() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const title =
    "India's Largest Directory of Exhibition, Conference, Organizer and Supplier.";
  const letters = Array.from(title);

  return (
    <motion.div
      className="mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="text-4xl md:text-4xl font-bold text-primary ">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
