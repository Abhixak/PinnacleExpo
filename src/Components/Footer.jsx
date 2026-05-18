import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { cloudinaryAssets } from "../data/cloudinaryAssets";

const Footer = () => {
  return (
    <footer className="bg-[#313268] text-white !px-5 !py-8 text-center sm:!px-10 sm:!py-12">
      <div className="!mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-8 lg:gap-12 sm:place-items-center">
        <div className="flex flex-col items-center">
          <img
            src={cloudinaryAssets.logo}
            className="!mb-3 h-16 w-auto rounded-2xl bg-white sm:h-24"
            alt="Pinnacle Expo Logo"
          />
          <p className="max-w-xs text-xs leading-5 text-gray-300 sm:text-sm sm:leading-6">
            Your trusted partner in global export and import of Indian & Thai
            rice and engine lubricants.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="!mb-3 text-base font-semibold sm:text-lg">Contact Us</h4>
          <ul className="space-y-2 text-xs text-gray-300 sm:text-sm">
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <FaPhoneAlt /> +91 92163 99808
            </li>
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <FaEnvelope /> pinnacle.chd@gmail.com
            </li>
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <FaMapMarkerAlt /> Phase 11, Mohali, India
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h4 className="!mb-3 text-base font-semibold sm:text-lg">Quick Links</h4>
          <ul className="space-y-2 text-xs text-gray-300 sm:text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
