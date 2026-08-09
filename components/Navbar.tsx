
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About Me", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Conferences & Awards", href: "/conferences-awards" },
  { name: "Skills & Experience", href: "/skills-experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="flex h-[74px] items-center justify-between">

          {/* =====================================================
              LOGO
          ====================================================== */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >

            {/* Initials */}
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#03395d] shadow-sm transition duration-300 group-hover:shadow-md">

              <div className="absolute inset-0 bg-gradient-to-br from-[#03395d] via-[#377697] to-[#6fd2d8] opacity-90" />

              <span className="relative text-sm font-bold tracking-tight text-white">
                AM
              </span>

            </div>

            {/* Name */}
            <div className="hidden leading-tight sm:block">

              <div className="text-[16px] font-bold tracking-tight text-[#03395d]">
                Akash Marsalin
              </div>

              <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#377697]">
                Ph.D. Research Scholar
              </div>

            </div>

          </Link>


          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div className="hidden items-center gap-0.5 xl:flex">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-[13px] font-medium text-slate-600 transition-all duration-200 hover:bg-[#03395d]/5 hover:text-[#03395d]"
              >

                {link.name}

                {/* Animated underline */}
                <span className="absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#377697] to-[#5df8d9] transition-transform duration-300 group-hover:scale-x-100" />

              </Link>
            ))}

          </div>


          {/* =====================================================
              MOBILE BUTTON
          ====================================================== */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#03395d] shadow-sm transition hover:border-[#6fd2d8] hover:bg-[#03395d]/5 lg:hidden"
          >
            {isOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">

          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6">

            <div className="space-y-1">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#03395d]/5 hover:text-[#03395d]"
                >

                  <span>
                    {link.name}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#6fd2d8] opacity-0 transition group-hover:opacity-100" />

                </Link>
              ))}

            </div>

          </div>

        </div>
      )}

    </nav>
  );
}

