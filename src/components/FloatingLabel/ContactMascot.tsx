import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../../context/LanguageContext";
import kubiImg from "../../assets/kubi.png";
import SpeechBubble from "./SpeechBubble";
import ContactMenu from "./ContactMenu";
import useRandomSpeech from "../../hooks/useRandomSpeech";
import {
  entranceVariants,
  eyeBlinkVariants,
} from "./MascotAnimations";

export const ContactMascot: React.FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const mascotRef = useRef<HTMLDivElement>(null);

  // Random speech bubble message using custom hook
  const activeMessage = useRandomSpeech(15, 25, 3000);

  // Check prefers-reduced-motion media query
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Handle clicking outside the mascot to close the contact menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mascotRef.current &&
        !mascotRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Eye blinking cycle logic (random intervals between 6–8s)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeoutId: NodeJS.Timeout;

    const runBlinkCycle = () => {
      const nextDelay = Math.random() * 2000 + 6000;
      timeoutId = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          runBlinkCycle();
        }, 120);
      }, nextDelay);
    };

    runBlinkCycle();
    return () => clearTimeout(timeoutId);
  }, [prefersReducedMotion]);

  // Click handler
  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Keyboard accessibility helper
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggleMenu();
    }
  };

  // Idle Animation Config
  const idleAnimate = prefersReducedMotion
    ? {}
    : isHovered || menuOpen
    ? {
        y: 0,
        scale: 1.08,
        rotate: [0, -3, 3, -3, 3, 0],
      }
    : {
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
      };

  const idleTransition = prefersReducedMotion
    ? {}
    : isHovered || menuOpen
    ? {
        rotate: {
          duration: 1.2,
          ease: "easeInOut",
        },
        scale: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
        y: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        }
      }
    : {
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      };

  return (
    <div
      ref={mascotRef}
      className="fixed z-[100] bottom-[20px] right-[16px] w-[105px] h-[105px] sm:bottom-[24px] sm:right-[24px] sm:w-[135px] sm:h-[135px] lg:bottom-[32px] lg:right-[32px] lg:w-[160px] lg:h-[160px] focus:outline-none"
      tabIndex={0}
      role="button"
      aria-label="Open contact support menu"
      aria-expanded={menuOpen}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Speech Bubble */}
      <SpeechBubble message={activeMessage} />

      {/* Glassmorphic Contact Menu options */}
      <ContactMenu isOpen={menuOpen} />

      {/* Main Mascot Character Container */}
      <motion.div
        variants={entranceVariants}
        initial="hidden"
        animate="visible"
        onClick={handleToggleMenu}
        className="w-full h-full relative cursor-pointer group"
      >
        <motion.div
          animate={idleAnimate}
          transition={idleTransition}
          className="w-full h-full relative"
        >
          {/* 1. Base Mascot Body (Intact and high-res, no clipping) */}
          <img
            src={kubiImg}
            alt="Kubi AI Mascot"
            className="w-full h-full object-contain absolute top-0 left-0 pointer-events-none select-none z-0"
          />

          {/* 2. Custom Eyelids Overlays for Blinking Animation */}
          {/* Left Eyelid */}
          <motion.div
            className="absolute bg-white z-20 border-b-[1.5px] border-slate-900/50"
            style={{
              left: "34.5%",
              top: "30.5%",
              width: "8.5%",
              height: "13.5%",
              borderRadius: "50%",
              transformOrigin: "top center",
            }}
            animate={isBlinking ? "blink" : "open"}
            variants={eyeBlinkVariants}
          />
          {/* Right Eyelid */}
          <motion.div
            className="absolute bg-white z-20 border-b-[1.5px] border-slate-900/50"
            style={{
              left: "55.5%",
              top: "30.5%",
              width: "8.5%",
              height: "13.5%",
              borderRadius: "50%",
              transformOrigin: "top center",
            }}
            animate={isBlinking ? "blink" : "open"}
            variants={eyeBlinkVariants}
          />

          {/* 3. Glowing Headphone Green Lightning Symbol */}
          <motion.svg
            className="absolute w-[4%] h-[7%] left-[76.2%] top-[34.8%] text-brand-green fill-current z-20 pointer-events-none select-none filter drop-shadow-[0_0_3px_#10B981]"
            viewBox="0 0 10 20"
            animate={
              prefersReducedMotion
                ? {}
                : { opacity: [0.7, 1, 0.7], scale: [0.95, 1.05, 0.95] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path d="M6,0 L0,11 L4,11 L3,20 L10,9 L5,9 Z" stroke="#10B981" strokeWidth="0.5" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactMascot;
