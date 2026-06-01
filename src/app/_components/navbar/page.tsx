"use client";
import React from 'react'
import Link from 'next/link'

import { usePathname } from "next/navigation";
import { useState } from "react";




const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Marketplace", href: "/marketPlace" },
  { label: "Wastelog", href: "/wasteLogNa" },
  
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link suppressHydrationWarning href="/" className="text-[#1a4a2e] font-extrabold text-xl tracking-tight select-none">
          NAZIF
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                suppressHydrationWarning
                  href={href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200
                    ${isActive
                      ? "text-[#1a4a2e]"
                      : "text-gray-500 hover:text-[#1a4a2e]"
                    }`}
                >
                  {label}
                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-[#1a4a2e]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
          
            href="/login"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#1a4a2e] text-white text-sm font-semibold
              hover:bg-[#153d25] active:scale-95 transition-all duration-200 shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 rounded-md hover:bg-gray-50 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[2px] w-5 bg-[#1a4a2e] rounded transition-all duration-300 origin-center
              ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-[2px] w-5 bg-[#1a4a2e] rounded transition-all duration-300
              ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-5 bg-[#1a4a2e] rounded transition-all duration-300 origin-center
              ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>


{/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}
      >
        <ul className="flex flex-col px-6 py-3 gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                suppressHydrationWarning
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150
                    ${isActive
                      ? "text-[#1a4a2e] bg-[#f0f7f3] font-semibold"
                      : "text-gray-500 hover:text-[#1a4a2e] hover:bg-gray-50"
                    }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="px-6 pb-4">
          <Link
          suppressHydrationWarning
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-full px-5 py-2.5 rounded-full bg-[#1a4a2e] text-white text-sm font-semibold
              hover:bg-[#153d25] active:scale-95 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

