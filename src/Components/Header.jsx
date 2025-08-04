import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const [showProductMenu, setShowProductMenu] = useState(false);
  const location = useLocation();
  const path = location.pathname + location.search;

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
            <FaPhoneAlt />
            {/* <span className="hidden sm:block">+919216399808</span> */}
          </a>

          <a
            href="https://wa.me/919216399808"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 flex items-center gap-1"
            title="WhatsApp"
          >
            <FaWhatsapp />{" "}
            <span className="hidden sm:block">+919216399808</span>
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
        <p className="text-center text-sm sm:text-base text-green-600 drop-shadow-md max-w-xs mx-auto">
          Reach out for Global Export Opportunities & Authorized
          Distributorships
        </p>

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
          // Arrow Button (when menu is open)
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-8 right-6 z-50 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-green-900 focus:outline-none !p-2 rounded-full shadow-lg"
            >
              <FaArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}

        {/* Desktop Nav */}
        {/* <a href="#">
          <img src={contactImg} className="h-20 absolute top-8 right-100" alt="contact Image" />
        </a> */}
        <nav className="hidden md:flex gap-6 text-lg text-gray-800 font-medium">
          <Link
            to="/"
            className={`hover:text-green-700 ${
              location.pathname === "/"
                ? "text-green-700 font-semibold underline"
                : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`hover:text-green-700 ${
              location.pathname === "/about"
                ? "text-green-700 font-semibold underline"
                : ""
            }`}
          >
            About
          </Link>

          <div className="relative group">
            <a href="#products" className="hover:text-green-700">
              Products
            </a>
            <div className="absolute hidden group-hover:flex flex-col bg-white shadow-md !py-2 rounded text-sm text-gray-800 min-w-[180px] z-50">
              <Link
                to="/products?item=indian-rice"
                className={`!px-4 !py-2 hover:bg-gray-100 ${
                  path === "/products?item=indian-rice"
                    ? "bg-gray-100 text-green-700 font-semibold"
                    : ""
                }`}
              >
                Indian Rice
              </Link>

              <Link
                to="/products?item=jasmine-rice"
                className={`!px-4 !py-2 hover:bg-gray-100 ${
                  path === "/products?item=jasmine-rice"
                    ? "bg-gray-100 text-green-700 font-semibold"
                    : ""
                }`}
              >
                Jasmine Rice
              </Link>

              <Link
                to="/products?item=engine-lubricants"
                className={`!px-4 !py-2 hover:bg-gray-100 ${
                  path === "/products?item=engine-lubricants"
                    ? "bg-gray-100 text-green-700 font-semibold"
                    : ""
                }`}
              >
                Engine Lubricants
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            className={`hover:text-green-700 ${
              location.pathname === "/contact"
                ? "text-green-700 font-semibold underline"
                : ""
            }`}
          >
            Contact Us
          </Link>
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
              <ul className="flex flex-col gap-6 text-xl text-center text-green-700 !mt-[7em] text-gray-800 font-medium">
                <li>
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg !px-4 py-2 rounded ${
                      location.pathname === "/"
                        ? "text-green-700 font-bold underline"
                        : "text-black"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg !px-4 py-2 rounded ${
                      location.pathname === "/about"
                        ? "text-green-700 font-bold underline"
                        : "text-black"
                    }`}
                  >
                    About
                  </Link>
                </li>

                {/* Keep Products dropdown as-is for now */}
                <li>
                  <button
                    onClick={() => setShowProductMenu(!showProductMenu)}
                    className="hover:underline text-green-700 w-full text-center"
                  >
                    Products
                  </button>

                  <AnimatePresence initial={false}>
                    {showProductMenu && (
                      <motion.ul
                        key="product-submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden flex flex-col gap-4 !mt-2 text-sm text text-[#84aa2c]"
                      >
                        <li>
                          <Link
                            to="/products?item=indian-rice"
                            onClick={() => setIsOpen(false)}
                            className={`text-lg !px-4 py-2 rounded ${
                              path === "/products?item=indian-rice"
                                ? "text-green-700 font-bold underline"
                                : "text-black"
                            }`}
                          >
                            Indian Rice
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products?item=jasmine-rice"
                            onClick={() => setIsOpen(false)}
                            className={`text-lg !px-4 py-2 rounded ${
                              path === "/products?item=jasmine-rice"
                                ? "text-green-700 font-bold underline"
                                : "text-black"
                            }`}
                          >
                            Jasmine Rice
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/products?item=engine-lubricants"
                            onClick={() => setIsOpen(false)}
                            className={`text-lg !px-4 py-2 rounded ${
                              path === "/products?item=engine-lubricants"
                                ? "text-green-700 font-bold underline"
                                : "text-black"
                            }`}
                          >
                            Engine Lubricants
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className={`text-lg !px-4 py-2 rounded ${
                      location.pathname === "/contact"
                        ? "text-green-700 font-bold underline"
                        : "text-black"
                    }`}
                  >
                    Contact Us
                  </Link>
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
