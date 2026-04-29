import { motion } from "motion/react";
import type { MouseEventHandler, ReactNode } from "react";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

type Size = keyof typeof sizes;

type Props = {
  className?: string;
  size?: Size;
  children?: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler;
};

const baseClasses =
  "relative overflow-hidden rounded-full font-semibold bg-highlight text-primary-foreground shadow";

export const Button = ({
  className,
  size = "md",
  children,
  disabled,
  onClick,
}: Props) => {
  const classes = `${baseClasses} ${sizes[size]} ${className ?? ""}`;

  return (
    <motion.button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        cursor: "pointer",
        // color: "black",
        // backgroundColor: "var(--color-highlight-hover)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
