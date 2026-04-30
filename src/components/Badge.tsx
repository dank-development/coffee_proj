import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        boxShadow: [
          "0 0 0px var(--color-highlight)",
          "0 0 8px var(--color-highlight)",
          "0 0 0px var(--color-highlight)",
        ],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 5,
      }}
      className="flex justify-center bg-highlight text-primary-foreground rounded-full font-semibold text-md absolute right-4 -top-4 px-3 py-1 z-1"
    >
      <span>{children}</span>
    </motion.div>
  );
}
