import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <div className={`flex justify-center space-x-1 ${className}`}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}

interface GradualSpacingDemoProps {
  className?: string;
}

export function GradualSpacingDemo({ className }: GradualSpacingDemoProps) {
  return (
    <GradualSpacing
      className={`font-display text-center text-6xl font-bold tracking-[-0.1em] text-blue-400 dark:text-white md:text-5xl md:leading-[5rem] ${className}`}
      text="dApp Boilerplate - All ready to go! Start building your dApp now!"
    />
  );
}