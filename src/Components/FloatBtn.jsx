import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaHeadset } from "react-icons/fa";

const FloatBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const heartbeat = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      y: -i * 60,
      scale: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    }),
    exit: {
      opacity: 0,
      y: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="fixed bottom-10 right-6 z-50 sm:bottom-6 ">
      <div className="relative flex flex-col items-center justify-end">
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.a
                key="whatsapp"
                custom={1}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                href="https://wa.me/+919216399808"
                target="_blank"
                className="absolute !mb-4 rounded-full bg-green-500 !p-2.5 text-sm text-white shadow sm:!p-3 sm:text-lg"
              >
                <FaWhatsapp />
              </motion.a>

              <motion.a
                key="call"
                custom={2}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                href="tel:+919216399808"
                className="absolute !mb-4 rounded-full bg-blue-600 !p-2.5 text-white shadow sm:!p-3"
              >
                <FaPhoneAlt />
              </motion.a>

              <motion.a
                key="email"
                custom={3}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                href="mailto:pinnacle.chd@gmail.com"
                className="absolute !mb-4 rounded-full bg-red-500 !p-2.5 text-white shadow sm:!p-3"
              >
                <FaEnvelope />
              </motion.a>
            </>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className="z-10 cursor-pointer rounded-full bg-[#a5353a] !p-2.5 text-white shadow-lg focus:outline-none sm:!p-4"
          animate={!isOpen ? "animate" : ""}
          variants={!isOpen ? heartbeat : {}}
        >
          <FaHeadset className="h-8 w-8 md:h-5 md:w-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatBtn;
