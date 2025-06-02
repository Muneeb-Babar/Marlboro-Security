'use client';

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-gray-900 text-white py-24 px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="https://img.freepik.com/premium-vector/simple-black-white-color-security-escort-logo_639175-1555.jpg?ga=GA1.1.437055642.1699790829&semt=ais_items_boosted&w=740" alt="logo" className="h-10 w-auto" />
            <h2 className="text-xl font-semibold">Marlboro Security</h2>
          </div>
          <p className="text-sm text-gray-300">
           Marlboro Security has built a solid reputation as one of Pakistan’s most reliable and professional security services providers. With 20 years of experience in the field, we offer unmatched expertise in safeguarding life, property, and assets.
          </p>
          {/* <p className="text-sm text-gray-300 mt-4">
            Nisl viverra massa imperdiet. Dui mattis quis congue fames.
          </p> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Case</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300 mb-4">Tincidunt neque pretium lectus donec risus.</p>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-pink-500" />
              <span>New Hyde Park, NY 11040</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-pink-500" />
              <span>example@info.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-pink-500" />
              <span>333 666 0000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>© 2024 Marlboro Security. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
