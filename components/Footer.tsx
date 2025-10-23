"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-500/20 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.svg"
                alt="AlQaim Developers Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                AlQaim Developers
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming businesses through innovative digital solutions. We
              create experiences that drive growth and success.
            </p>
            <div className="flex space-x-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-200 group"
                aria-label="WhatsApp"
              >
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/alqaimdevelopers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-200 group"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={50}
                  height={50}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/alqaimdevelopers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-yellow-500/20 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 hover:border-yellow-500 transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-yellow-500">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Graphic Design",
                "Marketing",
                "Branding",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} AlQaim Developers. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
