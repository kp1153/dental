"use client";

const HeroSection = () => (
  <section className="bg-white text-gray-800 py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Modern Dental Care <br className="hidden md:block" />
          for a Confident Smile
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          From Clear Aligners to Implants — experience painless, advanced, and
          personalized dentistry with HP Singh Dental Clinic.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="#book"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src="/dental-hero.png"
          alt="Modern Dental Equipment"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
