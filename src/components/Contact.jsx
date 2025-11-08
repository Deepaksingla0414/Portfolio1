import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-br from-indigo-100 via-white to-pink-100 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1720132000141-a405eff592e9?ixlib=rb-4.1.0&auto=format&fit=crop&w=1770&q=80')",
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Title */}
        <h2 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-wide mb-12 text-center drop-shadow-lg uppercase">
          Get In Touch
        </h2>

        {/* Modern Form Container */}
        <form className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10 sm:p-14 flex flex-col space-y-8 border border-gray-200">
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-gray-50 border border-gray-300 rounded-xl px-5 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <textarea
            placeholder="Write your message here..."
            className="bg-gray-50 border border-gray-300 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 h-36 resize-none"
          ></textarea>

          <button
            type="submit"
            className="mt-6 bg-indigo-600 text-white px-10 py-4 w-full rounded-xl text-lg font-semibold shadow-md hover:bg-indigo-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg font-semibold mb-4 md:mb-0 tracking-wide">
            Deepak Singla
          </p>

          <div className="flex space-x-6 text-lg mb-4 md:mb-0">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/Deepaksingla0414?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/deepak-singla-58031b291/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:singladeepak519@gmail.com"
              className="hover:text-cyan-400 transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <p className="text-center text-sm mt-6 text-gray-400">
          📧 <a href="mailto:singladeepak519@gmail.com" className="hover:text-cyan-400">singladeepak519@gmail.com</a>
        </p>

        <p className="text-center text-sm mt-4 opacity-80">
          © 2025 Deepak Singla. All rights reserved.
        </p>
      </footer>
    </>
  );
}