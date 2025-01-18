import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Section: Links */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="flex gap-6 py-2 max-sm:justify-center">
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Section: Copyright */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Hariprasath</span>.
            All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Right Section: Back to Top */}
        <div className="text-center md:text-right">
          <a
            href="#"
            className="inline-flex items-center justify-center text-gray-900 bg-[#12f7ff] px-4 py-3 rounded-md text-sm font-medium hover:bg-[#10d1d6] transition shadow-lg"
          >
            <BiUpArrowAlt size={20} className="mr-2" />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
