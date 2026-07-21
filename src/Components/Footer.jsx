import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { cloudinaryAssets } from "../data/cloudinaryAssets";

const Footer = () => {
  return (
    <footer className="bg-[#313268] text-white !px-5 !py-8 text-center sm:!px-10 sm:!py-12">
      <div className="!mx-auto grid place-items-center max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 lg:gap-12">
        <div className="flex flex-col items-center justify-center">
          <img
            src={cloudinaryAssets.logo}
            alt="Logo"
            className="!mb-4 w-24 rounded-sm bg-white object-contain p-2 shadow-sm sm:w-28 md:w-32"
          />

          <p className="!mx-auto max-w-sm text-sm leading-6 text-gray-300  sm:text-base sm:leading-7 lg:mx-0">
            Your trusted partner for global export and authorized
            distributorship of high-quality Indian & Thai rice, premium
            engine lubricants, and luxury fragrances.
          </p>
        </div>
        <div className="!mt-6 flex w-full flex-col max-w-sm !px-4 !py-4 items-center justify-center sm:gap-4 sm:!px-5">
          <img
            src="/BRICS.jpg"
            alt="Verified BRICS Member"
            className="w-24 rounded-sm object-contain shadow-sm sm:w-32 md:w-40"
          />
          <div className="!mt-3 text-center sm:!mt-0 sm:text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-sm">
              Member of BRICS CHAMBER OF COMMERCE
            </p>
            <p className="!mt-1 max-w-xs text-[11px] leading-5 text-gray-300 sm:text-sm sm:leading-6">
              Building trusted export relationships with buyers and distributors
              across international markets.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-center lg:text-center">
          <h4 className="!mb-3 text-base font-semibold sm:text-lg">
            Quick Links
          </h4>
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
        <div className="flex flex-col items-center justify-center lg:items-center">
          <h4 className="!mb-3 text-base font-semibold sm:text-lg">
            Contact Us
          </h4>
          <ul className="space-y-2 text-xs text-gray-300 sm:text-sm">
            <li className="flex items-center justify-center gap-2 lg:justify-center">
              <FaPhoneAlt /> +91 92163 99808
            </li>
            <li className="flex items-center justify-center gap-2 lg:justify-center">
              <FaEnvelope /> pinnacle.chd@gmail.com
            </li>
            <li className="flex items-center justify-center gap-2 lg:justify-center">
              <FaMapMarkerAlt /> Phase 11, Mohali, India
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
