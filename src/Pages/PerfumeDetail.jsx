import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products.js";
import { getCallLink, getWhatsAppLink } from "../utils/contactLinks";

const PerfumeDetail = () => {
  const { perfumeName } = useParams();

  const perfume = products.find(
    (p) => p.slug === perfumeName?.toLowerCase() && p.category === "London Colognes"
  );

  if (!perfume) {
    return (
      <section className="min-h-screen bg-white !px-4 !py-16 text-center text-red-600">
        <h2 className="text-2xl font-bold">Fragrance Not Found</h2>
        <p className="!mt-4 text-gray-600">
          The requested perfume profile could not be found. Please check the URL or return to our collection.
        </p>
        <Link
          to="/london-colognes"
          className="!mt-6 inline-block rounded-full bg-[#10233b] !px-6 !py-2.5 text-xs font-semibold text-white"
        >
          Back to London Colognes
        </Link>
      </section>
    );
  }

  // Get other colognes for related products
  const relatedColognes = products
    .filter((p) => p.category === "London Colognes" && p.slug !== perfume.slug)
    .slice(0, 3);

  return (
    <section className="bg-white text-slate-800 !py-10">
      <div className="!mx-auto max-w-7xl !px-6">
        {/* Breadcrumb Navigation */}
        <nav className="!mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <Link to="/" className="hover:text-[#c79a4b]">
            Home
          </Link>
          <span>/</span>
          <Link to="/london-colognes" className="hover:text-[#c79a4b]">
            London Colognes
          </Link>
          <span>/</span>
          <span className="text-[#10233b] font-bold">{perfume.name}</span>
        </nav>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Scent Visual */}
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-sm">
            <img
              src={perfume.image}
              alt={`${perfume.name} - London Colognes Premium Perfume`}
              className="h-[30rem] w-full object-cover transition-transform duration-500 hover:scale-102 sm:h-[35rem]"
            />
          </div>

          {/* Scent Specs & Details */}
          <div className="flex flex-col justify-center">
            <span className="inline-block self-start rounded-full bg-[#c79a4b]/10 border border-[#c79a4b]/20 !px-3 !py-1 text-xs font-bold uppercase tracking-wider text-[#c79a4b]">
              {perfume.concentration}
            </span>
            <h1 className="!mt-4 text-3xl font-extrabold tracking-tight text-[#10233b] sm:text-4xl">
              {perfume.name}
            </h1>
            <div className="!mt-2 flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Longevity:</span>
              <span className="rounded bg-slate-100 !px-2 !py-0.5 text-xs font-bold text-slate-700">
                {perfume.longevity}
              </span>
            </div>

            <p className="!mt-6 text-base leading-7 text-slate-600">
              {perfume.description}
            </p>

            {/* Fragrance Notes */}
            <div className="!mt-8 border-t border-slate-100 !pt-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#10233b] !mb-4">
                Scent Pyramid
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-[#fafafa] !p-3 border border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Top Notes
                  </p>
                  <p className="!mt-1 text-xs font-semibold text-slate-700">
                    {perfume.notes.top}
                  </p>
                </div>
                <div className="rounded-xl bg-[#fafafa] !p-3 border border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Heart Notes
                  </p>
                  <p className="!mt-1 text-xs font-semibold text-slate-700">
                    {perfume.notes.heart}
                  </p>
                </div>
                <div className="rounded-xl bg-[#fafafa] !p-3 border border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    Base Notes
                  </p>
                  <p className="!mt-1 text-xs font-semibold text-slate-700">
                    {perfume.notes.base}
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="!mt-8 border-t border-slate-100 !pt-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#10233b] !mb-3">
                Product Benefits
              </h2>
              <ul className="space-y-2">
                {perfume.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-[#c79a4b] font-bold">✔</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Volume Note */}
            <p className="!mt-6 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-100 rounded-xl !p-3.5">
              💡 <strong className="text-[#10233b]">Ordering Options:</strong> We support individual purchases for <strong>personal wear</strong>, inventory sourcing for retail <strong>resale</strong>, and wholesale shipping for <strong>bulk distribution</strong>.
            </p>

            {/* CTAs */}
            <div className="!mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppLink(`${perfume.name} Scent Order`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-xl bg-[#25D366] !py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-[#1fb85a]"
              >
                WhatsApp Order (Personal &amp; Bulk)
              </a>
              <a
                href={getCallLink()}
                className="flex flex-1 items-center justify-center rounded-xl border border-[#10233b] bg-white !py-3 text-center text-sm font-bold text-[#10233b] shadow-sm transition hover:bg-slate-50"
              >
                Call to Book Orders
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Description Tabs Content */}
        <div className="!mt-16 grid grid-cols-1 gap-12 border-t border-slate-100 !pt-12 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-[#10233b] !mb-3">
              Ingredients
            </h2>
            <p className="text-xs leading-6 text-slate-500 bg-slate-50 !p-4 rounded-xl border border-slate-100">
              {perfume.ingredients}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#10233b] !mb-3">
              How to Apply
            </h2>
            <p className="text-xs leading-6 text-slate-500 bg-slate-50 !p-4 rounded-xl border border-slate-100">
              {perfume.usage}
            </p>
          </div>
        </div>
        {/* Fragrance Specific FAQs Accordion */}
        <div className="!mt-16 border-t border-slate-100 !pt-12">
          <h2 className="text-xl font-bold text-[#10233b] text-center !mb-8">
            Frequently Asked Questions
          </h2>
          <div className="!mx-auto max-w-3xl space-y-6">
            {perfume.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 !pb-6">
                <h3 className="text-sm font-bold text-[#10233b]">
                  {faq.q}
                </h3>
                <p className="!mt-2 text-xs leading-6 text-slate-500">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Fragrances Collection */}
        <div className="!mt-20 border-t border-slate-100 !pt-12">
          <h2 className="text-xl font-bold text-[#10233b] text-center !mb-10">
            Explore Other London Colognes
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {relatedColognes.map((related) => (
              <div
                key={related.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/50 bg-white !p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c79a4b]/30 hover:shadow-xl"
              >
                <div>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 rounded-full bg-[#10233b]/90 backdrop-blur-md !px-2.5 !py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#c79a4b] border border-[#c79a4b]/20">
                      {related.concentration}
                    </div>
                  </div>
                  <div className="flex items-center justify-between !mt-4">
                    <h3 className="text-base font-bold text-[#10233b] group-hover:text-[#c79a4b] transition-colors">
                      {related.name}
                    </h3>
                    <div className="flex text-[#c79a4b] text-[10px]">
                      {"★".repeat(5)}
                    </div>
                  </div>
                  {related.notes && (
                    <p className="!mt-1 text-[9px] font-semibold text-[#c79a4b] tracking-wide uppercase">
                      Top Note: {related.notes.top.split(",")[0]}
                    </p>
                  )}
                  <p className="!mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
                    {related.description}
                  </p>
                </div>
                <div className="!mt-5 flex items-stretch gap-2">
                  <Link
                    to={`/london-colognes/${related.slug}`}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#10233b] to-[#1a385f] !py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:from-[#c79a4b] hover:to-[#b08337] hover:shadow-lg hover:scale-[1.02] flex items-center justify-center"
                  >
                    Scent Profile
                  </Link>
                  <a
                    href={getWhatsAppLink(related.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Enquire on WhatsApp"
                    className="flex w-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-md transition-all duration-300 hover:bg-[#20ba59] hover:shadow-lg hover:scale-[1.02] shrink-0"
                  >
                    <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.549 4.18 1.597 6.002L.057 24l6.168-1.597c1.782.96 3.774 1.597 6.002 1.597 6.626 0 12.004-5.378 12.004-12.004C24.008 5.378 18.63 0 12.004 0zm0 21.996c-1.895 0-3.71-.502-5.302-1.458l-.377-.22-3.69.96.96-3.593-.243-.388c-.996-1.596-1.523-3.447-1.523-5.302C1.83 5.922 6.398 1.83 12.004 1.83c5.602 0 10.174 4.092 10.174 10.174-.004 5.596-4.57 10.174-10.174 10.174zm5.187-7.25c-.287-.145-1.706-.842-1.97-.938-.264-.096-.456-.145-.648.145-.192.29-.744.938-.912 1.13-.168.19-.336.216-.624.072-.288-.145-1.21-.446-2.308-1.428-.854-.76-1.43-1.702-1.598-1.993-.168-.288-.016-.446.126-.588.13-.13.288-.337.432-.505.144-.168.192-.288.288-.48.096-.193.048-.363-.024-.506-.072-.145-.648-1.564-.888-2.14-.233-.564-.472-.487-.648-.496-.168-.008-.36-.008-.552-.008s-.504.072-.768.36c-.264.288-1.008.986-1.008 2.404 0 1.417 1.032 2.788 1.176 2.98.144.193 2.032 3.102 4.921 4.35.688.297 1.224.474 1.64.607.693.22 1.325.19 1.826.115.556-.083 1.706-.697 1.946-1.37.24-.67.24-1.246.168-1.37-.072-.124-.264-.196-.552-.34z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfumeDetail;
