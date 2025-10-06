"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F0A1F] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-2">
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Shivneri Tea Logo"
              className="h-8 md:h-10 w-auto"
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
            Brewing success with every cup ☕ — Empowering your franchise journey
            with simplicity and tradition.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h3>
          <ul className="space-y-1.5 md:space-y-2">
            <li><a href="/about" className="hover:text-orange-400 transition-colors text-xs md:text-sm">About Us</a></li>
            <li><a href="/team" className="hover:text-orange-400 transition-colors text-xs md:text-sm">Team</a></li>
            <li><a href="/careers" className="hover:text-orange-400 transition-colors text-xs md:text-sm">Careers</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Support</h3>
          <ul className="space-y-1.5 md:space-y-2">
            <li><a href="/faq" className="hover:text-orange-400 transition-colors text-xs md:text-sm">FAQ</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition-colors text-xs md:text-sm">Contact</a></li>
            <li><a href="/help-center" className="hover:text-orange-400 transition-colors text-xs md:text-sm">Help Center</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Legal</h3>
          <ul className="space-y-1.5 md:space-y-2">
            <li><a href="/terms" className="hover:text-orange-400 transition-colors text-xs md:text-sm">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-orange-400 transition-colors text-xs md:text-sm">Privacy Policy</a></li>
            <li><a href="/cookies" className="hover:text-orange-400 transition-colors text-xs md:text-sm">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 md:mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Shivneri Tea. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-5 text-base md:text-lg">
            <a href="#" className="hover:text-orange-400 transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-400 transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-400 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-orange-400 transition-colors"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
