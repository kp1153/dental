"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-amber-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Title */}
        <div className="py-2 text-center text-xl font-bold tracking-wide">
          HP Singh Dental Clinic
        </div>

        {/* Divider Line */}
        <div className="border-t border-white opacity-30 mb-2" />

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-between py-3">
          {/* Mobile Toggle Button */}
          <button
            className="sm:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Menu Links */}
          <ul
            className={`w-full sm:w-auto sm:flex gap-6 text-sm font-medium ${
              isOpen ? "block" : "hidden"
            } sm:block`}
          >
            {[
              "Dental Filling",
              "Clear Aligners",
              "Scaling & Prophylaxis",
              "Teeth Whitening",
              "Acrylic Partial Denture",
              "Dental Implant",
              "Cosmetic Dentistry",
            ].map((service, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="block py-2 sm:py-0 hover:underline transition duration-200"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
