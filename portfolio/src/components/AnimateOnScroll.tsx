"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type AnimationVariant =
  | "fadeIn"
  | "slideUp"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "none";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: AnimationVariant;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export const AnimateOnScroll = ({
  children,
  animation = "fadeIn",
  duration = 0.5,
  delay = 0,
  threshold = 0.2,
  className = "",
  once = true,
}: AnimateOnScrollProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: threshold, once });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  const getVariants = () => {
    switch (animation) {
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        };
      case "slideLeft":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        };
      case "slideRight":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      case "none":
      default:
        return {
          hidden: {},
          visible: {},
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
