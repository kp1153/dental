"use client";

const Footer = () => (
  <footer className="bg-gray-900 text-white text-sm py-6 mt-10">
    <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p>
        © {new Date().getFullYear()} HP Singh Dental Clinic. सर्वाधिकार
        सुरक्षित।
      </p>
      <p>
        Website by{" "}
        <span className="text-blue-400 font-medium">
          Web Developer: Kamta Prasad, 9996865069
        </span>
      </p>
    </div>
  </footer>
);

export default Footer;
