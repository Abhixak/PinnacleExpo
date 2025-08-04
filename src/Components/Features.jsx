import React from 'react';
import { FaGlobe, FaCheckCircle, FaHandshake, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaGlobe className="text-green-600 text-3xl" />,
    title: 'Global Reach',
    desc: 'We export premium quality products to countries all around the globe.',
  },
  {
    icon: <FaCheckCircle className="text-blue-600 text-3xl" />,
    title: 'Quality Assurance',
    desc: 'All our products go through strict quality checks before shipping.',
  },
  {
    icon: <FaHandshake className="text-yellow-600 text-3xl" />,
    title: 'Trusted Partners',
    desc: 'We collaborate with reliable suppliers and logistics partners.',
  },
  {
    icon: <FaHeadset className="text-purple-600 text-3xl" />,
    title: '24/7 Support',
    desc: 'Our dedicated support team is available around the clock to assist you.',
  },
];

const Features = () => {
  return (
    <section className="!py-4 !mt-2 bg-[#f9f9f9]">
      <div className="max-w-6xl !mx-auto !px-4">
        <h2 className="text-3xl font-bold text-center w-full text-[#005a34] !my-4 border-b-4 border-green-500 inline-block !py-2 !px-4">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 !mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white !p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="!mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold !mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
