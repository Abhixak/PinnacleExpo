import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fg130m",
        "template_5ddvi2h",
        form.current,
        "mOgr9p-U079ff5LAe"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-white text-slate-800 !px-4 !py-6 sm:!px-6 sm:!py-10 lg:!px-8 lg:!py-12">
      <div className="!mx-auto max-w-6xl">
        <h1 className="!mt-3 text-center text-2xl font-bold text-[#005a34] sm:text-4xl">
          Get in Touch With Us
        </h1>
        <p className="!mx-auto !mb-6 max-w-2xl text-center text-sm text-gray-500 sm:!mb-8 sm:text-base">
          We're here to assist you with your export and distributorship needs.
          Reach out today!
        </p>

        <div className="!mt-10 !mb-6 grid grid-cols-1 gap-5 rounded-3xl bg-[#f9f9ff] shadow-md md:grid-cols-2 !p-4 sm:!p-6 lg:!p-8">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-[#005a34] sm:text-xl">
              Company Details
            </h2>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              <strong>Name:</strong> Pinnacle Group
            </p>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              <strong>Address:</strong> SCF 124, First Floor, Phase 11 Mohali,
              Punjab, India, 160062
            </p>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              <strong>Email:</strong> pinnacle.chd@gmail.com
            </p>
            <p className="text-sm leading-6 text-gray-600 sm:text-base">
              <strong>Phone:</strong> +91 9216399808
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-[#005a34] sm:text-xl">
              Opening Hours
            </h2>
            <ul className="text-sm leading-6 text-gray-600 sm:text-base">
              <li>
                <strong>Monday - Sunday:</strong> 10:00 AM - 7:00 PM
              </li>
            </ul>
            <div className="!mt-2">
              <h3 className="font-semibold text-gray-700">
                Distributorship Queries:
              </h3>
              <p className="text-sm leading-6 text-gray-600 sm:text-base">
                Reach out to us via phone or email for details about global
                distributorship and export partnerships.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-3xl bg-[#f9f9ff] shadow-md !p-4 sm:!p-6 lg:!p-8">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 sm:gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full rounded-xl border border-gray-300 !px-3 !py-3 text-sm focus:border-[#005a34] focus:outline-none sm:!px-4 sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full rounded-xl border border-gray-300 !px-3 !py-3 text-sm focus:border-[#005a34] focus:outline-none sm:!px-4 sm:text-base"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full rounded-xl border border-gray-300 !px-3 !py-3 text-sm focus:border-[#005a34] focus:outline-none sm:!px-4 sm:text-base"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full rounded-xl border border-gray-300 !px-3 !py-3 text-sm focus:border-[#005a34] focus:outline-none sm:!px-4 sm:text-base"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#005a34] !px-4 !py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#00794e] sm:text-base"
              >
                Send Message
              </button>
              {status && (
                <p className="!mt-2 text-center text-sm text-green-600">
                  {status}
                </p>
              )}
            </form>
          </div>

          <div className="min-h-[260px] overflow-hidden rounded-3xl shadow-md sm:min-h-[420px] lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.4348992876858!2d76.74547117527638!3d30.678037588274528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed8c11c7ac13%3A0xe6149876f9e01ad5!2sLondon%20Colognes!5e0!3m2!1sen!2sin!4v1785151380115!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
