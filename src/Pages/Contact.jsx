import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4fg130m", // replace this
        "template_5ddvi2h", // replace this
        form.current,
        "mOgr9p-U079ff5LAe" // replace this
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
    <section className="bg-white text-slate-800 min-h-screen !px-4 !py-8 sm:!px-8 md:!px-16 lg:!px-20">
      <div className="max-w-5xl !mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#005a34] !mb-2">
          Get in Touch With Us
        </h1>
        <p className="text-center text-gray-500 text-sm sm:text-base max-w-xl !mx-auto !mb-8">
          We're here to assist you with your export and distributorship needs.
          Reach out today!
        </p>

        {/* Company Info Section */}
        <div className="!mt-12 !mb-6 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#f9f9ff] rounded-2xl shadow-md !p-6 md:!p-8">
          <div>
            <h2 className="text-xl font-semibold text-[#005a34] !mb-2">
              Company Details
            </h2>
            <p className="text-gray-600">
              <strong>Name:</strong> Pinnacle Group
            </p>
            <p className="text-gray-600">
              <strong>Address:</strong> SCF 124, First Floor, Phase 11 Mohali,
              Punjab, India, 160062
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> pinnacle.chd@gmail.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +91 9216399808
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#005a34] !mb-2">
              Opening Hours
            </h2>
            <ul className="text-gray-600">
              <li>
                <strong>Monday - Sunday:</strong> 10:00 AM – 7:00 PM
              </li>
            </ul>
            <div className="mt-2">
              <h3 className="font-semibold text-gray-700">
                Distributorship Queries:
              </h3>
              <p>
                Reach out to us via phone or email for details about global
                distributorship and export partnerships.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[#f9f9ff] rounded-2xl shadow-md !p-6 md:!p-8">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full border border-gray-300 rounded-xl !px-4 !py-2 focus:outline-none focus:border-[#005a34]"
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
                  className="w-full border border-gray-300 rounded-xl !px-4 !py-2 focus:outline-none focus:border-[#005a34]"
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
                  className="w-full border border-gray-300 rounded-xl !px-4 !py-2 focus:outline-none focus:border-[#005a34]"
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
                  className="w-full border border-gray-300 rounded-xl !px-4 !py-2 focus:outline-none focus:border-[#005a34]"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#005a34] hover:bg-[#00794e] text-white font-semibold !py-2 !px-4 rounded-xl transition duration-300"
              >
                Send Message
              </button>
              {status && (
                <p className="text-sm text-center mt-2 text-green-600">{status}</p>
              )}
            </form>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.4385414839744!2d76.74534417537078!3d30.67793507461078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec0f88a2d025%3A0x7888af2f001aa06!2sPinnacle%20Group!5e0!3m2!1sen!2sin!4v1754308058516!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
