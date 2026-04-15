"use client";

import { Play, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const currentPath = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-4 md:py-6 md:px-10 bg-black text-white sticky top-0 z-[100] border-b border-white/5">
      <div className="flex items-center justify-between w-full">
        {/* Logo and Brand */}
        <div className="flex items-center gap-1 md:gap-2 md:transform lg:translate-x-12 xl:translate-x-32">
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <img
              src="/logo.svg"
              alt="DevByGavin Logo"
              className="absolute w-24 h-24 md:w-40 md:h-40 max-w-none object-contain pointer-events-none"
            />
          </div>
          <span className="text-xl md:text-3xl text-[#F3FE00] font-bold z-10 translate-y-[-2px] md:translate-y-[-4px]">
            DevByGavin
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-[#F3FE00] p-2 z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link
            href="/"
            className={`${
              currentPath === "/" ? "text-white" : "text-gray-400"
            } hover:text-[#F3FE00] transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/works"
            className={`${
              currentPath === "/works" ? "text-white" : "text-gray-400"
            } hover:text-[#F3FE00] transition-colors`}
          >
            Works
          </Link>
          <Link
            href="/about"
            className={`${
              currentPath === "/about" ? "text-white" : "text-gray-400"
            } hover:text-[#F3FE00] transition-colors`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              currentPath === "/contact" ? "text-white" : "text-gray-400"
            } hover:text-[#F3FE00] transition-colors`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="flex items-center space-x-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
          >
            <span>Hire Me</span>
            <span className="bg-black text-yellow-400 rounded-full p-1">
              <Play size={12} fill="currentColor" />
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-gray-800 flex flex-col items-center space-y-6 py-8 shadow-2xl z-50">
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            href="/"
            className={`${
              currentPath === "/" ? "text-[#F3FE00]" : "text-gray-300"
            } text-lg hover:text-[#F3FE00]`}
          >
            Home
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            href="/works"
            className={`${
              currentPath === "/works" ? "text-[#F3FE00]" : "text-gray-300"
            } text-lg hover:text-[#F3FE00]`}
          >
            Works
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            href="/about"
            className={`${
              currentPath === "/about" ? "text-[#F3FE00]" : "text-gray-300"
            } text-lg hover:text-[#F3FE00]`}
          >
            About
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            href="/contact"
            className={`${
              currentPath === "/contact" ? "text-[#F3FE00]" : "text-gray-300"
            } text-lg hover:text-[#F3FE00]`}
          >
            Contact
          </Link>

          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            href="/contact"
            className="flex items-center space-x-2 bg-yellow-400 text-black px-6 py-3 mt-4 rounded-full font-bold hover:bg-yellow-300"
          >
            <span>Hire Me</span>
            <span className="bg-black text-yellow-400 rounded-full p-1.5">
              <Play size={14} fill="currentColor" />
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
}
