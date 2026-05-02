import type { MouseEventHandler, ReactNode } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  title: string;
  summary?: ReactNode;
  children?: ReactNode;
  className?: string;
  expandable?: boolean;
  onClick?: MouseEventHandler;
};

export default function Card({
  title,
  summary,
  children,
  className,
  expandable = false,
  onClick,
}: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (expandable) setExpanded((prev) => !prev);
    onClick?.(e);
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`flex flex-col h-full min-h-80 w-full mx-auto px-8 py-6 bg-primary text-primary-foreground squircle ${className ?? ""}`}
        whileHover={{
          scale: 1.05,
          backgroundColor: "var(--color-secondary)",
          color: "var(--color-secondary-foreground)",
          border: "2px solid var(--color-highlight)",
          cursor: "pointer",
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        onClick={handleClick}
      >
        <h2 className="text-center font-semibold text-3xl mb-6">{title}</h2>
        {summary && (
          <motion.div
            key="summary"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            {summary}
          </motion.div>
        )}

        {expanded && expandable && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
