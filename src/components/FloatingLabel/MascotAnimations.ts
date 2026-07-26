export const entranceVariants = {
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
      ease: "easeOut" as const,
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
      ease: "easeInOut" as const,
    },
  },
};
