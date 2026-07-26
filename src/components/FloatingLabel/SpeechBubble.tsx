import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SpeechBubbleProps {
  message: string | null;
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-[calc(100%+12px)] right-4 bg-white text-slate-800 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 font-sans text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap z-50 flex items-center justify-center select-none"
        >
          {message}
          {/* Triangle pointer */}
          <div className="absolute bottom-[-6px] right-8 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpeechBubble;
