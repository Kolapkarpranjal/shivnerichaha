"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F0A1F] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col space-y-4 col-span-2">
          <div className="flex items-center space-x-3">
          <img
        src="/images/logo.png"
        alt="Shivneri Tea Logo"
        className="h-10 w-auto"
      />
           
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Brewing success with every cup ☕ — Empowering your franchise journey
            with simplicity and tradition.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-orange-400 transition-colors">About Us</a></li>
            <li><a href="/team" className="hover:text-orange-400 transition-colors">Team</a></li>
            <li><a href="/careers" className="hover:text-orange-400 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-orange-400 transition-colors">FAQ</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            <li><a href="/help-center" className="hover:text-orange-400 transition-colors">Help Center</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</a></li>
            <li><a href="/cookies" className="hover:text-orange-400 transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shivneri Tea. All rights reserved.
          </p>
          <div className="flex gap-5 text-lg">
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
