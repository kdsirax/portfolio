"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  type Variant,
  useReducedMotion,
} from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const directionOffset: Record<string, { x?: number; y?: number }> = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  };

  const offset = directionOffset[direction] || directionOffset.up;

  const hidden: Variant = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, ...offset };

  const visible: Variant = prefersReducedMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration, ease: "easeOut" as const, delay },
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden, visible }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
