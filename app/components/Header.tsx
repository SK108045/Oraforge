'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              OraforgeTechnologies
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="text-gray-300 hover:text-white transition">
              Services
            </a>
            <a href="#products" className="text-gray-300 hover:text-white transition">
              Products
            </a>
            <a href="#company" className="text-gray-300 hover:text-white transition">
              Company
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
              Talk to Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#services" className="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="#products" className="block text-gray-300 hover:text-white py-2">Products</a>
            <a href="#company" className="block text-gray-300 hover:text-white py-2">Company</a>
            <a href="#contact" className="block text-gray-300 hover:text-white py-2">Contact</a>
            <button className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Talk to Us
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
