import type { Variants } from "framer-motion";

export const entranceVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const leafVariants = {
  animate: {
    rotate: [-6, 6, -6],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const capeVariants = {
  animate: {
    scaleX: [1, 1.03, 0.98, 1],
    translateX: [0, 1.5, -0.5, 0],
    rotate: [0, -2, 1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const eyeBlinkVariants = {
  open: {
    scaleY: 0,
  },
  blink: {
    scaleY: [0, 1, 0],
    transition: {
      duration: 0.12,
      times: [0, 0.5, 1],
      ease: "easeInOut",
    },
  },
};

export const handWaveVariants = {
  wave: {
    rotate: [0, 18, -4, 18, -4, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

export const glowVariants = {
  animate: {
    opacity: [0.7, 1, 0.7],
    scale: [0.95, 1.05, 0.95],
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
