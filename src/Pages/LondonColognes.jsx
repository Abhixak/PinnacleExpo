import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products.js";
import categories from "../data/categories.js";
import { getCallLink, getWhatsAppLink } from "../utils/contactLinks";

const LondonColognes = () => {
  const colognes = products.filter((p) => p.category === "London Colognes");
  const otherBrands = categories.filter((c) => c.name !== "London Colognes");

  const benefits = [
    {
      icon: (
        <svg className="h-10 w-10 text-[#c79a4b]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 10C2.5 11.5 2 13.5 2 15.5C2 19.5 5.5 22 12 22C18.5 22 22 19.5 22 15.5C22 13.5 21.5 11.5 20 10L12 2Z" fill="url(#goldGrad)" className="animate-pulse" />
          <path d="M12 6V18M9 9H15M10 13H14" stroke="#10233b" strokeWidth="1.5" strokeLinecap="round" />
          <defs>
            <linearGradient id="goldGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff8ec" />
              <stop offset="50%" stopColor="#e5ba73" />
              <stop offset="100%" stopColor="#c79a4b" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Extrait de Parfum Strength",
      description: "Our fragrances are formulated at the highest oil concentration (Extrait de Parfum) to guarantee maximum longevity.",
    },
    {
      icon: (
        <div className="hover:scale-105 transition-transform duration-500">
          <svg className="h-10 w-10 text-[#c79a4b]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20V10M12 10L15 13M12 10L9 13" stroke="#10233b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12" stroke="#c79a4b" strokeWidth="1.5" strokeLinecap="round" className="animate-pulse" />
            <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12" stroke="#c79a4b" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      ),
      title: "Exquisite Sillage & Projection",
      description: "Designed to project an aura of confidence, leaving a memorable, sophisticated scent trail wherever you go.",
    },
    {
      icon: (
        <div className="hover:scale-110 transition-transform duration-500">
          <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" fill="url(#goldGradSafe)" stroke="#10233b" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M9 11L11 13L15 9" stroke="#10233b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="goldGradSafe" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fff8eb" />
                <stop offset="100%" stopColor="#c79a4b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ),
      title: "Skin-Safe Premium Oils",
      description: "Formulated with 100% skin-safe, hypoallergenic, and ethically sourced natural oils, suitable for all skin types.",
    },
  ];

  const faqs = [
    {
      q: "What makes London Colognes different from standard perfumes?",
      a: "Unlike typical Eau de Toilette or Eau de Parfum which contain lower oil concentrations, London Colognes are formulated as Extrait de Parfum. This high concentration ensures that the scent projects beautifully and lasts for over 12 hours.",
    },
    {
      q: "Are these fragrances suitable for sensitive skin?",
      a: "Yes, all our perfumes are dermatologically tested, hypoallergenic, and crafted with high-grade natural oils that are safe and gentle on all skin types.",
    },
    {
      q: "Can I order these fragrances for personal use, resale, or distribution?",
      a: "Yes! We accommodate all orders: individual purchases for personal use, inventory packages for retail resale, and full container shipments for wholesale distribution. Contact us via Call or WhatsApp to book your order.",
    },
  ];

  const reviews = [
    {
      name: "Vikram Malhotra",
      role: "Fragrance Distributor, Mumbai",
      comment: "Untamed has become one of our best-selling men's colognes. The longevity is incredible, lasting easily through a long workday. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sophia Bennett",
      role: "Boutique Owner, London",
      comment: "Sensory is pure elegance. The ylang-ylang and vanilla combination is so sophisticated. My customers love the luxury glass packaging.",
      rating: 5,
    },
  ];

  return (
    <main className="bg-white text-slate-800">
      {/* Brand Hero Banner */}
      <section className="relative overflow-hidden !py-20 text-white sm:!py-32">
        {/* Background Image with Dark Overlay */}
        <img
          src="https://res.cloudinary.com/dljubulyn/image/upload/v1784286447/pinnacleexpo/categories_london_colognes.png"
          alt="London Colognes Collection Header"
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-10 bg-black/55" />
        <div className="relative z-20 !mx-auto max-w-7xl !px-6 text-center">
          {/* <span className="inline-block rounded-full border border-[#c79a4b]/30 bg-[#c79a4b]/10 !px-4 !py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#c79a4b]">
            Premium Fragrance Brand
          </span> */}
          <h1 className="!mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            London Colognes
          </h1>
          <p className="!mx-auto !mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Exquisite sillage, long-lasting concentrates, and masterfully crafted glass. Experience luxury scents designed for personal wear, retail resale, or bulk distribution.
          </p>
          <div className="!mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#fragrances"
              className="rounded-full bg-[#c79a4b] !px-8 !py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#b08337]"
            >
              Explore Collection
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-white/20 bg-white/5 !px-8 !py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
            >
              Book Personal &amp; Bulk Orders
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      {/* <section className="!py-16 sm:!py-24">
        <div className="!mx-auto max-w-7xl !px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c79a4b]">
                The Story Behind the Scent
              </span>
              <h2 className="!mt-2 text-3xl font-bold tracking-tight text-[#10233b] sm:text-4xl">
                Crafted for Sophistication and Raw Power
              </h2>
              <p className="!mt-6 text-base leading-7 text-slate-600">
                London Colognes was born from a desire to blend traditional European perfumery with bold, modern scent profiles. Guided by master perfumers, we source natural botanicals and intense concentrates to ensure every bottle offers a memorable fragrance journey.
              </p>
              <p className="!mt-4 text-base leading-7 text-slate-600">
                As a premium brand under the **Pinnacle Expo** corporate umbrella, we export globally to distributors, luxury retailers, and individuals who refuse to settle for ordinary scents.
              </p>
            </div>
            <div className="relative rounded-3xl border border-slate-100 bg-slate-50 !p-8 shadow-sm">
              <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/10 rounded-2xl bg-[#10233b] !px-4 !py-2 text-xs font-bold uppercase tracking-widest text-[#c79a4b]">
                Extrait de Parfum
              </div>
              <h3 className="text-xl font-semibold text-[#10233b] !mb-4">
                Why Extrait de Parfum?
              </h3>
              <p className="text-sm leading-6 text-slate-600 !mb-4">
                Most commercial colognes fade after 3–4 hours because they are diluted with water and alcohol. London Colognes are formulated with **20% to 30% pure fragrance oil concentrate**.
              </p>
              <ul className="space-y-3 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#c79a4b]">✔</span> 12+ Hours Scent Longevity
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c79a4b]">✔</span> Richer, deeper notes that evolve on skin
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c79a4b]">✔</span> Outstanding sillage (scent trail)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Fragrances Collection Section */}
      <section id="fragrances" className="bg-[#fbfaf8] !py-10 sm:!py-14">
        <div className="!mx-auto max-w-7xl !px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c79a4b]">
              Signature Collection
            </span>
          </div>

          <div className="!mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {colognes.map((perfume) => (
              <div
                key={perfume.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c79a4b]/30 hover:shadow-xl"
              >
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3]">
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-[#10233b]/90 backdrop-blur-md !px-3 !py-1 text-[10px] font-bold uppercase tracking-widest text-[#c79a4b] border border-[#c79a4b]/20">
                    {perfume.concentration}
                  </div>
                </div>
                <div className="flex flex-1 flex-col !p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#10233b] tracking-tight group-hover:text-[#c79a4b] transition-colors">
                      {perfume.name}
                    </h3>
                    <div className="flex text-[#c79a4b] text-xs">
                      {"★".repeat(5)}
                    </div>
                  </div>

                  {perfume.notes && (
                    <p className="!mt-2 text-[10px] font-semibold text-[#c79a4b] tracking-wide uppercase">
                      Top Note: {perfume.notes.top.split(",")[0]}
                    </p>
                  )}

                  <p className="!mt-2.5 flex-1 text-xs leading-relaxed text-slate-500 line-clamp-3">
                    {perfume.description}
                  </p>

                  <div className="!mt-6 flex items-stretch gap-3">
                    <Link
                      to={`/london-colognes/${perfume.slug}`}
                      className="flex-1 rounded-xl bg-gradient-to-r from-[#10233b] to-[#1a385f] !py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:from-[#c79a4b] hover:to-[#b08337] hover:shadow-lg hover:scale-[1.02] flex items-center justify-center"
                    >
                      Scent Profile
                    </Link>
                    <a
                      href={getWhatsAppLink(perfume.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Enquire on WhatsApp"
                      className="flex w-12 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md transition-all duration-300 hover:bg-[#20ba59] hover:shadow-lg hover:scale-[1.02] shrink-0"
                    >
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.549 4.18 1.597 6.002L.057 24l6.168-1.597c1.782.96 3.774 1.597 6.002 1.597 6.626 0 12.004-5.378 12.004-12.004C24.008 5.378 18.63 0 12.004 0zm0 21.996c-1.895 0-3.71-.502-5.302-1.458l-.377-.22-3.69.96.96-3.593-.243-.388c-.996-1.596-1.523-3.447-1.523-5.302C1.83 5.922 6.398 1.83 12.004 1.83c5.602 0 10.174 4.092 10.174 10.174-.004 5.596-4.57 10.174-10.174 10.174zm5.187-7.25c-.287-.145-1.706-.842-1.97-.938-.264-.096-.456-.145-.648.145-.192.29-.744.938-.912 1.13-.168.19-.336.216-.624.072-.288-.145-1.21-.446-2.308-1.428-.854-.76-1.43-1.702-1.598-1.993-.168-.288-.016-.446.126-.588.13-.13.288-.337.432-.505.144-.168.192-.288.288-.48.096-.193.048-.363-.024-.506-.072-.145-.648-1.564-.888-2.14-.233-.564-.472-.487-.648-.496-.168-.008-.36-.008-.552-.008s-.504.072-.768.36c-.264.288-1.008.986-1.008 2.404 0 1.417 1.032 2.788 1.176 2.98.144.193 2.032 3.102 4.921 4.35.688.297 1.224.474 1.64.607.693.22 1.325.19 1.826.115.556-.083 1.706-.697 1.946-1.37.24-.67.24-1.246.168-1.37-.072-.124-.264-.196-.552-.34z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Benefits Section */}
      <section className="!py-10 sm:!py-14">
        <div className="!mx-auto max-w-7xl !px-6">
          <div className="text-center !mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#10233b] sm:text-4xl">
              Uncompromising Standards
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-100 bg-white !p-6 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c79a4b]/10">
                  {b.icon}
                </span>
                <h3 className="!mt-4 text-lg font-semibold text-[#10233b]">
                  {b.title}
                </h3>
                <p className="!mt-2 text-xs leading-5 text-slate-500">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews/Testimonial Section */}
      {/* <section className="bg-slate-50 !py-16 sm:!py-24">
        <div className="!mx-auto max-w-7xl !px-6">
          <div className="text-center !mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c79a4b]">
              Testimonials
            </span>
            <h2 className="!mt-2 text-3xl font-bold tracking-tight text-[#10233b]">
              What Distributors Say
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {reviews.map((r, idx) => (
              <div key={idx} className="rounded-2xl bg-white !p-8 shadow-sm">
                <div className="flex gap-1 text-[#c79a4b] font-bold text-lg !mb-4">
                  {"★".repeat(r.rating)}
                </div>
                <p className="text-sm italic leading-6 text-slate-600">
                  "{r.comment}"
                </p>
                <div className="!mt-6">
                  <p className="text-sm font-bold text-[#10233b]">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* FAQs Section */}
      <section className="!py-10 sm:!py-14">
        <div className="!mx-auto max-w-7xl !px-6">
          <div className="text-center !mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#10233b]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="!mx-auto max-w-3xl space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 !pb-6">
                <h3 className="text-base font-bold text-[#10233b]">
                  {faq.q}
                </h3>
                <p className="!mt-2 text-xs leading-6 text-slate-500">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Brands (Pinnacle Expo Portfolio) */}
      <section className="bg-slate-50 !py-10 sm:!py-14">
        <div className="!mx-auto max-w-7xl !px-6">
          <div className="text-center !mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c79a4b]">
              Pinnacle Expo Portfolio
            </span>
            <h2 className="!mt-2 text-3xl font-bold tracking-tight text-[#10233b]">
              Our Other Brands
            </h2>
            <p className="!mt-4 text-xs text-slate-500 max-w-xl !mx-auto">
              Explore the other high-quality product categories and brands exported globally by Pinnacle Expo.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherBrands.map((brand, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl bg-white !p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
                <img src={brand.image} alt={brand.name} className="h-44 w-full rounded-xl object-cover" />
                <h3 className="!mt-4 text-sm font-bold text-[#10233b]">{brand.name}</h3>
                <p className="text-[10px] uppercase font-bold tracking-wide text-slate-400">Brand</p>
                <p className="!mt-2 text-xs text-slate-500 leading-relaxed">{brand.description}</p>
                <Link
                  to={
                    brand.name.toLowerCase().includes("indian rice")
                      ? "/indian-rice"
                      : brand.name.toLowerCase().includes("jasmine rice")
                      ? "/jasmine-rice"
                      : "/lubricants"
                  }
                  className="!mt-4 inline-block text-xs font-semibold text-[#c79a4b] hover:underline"
                >
                  Explore Brand →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact CTA */}
      <section className="bg-[#10233b] !py-10 sm:!py-14 text-white text-center">
        <div className="!mx-auto max-w-5xl !px-6">
          <h2 className="text-3xl font-bold">Order London Colognes Today</h2>
          <p className="!mt-4 text-sm text-slate-300 max-w-xl !mx-auto">
            Ready to buy? We cater to all volumes: individual bottles for personal wear, inventory for resale, and large container shipments for global distribution.
          </p>
          <div className="!mt-8 flex justify-center gap-4">
            <a
              href={getWhatsAppLink("London Colognes Scent Order Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] !px-8 !py-3 text-xs font-bold text-white shadow-md hover:bg-[#1fb85a]"
            >
              Order via WhatsApp
            </a>
            <a
              href={getCallLink()}
              className="rounded-full border border-white/20 bg-white/5 !px-8 !py-3 text-xs font-bold text-white shadow-md hover:bg-white/10"
            >
              Call to Book Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LondonColognes;
