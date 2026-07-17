import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { cloudinaryAssets } from "../data/cloudinaryAssets";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

const productLinks = [
  { label: "Indian Rice", to: "/products?item=indian-rice" },
  { label: "Jasmine Rice", to: "/products?item=jasmine-rice" },
  { label: "Engine Lubricants", to: "/products?item=engine-lubricants" },
  { label: "London Colognes", to: "/products?item=london-colognes" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#10233b] text-white">
        <div className="!mx-auto flex max-w-7xl items-center justify-between gap-4 !px-4 !py-2 text-xs sm:!px-6 lg:!px-8">
          <p className="hidden sm:block tracking-[0.22em] uppercase text-white/75">
            Exporting rice, lubricants, and premium fragrances
          </p>
          <a
            href="https://www.pinnacleexpo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-wide text-white/80 transition hover:text-white"
          >
            www.pinnacleexpo.com
          </a>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="tel:+919216399808"
              className="flex items-center gap-2 text-white/80 transition hover:text-white"
            >
              <FaPhoneAlt className="text-[#c79a4b]" />
              <span className="hidden md:inline">+91 92163 99808</span>
            </a>
            <a
              href="https://wa.me/919216399808"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 !px-3 !py-1 text-white/90 transition hover:border-white/30 hover:bg-white/10"
            >
              <FaWhatsapp className="text-[#4ade80]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-[var(--line)] bg-white/82 backdrop-blur-xl">
        <div className="!mx-auto flex max-w-7xl items-center justify-between gap-4 !px-4 !py-4 sm:!px-6 lg:!px-8">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={cloudinaryAssets.logo}
              alt="Pinnacle Expo"
              className="h-12 w-auto rounded-xl object-contain shadow-sm ring-1 ring-black/5 sm:h-16"
            />
            <div className="hidden sm:block">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--blue)]">
                Pinnacle Expo
              </p>
              <p className="display-font text-lg font-semibold text-[var(--ink)]">
                Global Trade, Built on Trust
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) =>
              link.label === "Products" ? (
                <div key={link.label} className="relative group">
                  <Link
                    to={link.to}
                    className={`flex items-center gap-2 rounded-full !px-4 !py-2 text-sm font-semibold transition ${location.pathname === "/products"
                        ? "bg-[var(--navy)] text-white shadow-lg shadow-slate-900/10"
                        : "text-[var(--ink)] hover:bg-slate-100"
                      }`}
                  >
                    {link.label}
                    <FaChevronDown className="text-[0.7rem] opacity-70" />
                  </Link>
                  <div className="absolute left-0 top-full hidden min-w-56 !pt-3 group-hover:block">
                    <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white !p-2 shadow-[0_20px_40px_rgba(16,35,59,0.12)]">
                      {productLinks.map((product) => (
                        <Link
                          key={product.to}
                          to={product.to}
                          className="block rounded-xl !px-4 !py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-[var(--navy)]"
                        >
                          {product.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`rounded-full !px-4 !py-2 text-sm font-semibold transition ${isActive(link.to)
                      ? "bg-[var(--navy)] text-white shadow-lg shadow-slate-900/10"
                      : "text-[var(--ink)] hover:bg-slate-100"
                    }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white !p-3 text-[var(--ink)] shadow-sm md:hidden"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="!ml-auto flex h-full w-[90%] max-w-sm flex-col bg-white !px-5 !py-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 !pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--blue)]">
                  Pinnacle Expo
                </p>
                <p className="display-font text-lg font-semibold">
                  Global trade
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-slate-100 !p-3 text-slate-700"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <div className="!mt-6 flex flex-col gap-2">
              {navLinks.map((link) =>
                link.label === "Products" ? (
                  <div
                    key={link.label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 !p-3"
                  >
                    <button
                      type="button"
                      onClick={() => setShowProductMenu((prev) => !prev)}
                      className="flex w-full items-center justify-between rounded-xl !px-3 !py-2.5 text-left text-sm font-semibold text-[var(--ink)]"
                    >
                      <span>{link.label}</span>
                      <FaChevronDown
                        className={`transition ${showProductMenu ? "rotate-180" : ""}`}
                      />
                    </button>

                    {showProductMenu && (
                      <div className="!mt-2 grid gap-2">
                        {productLinks.map((product) => (
                          <Link
                            key={product.to}
                            to={product.to}
                            onClick={() => setIsOpen(false)}
                            className="rounded-xl bg-white !px-4 !py-2.5 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-[var(--navy)]"
                          >
                            {product.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl !px-4 !py-3.5 text-sm font-semibold transition ${isActive(link.to)
                        ? "bg-[var(--navy)] text-white"
                        : "bg-slate-50 text-[var(--ink)] hover:bg-slate-100"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            <div className="!mt-auto border-t border-slate-100 !pt-4">
              <a
                href="https://wa.me/919216399808"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] !px-4 !py-2.5 text-sm font-semibold text-white"
              >
                <FaWhatsapp />
                Start WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
