import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#005a34] text-white text-center !px-6 sm:!px-10 !py-10">
      <div className="max-w-6xl !mx-auto grid grid-cols-1 sm:grid-cols-3 place-items-center gap-10">
        
        {/* Company Info */}
        <div className="flex flex-col items-center">
          <img src={Logo} className="h-20 w-auto !mb-3 bg-white" alt="Pinnacle Expo Logo" />
          <p className="text-sm text-gray-300 max-w-xs">
            Your trusted partner in global export and import of Indian & Thai rice and engine lubricants.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold !mb-3">Contact Us</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 92163 99808
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@pinnacleexpo.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> New Delhi, India
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg font-semibold !mb-3">Quick Links</h4>
          <ul className="text-sm space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/#products" className="hover:text-white">Products</a></li>
            <li><a href="/#about" className="hover:text-white">About Us</a></li>
            <li><a href="/#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 !mt-10 !pt-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Pinnacle Expo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
