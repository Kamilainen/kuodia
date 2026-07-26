import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useIdleAnimation = (isActive: boolean) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
        transition: {
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    } else {
      controls.stop();
    }
  }, [isActive, controls]);

  return controls;
};

export default useIdleAnimation;
