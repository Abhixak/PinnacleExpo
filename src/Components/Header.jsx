import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <header className="flex justify-between items-center !px-6 !py-4 bg-white shadow-md relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-20 md:h-24 xl:h-26 w-auto" />
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-green-900 focus:outline-none"
        >
          <motion.svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d="M4 6h16"
              animate={isOpen ? { d: "M6 18L18 6" } : { d: "M4 6h16" }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              d="M4 12h16"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              d="M4 18h16"
              animate={isOpen ? { d: "M6 6l12 12" } : { d: "M4 18h16" }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-lg text-gray-800 font-medium">
        <a href="#home" className="hover:text-green-700">Home</a>
        <a href="#about" className="hover:text-green-700">About</a>
        <a href="#products" className="hover:text-green-700">Products</a>
        <a href="#contact" className="hover:text-green-700">Contact Us</a>
      </nav>

      {/* Mobile Slide-in Menu (Right to Left) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-md !px-6 !py-8 z-40"
          >

            <ul className="flex flex-col gap-6 text-lg text-center text-green-700 space-y-6 !mt-16 text-gray-800 font-medium">
              <li>
                <a href="#home" onClick={() => setIsOpen(false)} className="hover:underline">Home</a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsOpen(false)} className="hover:underline">About</a>
              </li>
              <li>
                <a href="#products" onClick={() => setIsOpen(false)} className="hover:underline">Products</a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
