"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-amber-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top Title */}
        <div className="py-2 text-center text-xl font-bold tracking-wide">
          Buddha Dental Clinic
        </div>

        {/* Divider Line */}
        <div className="border-t border-white opacity-30 mb-2" />

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center py-3">
          <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
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
                  className="block py-2 hover:underline transition duration-200"
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
