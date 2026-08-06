import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactMenuProps {
  isOpen: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 350, damping: 25 },
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: { duration: 0.15 },
  },
};

export const ContactMenu: React.FC<ContactMenuProps> = ({ isOpen }) => {
  const contactItems = [
    {
      name: "WhatsApp",
      icon: (
        <svg
          className="h-5 w-5 text-emerald-500 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 1.98 14.12 .953 11.5 1.008 6.064 1.008 1.64 5.378 1.636 10.808c-.001 1.77.464 3.5 1.347 5.011l-1.004 3.665 3.768-.988zM17.15 14.51c-.284-.143-1.68-.829-1.939-.924-.26-.096-.449-.143-.637.143-.189.286-.73.924-.894 1.11-.164.186-.328.21-.61.067-.285-.143-1.202-.443-2.29-1.411-.847-.756-1.42-1.688-1.586-1.973-.166-.285-.018-.439.124-.58.128-.127.285-.333.428-.499.143-.166.19-.285.285-.475.095-.19.047-.356-.024-.499-.071-.143-.637-1.536-.873-2.107-.23-.554-.46-.48-.637-.489-.164-.009-.353-.01-.542-.01-.189 0-.496.071-.755.356-.26.285-.992.97-.992 2.367 0 1.397 1.016 2.748 1.158 2.938.143.19 2.002 3.056 4.85 4.283.678.29 1.207.464 1.62.595.681.216 1.3.186 1.79.112.546-.08 1.68-.687 1.916-1.35.236-.664.236-1.235.165-1.35-.07-.116-.26-.186-.543-.329z" />
        </svg>
      ),
      href: "https://wa.me/34692312769",
      color:
        "hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 border-emerald-500/10 hover:border-emerald-500/25",
    },
    {
      name: "Zalo",
      icon: (
        <div className="h-5 w-5 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-[9px] tracking-tighter shadow-sm select-none">
          Zalo
        </div>
      ),
      href: "https://zalo.me/0886017923",
      color:
        "hover:bg-blue-50 text-slate-700 hover:text-blue-600 border-blue-500/10 hover:border-blue-500/25",
    },
    {
      name: "Email",
      icon: (
        <svg
          className="h-5 w-5 text-rose-500 fill-none stroke-current stroke-2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      href: "mailto:david@kuodia.vn",
      color:
        "hover:bg-rose-50 text-slate-700 hover:text-rose-600 border-rose-500/10 hover:border-rose-500/25",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute bottom-[calc(100%+16px)] right-0 flex flex-col items-end space-y-2.5 z-40 select-none pointer-events-auto"
        >
          {contactItems.map((item, idx) => (
            <motion.a
              key={idx}
              variants={itemVariants}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-full backdrop-blur-md bg-white/85 border border-white/20 shadow-lg shadow-slate-900/5 transition-all duration-200 w-44 justify-start ${item.color} focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2`}
              aria-label={item.name}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <span className="font-sans font-extrabold text-[11px] tracking-wider uppercase">
                {item.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactMenu;
