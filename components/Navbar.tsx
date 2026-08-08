"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// const navLinks = [
//   { name: "About Me", href: "/" },
//   { name: "Research", href: "/research" },

//   { name: "Publications", href: "/publications" },

//   { name: "News", href: "/news" },
//   { name: "Contact", href: "/contact" },
//   { name: "Gallery", href: "/positions" },
// ];
const navLinks = [
  { name: "About Me", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/positions" },
  { name: "Conferences & Awards", href: "/conferences-awards" },
  { name: "Skills & Experience", href: "/skills-experience" },
  { name: "Contact", href: "/contact" },



  // { name: "Blogs", href: "/blogs" },
    // { name: "People", href: "/people" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO / TITLE */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            Akash<span className="text-gray-500"> Marsalin</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-gray-900 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
