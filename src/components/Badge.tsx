import { motion } from "motion/react";

export default function Badge() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        boxShadow: [
          "0 0 0px rgba(200,0,0,0.4)",
          "0 0 8px rgba(200,0,0,1)",
          "0 0 0px rgba(200,0,0,0.4)",
        ],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 5,
      }}
      className="bg-highlight w-20 rounded flex justify-center mx-auto"
    >
      <motion.span>Live</motion.span>
    </motion.div>
  );
}
