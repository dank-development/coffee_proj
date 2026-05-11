[1mdiff --git a/src/components/Button.tsx b/src/components/Button.tsx[m
[1mindex 26d8147..78f1b54 100644[m
[1m--- a/src/components/Button.tsx[m
[1m+++ b/src/components/Button.tsx[m
[36m@@ -19,39 +19,30 @@[m [mtype Props = {[m
 };[m
 [m
 const baseClasses =[m
[31m-  "relative overflow-hidden rounded-full font-semibold bg-highlight text-primary-foreground shadow";[m
[32m+[m[32m  "rounded-full font-semibold bg-highlight text-primary-foreground shadow disabled:cursor-wait";[m
 [m
[31m-export const Button = ({[m
[31m-  className,[m
[32m+[m[32mexport default function Button({[m
[32m+[m[32m  className = "",[m
   size = "md",[m
   children,[m
   disabled,[m
   onClick,[m
[31m-}: Props) => {[m
[31m-  const classes = `${baseClasses} ${sizes[size]} ${className ?? ""}`;[m
[32m+[m[32m}: Props) {[m
[32m+[m[32m  const classes = `${baseClasses} ${sizes[size]} ${className}`;[m
 [m
   return ([m
     <motion.button[m
       className={classes}[m
       disabled={disabled}[m
       onClick={onClick}[m
[31m-      whileHover={{[m
[31m-        scale: 1.05,[m
[31m-        cursor: "pointer",[m
[31m-        // color: "black",[m
[31m-        // backgroundColor: "var(--color-highlight-hover)",[m
[31m-      }}[m
[31m-      whileTap={{[m
[31m-        scale: 0.95,[m
[31m-      }}[m
[31m-      initial={{ y: -10, opacity: 0 }}[m
[31m-      animate={{ y: 0, opacity: 1 }}[m
[31m-      exit={{ y: -10, opacity: 0 }}[m
[32m+[m[32m      initial={{ y: -10, opacity: 0, scale: 1 }}[m
[32m+[m[32m      animate={{ y: 0, opacity: 1, scale: 1 }}[m
[32m+[m[32m      exit={{ y: -10, opacity: 0, scale: 1 }}[m
[32m+[m[32m      whileHover={!disabled ? { scale: 1.05 } : { scale: 1 }}[m
[32m+[m[32m      whileTap={!disabled ? { scale: 0.95 } : { scale: 1 }}[m
       transition={{ type: "spring", stiffness: 300, damping: 15 }}[m
     >[m
       {children}[m
     </motion.button>[m
   );[m
[31m-};[m
[31m-[m
[31m-export default Button;[m
[32m+[m[32m}[m
