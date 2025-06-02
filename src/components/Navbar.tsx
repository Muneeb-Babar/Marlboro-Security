"use client";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="https://img.freepik.com/premium-vector/simple-black-white-color-security-escort-logo_639175-1555.jpg?ga=GA1.1.437055642.1699790829&semt=ais_items_boosted&w=740" alt="logo" className="h-10 w-auto" />
          <span className="text-2xl font-semibold text-gray-800">Marlboro Security</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-base text-gray-800 hover:text-pink-600 font-medium">Home</a>
          <a href="#" className="text-base text-gray-800 hover:text-pink-600 font-medium">About Us</a>
          <a href="#" className="text-base text-gray-800 hover:text-pink-600 font-medium">Services</a>
          <a href="#" className="text-base text-gray-800 hover:text-pink-600 font-medium">Industries We Serve</a>
          <a href="#" className="text-base text-gray-800 hover:text-pink-600 font-medium">Contact Us</a>
        </div>

        {/* Phone and Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-pink-600 font-semibold text-base">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 5h12M9 3v2m6 4v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1m-6 0h6" />
            </svg>
            <span>(239)-543–217–0108</span>
          </div>
          <a href="#"
            className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-md text-base font-semibold hover:opacity-90 transition">
            Let’s Contact →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenuAlt3 className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 pt-4 pb-6 space-y-3 shadow-md">
          <a href="#" className="block text-base text-gray-800 hover:text-pink-600 font-medium">Home</a>
          <a href="#" className="block text-base text-gray-800 hover:text-pink-600 font-medium">About Us</a>
          <a href="#" className="block text-base text-gray-800 hover:text-pink-600 font-medium">Services</a>
          <a href="#" className="block text-base text-gray-800 hover:text-pink-600 font-medium">Industries We Serve</a>
          <a href="#" className="block text-base text-gray-800 hover:text-pink-600 font-medium">Contact Us</a>
          <div className="pt-2 text-pink-600 font-semibold text-base">
            <p>(239)-543–217–0108</p>
          </div>
          <a href="#"
            className="inline-block mt-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-md text-base font-semibold hover:opacity-90 transition">
            Let’s Contact →
          </a>
        </div>
      )}
    </nav>
  );
}
