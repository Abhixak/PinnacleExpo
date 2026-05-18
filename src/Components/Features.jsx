import React from "react";
import { FaGlobe, FaCheckCircle, FaHandshake, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaGlobe className="text-green-600 text-3xl" />,
    title: "Global Reach",
    desc: "We export premium quality products to countries all around the globe.",
  },
  {
    icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    title: "Quality Assurance",
    desc: "All our products go through strict quality checks before shipping.",
  },
  {
    icon: <FaHandshake className="text-yellow-600 text-3xl" />,
    title: "Trusted Partners",
    desc: "We collaborate with reliable suppliers and logistics partners.",
  },
  {
    icon: <FaHeadset className="text-purple-600 text-3xl" />,
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to assist you.",
  },
];

const Features = () => {
  return (
    <section className="!py-6 bg-[#f9f9f9] sm:!py-12">
      <div className="!mx-auto max-w-7xl !px-4 sm:!px-6 lg:!px-8">
        <h2 className="!mx-auto w-fit border-b-4 border-[#661f21] !px-3 !py-2 text-center text-xl font-bold text-[#313268] sm:!px-4 sm:text-3xl">
          Why Choose Us?
        </h2>

        <div className="!mt-6 grid grid-cols-1 gap-4 sm:!mt-8 sm:grid-cols-2 xl:grid-cols-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white !p-4 text-center shadow-sm transition-all duration-300 hover:shadow-lg sm:!p-6"
            >
              <div className="!mb-3 flex justify-center">{feature.icon}</div>
              <h3 className="!mb-2 text-base font-semibold sm:text-xl">
                {feature.title}
              </h3>
              <p className="text-xs leading-5 text-gray-600 sm:text-base sm:leading-6">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
