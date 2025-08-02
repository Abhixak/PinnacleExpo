import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <>
      <section className="bg-[#324b4c] h-10 flex justify-between items-center !px-4 text-white text-lg">
        {/* Left Side: Website Link */}
        <a
          href="https://www.pinnacleexpo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm hover:underline"
        >
          www.pinnacleexpo.com
        </a>

        {/* Right Side: Icons */}
        <div className="flex text-sm gap-6 items-center">
          <a
            href="tel:+919216399808"
            className="text-blue-500 flex items-center gap-1"
            title="Call"
          >
            <FaPhoneAlt /> <span>+919216399808</span>
          </a>

          <a
            href="https://wa.me/919216399808"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 flex items-center gap-1"
            title="WhatsApp"
          >
            <FaWhatsapp /> <span>+919216399808</span>
          </a>
        </div>
      </section>
      <header className="flex justify-between sticky top-0 rounded items-center !px-6 !py-4 bg-white shadow-md relative z-50">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-22 md:h-24 xl:h-26 w-auto"
          />
        </div>

        {/* Menu Button Section */}
        {!isOpen ? (
          // Hamburger Button (when menu is closed)
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(true)}
              className="text-green-900 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Top Line */}
                <motion.path
                  d="M4 6h16"
                  variants={{
                    closed: { d: "M4 6h16", rotate: 0, y: 0 },
                    open: { d: "M6 18L18 6", rotate: 45, y: 6 },
                  }}
                  animate="closed"
                  transition={{ duration: 0.3 }}
                />

                {/* Middle Line */}
                <motion.path
                  d="M4 12h16"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  animate="closed"
                  transition={{ duration: 0.2 }}
                />

                {/* Bottom Line */}
                <motion.path
                  d="M4 18h16"
                  variants={{
                    closed: { d: "M4 18h16", rotate: 0, y: 0 },
                    open: { d: "M6 6l12 12", rotate: -45, y: -6 },
                  }}
                  animate="closed"
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </button>
          </div>
        ) : (
          // Left Arrow Button (when menu is open)
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-8 right-6 z-50 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-green-900 focus:outline-none bg-white !p-2 rounded-full shadow"
            >
              <FaArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-lg text-gray-800 font-medium">
          <a href="#home" className="hover:text-green-700">
            Home
          </a>
          <a href="#about" className="hover:text-green-700">
            About
          </a>
          <a href="#products" className="hover:text-green-700">
            Products
          </a>
          <a href="#contact" className="hover:text-green-700">
            Contact Us
          </a>
        </nav>

        {/* Mobile Slide-in Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-md !px-6 z-40"
            >
              <ul className="flex flex-col gap-8 text-xl text-center text-green-700 space-y-6 !mt-[8em] text-gray-800 font-medium">
                <li>
                  <a
                    href="#home"
                    onClick={() => setIsOpen(false)}
                    className="hover:underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={() => setIsOpen(false)}
                    className="hover:underline"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
