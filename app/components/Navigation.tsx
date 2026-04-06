'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Technology Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'About Us', href: '#about' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Careers', href: '#careers' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-[#0066cc]">
              Oraforge<span className="text-[#00d084]">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#1a1a1a] hover:text-[#0066cc] transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary text-sm"
            >
              Talk to Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1a1a1a] hover:text-[#0066cc]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-[#1a1a1a] hover:bg-[#f8f9fa] rounded"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 btn btn-primary text-center"
            >
              Talk to Us
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
