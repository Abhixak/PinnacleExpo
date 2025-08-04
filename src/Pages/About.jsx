import Logo from "/logo.png";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#F9FAFB] to-[#F3F4F6] text-[#111827] !p-6 sm:!p-10 md:!p-16 lg:!p-24">
      {/* Hero Section */}
      <section className="max-w-6xl !mx-auto flex flex-col items-center text-center">
        <img src={Logo} alt="Logo" className="h-50 w-60 mb-6" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E3A8A] !mb-4 tracking-wide">
          Welcome to Pinnacle Expo
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl !mx-auto">
          Your trusted partner for global export and authorized distributorship of high-quality Indian & Thai rice and premium engine lubricants. Connecting tradition with innovation, we deliver excellence across borders.
        </p>
      </section>

      {/* Vision / Mission / Values */}
      <section className="!mt-16 grid lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition !p-6 text-center border border-violet-100">
          <h2 className="text-2xl font-bold text-[#059669] !mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To be a globally admired export brand known for our uncompromising quality, customer-first approach, and sustainable partnerships.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition !p-6 text-center border border-blue-100">
          <h2 className="text-2xl font-bold text-[#059669] !mb-2">Our Mission</h2>
          <p className="text-gray-600">
            We aim to deliver world-class products and services that enhance lives and businesses across continents.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition !p-6 text-center border border-emerald-100">
          <h2 className="text-2xl font-bold text-[#059669] !mb-2">Our Values</h2>
          <p className="text-gray-600">
            Integrity, transparency, sustainability, and relentless pursuit of excellence are at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="!mt-20">
        <h2 className="text-3xl font-bold text-center text-[#1E3A8A] !mb-8">
          Why Choose Pinnacle Expo?
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl !mx-auto">
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-[#059669] text-lg font-bold">✓</span>
              Direct sourcing from certified farms and manufacturers
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#059669] text-lg font-bold">✓</span>
              Export-grade packaging and international certifications
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#059669] text-lg font-bold">✓</span>
              Timely global deliveries with top logistics support
            </li>
          </ul>
          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3 items-start">
              <span className="text-[#059669] text-lg font-bold">✓</span>
              Wide range of Basmati, Thai Jasmine, and Non-Basmati Rice
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#059669] text-lg font-bold">✓</span>
              Premium engine lubricants suitable for global markets
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#059669] text-lg font-bold">✓</span>
              Dedicated support team available 24x7
            </li>
          </ul>
        </div>
      </section>

      {/* Product Range */}
      <section className="!mt-20">
        <h2 className="text-3xl font-bold text-center text-[#6D28D9] !mb-8">
          Our Product Range
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow hover:shadow-lg !p-6 border border-indigo-100">
            <h3 className="text-xl font-semibold text-[#1E3A8A] !mb-2">
              Indian Basmati Rice
            </h3>
            <p className="text-gray-600">
              Aromatic, long-grain rice sourced from the fertile plains of Punjab and Haryana, known globally for its quality.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg !p-6 border border-violet-100">
            <h3 className="text-xl font-semibold text-[#1E3A8A] !mb-2">
              Thai Jasmine Rice
            </h3>
            <p className="text-gray-600">
              Authentic jasmine rice cultivated in Thailand, known for its fragrance, softness, and fluffy texture.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg !p-6 border border-emerald-100">
            <h3 className="text-xl font-semibold text-[#1E3A8A] !mb-2">
              Engine Lubricants
            </h3>
            <p className="text-gray-600">
              High-performance lubricants designed for industrial and automotive applications across global markets.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="!mb-6 !mt-10 text-center max-w-3xl !mx-auto">
        <h2 className="text-3xl font-bold text-[#1E3A8A] !mb-4">
          Connect With Us
        </h2>
        <p className="text-gray-600">
          Ready to build a lasting export partnership or want to become an authorized distributor? <br />
          Reach out to <span className="text-[#6D28D9] font-semibold">Pinnacle Expo</span> and let us help you grow globally.
        </p>
      </section>
    </div>
  );
};

export default About;
