import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaHeadset } from "react-icons/fa";

const FloatBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Heartbeat animation variant
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

  // Icon animation variants
  const iconVariants = {
    hidden: { opacity: 0, y: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      y: -i * 60, // Distance between each icon
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
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-center justify-end">
        <AnimatePresence>
          {isOpen && (
            <>
              {/* WhatsApp */}
              <motion.a
                key="whatsapp"
                custom={1}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                href="https://wa.me/+919216399808"
                target="_blank"
                className="absolute bg-green-500 text-white !p-3 rounded-full shadow"
              >
                <FaWhatsapp />
              </motion.a>

              {/* Call */}
              <motion.a
                key="call"
                custom={2}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                href="tel:+919216399808"
                className="absolute bg-blue-600 text-white !p-3 rounded-full shadow"
              >
                <FaPhoneAlt />
              </motion.a>

              {/* Email */}
              <motion.a
                key="email"
                custom={3}
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                href="mailto:pinnacle.chd@gmail.com"
                className="absolute bg-red-500 text-white !p-3 rounded-full shadow"
              >
                <FaEnvelope />
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-[#005a34] text-white !p-4 rounded-full shadow-lg focus:outline-none z-10"
          animate={!isOpen ? "animate" : ""}
          variants={!isOpen ? heartbeat : {}}
        >
          <FaHeadset className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatBtn;
