import { cloudinaryAssets } from "../data/cloudinaryAssets";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] text-[#111827] !px-4 !py-6 sm:!px-6 sm:!py-10 md:!px-10 md:!py-14 lg:!px-16 lg:!py-20">
      <section className="!mx-auto flex max-w-7xl flex-col items-center text-center">
        <img
          src={cloudinaryAssets.logo}
          alt="Logo"
          className="!mb-5 w-28 sm:w-40 md:w-48"
        />
        <h1 className="!mb-3 text-2xl font-extrabold tracking-wide text-[#1E3A8A] sm:text-4xl lg:text-5xl">
          Welcome to Pinnacle Expo
        </h1>
        <p className="!mx-auto max-w-3xl text-sm leading-6 text-gray-600 sm:leading-7 sm:text-base lg:text-lg">
          Your trusted partner for global export and authorized distributorship
          of high-quality Indian & Thai rice and premium engine lubricants.
          Connecting tradition with innovation, we deliver excellence across
          borders.
        </p>

        <div className="!mt-6 flex flex-col items-center rounded-2xl border border-[var(--line)] bg-white/80 !px-4 !py-4 shadow-sm sm:flex-row sm:gap-4">
          <img
            src="/BRICS.jpg"
            alt="Verified BRICS Member"
            className=" w-26 rounded-xl object-contain shadow-sm sm:w-32 lg:w-40"
          />
          <div className="!mt-3 text-center sm:!mt-0 sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--blue)]">
              Verified BRICS Member
            </p>
            <p className="!mt-1 max-w-xl text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
              Building trusted export relationships with buyers and distributors
              across international markets.
            </p>
          </div>
        </div>
      </section>

      <section className="!mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 sm:!mt-14 sm:gap-6">
        <div className="rounded-2xl border border-violet-100 bg-white !p-4 text-center shadow-md transition hover:shadow-xl sm:!p-6">
          <h2 className="!mb-2 text-xl font-bold text-[#059669] sm:text-2xl">Our Vision</h2>
          <p className="text-sm leading-6 text-gray-600 sm:text-base">
            To be a globally admired export brand known for our uncompromising
            quality, customer-first approach, and sustainable partnerships.
          </p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white !p-4 text-center shadow-md transition hover:shadow-xl sm:!p-6">
          <h2 className="!mb-2 text-xl font-bold text-[#059669] sm:text-2xl">Our Mission</h2>
          <p className="text-sm leading-6 text-gray-600 sm:text-base">
            We aim to deliver world-class products and services that enhance
            lives and businesses across continents.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-white !p-4 text-center shadow-md transition hover:shadow-xl sm:!p-6">
          <h2 className="!mb-2 text-xl font-bold text-[#059669] sm:text-2xl">Our Values</h2>
          <p className="text-sm leading-6 text-gray-600 sm:text-base">
            Integrity, transparency, sustainability, and relentless pursuit of
            excellence are at the heart of everything we do.
          </p>
        </div>
      </section>

      <section className="!mt-14">
        <h2 className="!mb-6 text-center text-2xl font-bold text-[#1E3A8A] sm:!mb-8 sm:text-3xl">
          Why Choose Pinnacle Expo?
        </h2>
        <div className="!mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
          <ul className="space-y-4 text-sm text-gray-700 sm:text-base">
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-[#059669]">✓</span>
              <span>Direct sourcing from certified farms and manufacturers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-[#059669]">✓</span>
              <span>Export-grade packaging and international certifications</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-[#059669]">✓</span>
              <span>Timely global deliveries with top logistics support</span>
            </li>
          </ul>
          <ul className="space-y-4 text-sm text-gray-700 sm:text-base">
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-[#059669]">✓</span>
              <span>Wide range of Basmati, Thai Jasmine, and Non-Basmati Rice</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-[#059669]">✓</span>
              <span>Premium engine lubricants suitable for global markets</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg font-bold text-[#059669]">✓</span>
              <span>Dedicated support team available 24x7</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="!mt-14">
        <h2 className="!mb-6 text-center text-2xl font-bold text-[#6D28D9] sm:!mb-8 sm:text-3xl">
          Our Product Range
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          <div className="rounded-xl border border-indigo-100 bg-white !p-4 shadow hover:shadow-lg sm:!p-6">
            <h3 className="!mb-2 text-lg font-semibold text-[#1E3A8A] sm:text-xl">
              Indian Basmati Rice
            </h3>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              Aromatic, long-grain rice sourced from the fertile plains of
              Punjab and Haryana, known globally for its quality.
            </p>
          </div>
          <div className="rounded-xl border border-violet-100 bg-white !p-4 shadow hover:shadow-lg sm:!p-6">
            <h3 className="!mb-2 text-lg font-semibold text-[#1E3A8A] sm:text-xl">
              Thai Jasmine Rice
            </h3>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              Authentic jasmine rice cultivated in Thailand, known for its
              fragrance, softness, and fluffy texture.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-white !p-4 shadow hover:shadow-lg sm:!p-6">
            <h3 className="!mb-2 text-lg font-semibold text-[#1E3A8A] sm:text-xl">
              Engine Lubricants
            </h3>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              High-performance lubricants designed for industrial and automotive
              applications across global markets.
            </p>
          </div>
        </div>
      </section>

      <section className="!mx-auto !mb-6 !mt-8 max-w-3xl text-center">
        <h2 className="!mb-3 text-2xl font-bold text-[#1E3A8A] sm:!mb-4 sm:text-3xl">
          Connect With Us
        </h2>
        <p className="text-sm leading-7 text-gray-600 sm:text-base">
          Ready to build a lasting export partnership or want to become an
          authorized distributor?
          <br />
          Reach out to{" "}
          <span className="font-semibold text-[#6D28D9]">Pinnacle Expo</span>{" "}
          and let us help you grow globally.
        </p>
      </section>
    </div>
  );
};

export default About;
