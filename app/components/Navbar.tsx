"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAppState } from "../contexts/StateContext";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { selectedState } = useAppState();

  const segments = pathname.split("/");
  const currentLang = segments[1] || "en";

  // Active state helpers for nav links
  const isActive = (hrefPrefix: string) => {
    if (hrefPrefix === `/${currentLang}`) return pathname === hrefPrefix;
    return pathname.startsWith(hrefPrefix);
  };

  const navLinkClass = (active: boolean) =>
    `px-2 md:px-4 py-1.5 md:py-2 rounded-full transition-colors duration-200 border border-transparent text-sm md:text-base ${
      active
        ? "bg-orange-600 text-white shadow"
        : "text-gray-700 hover:bg-orange-100 hover:text-orange-700"
    }`;

  const switchLocale = (locale: string) => {
    const newSegments = [...segments];
    newSegments[1] = locale;
    router.push(newSegments.join("/"));
    setMenuOpen(false);
  };

  const closeAll = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-3 md:p-4 shadow bg-white sticky top-0 z-50">
      {/* Logo */}
      <img
        src="/images/logo.png"
        alt="Shivneri Tea Logo"
        className="h-8 md:h-10 w-auto"
      />

      {/* Desktop Nav (show from large screens to avoid overlap) */}
      <ul className="hidden lg:flex space-x-1 xl:space-x-2 font-medium items-center">
        <li>
          <Link
            href={`/${currentLang}`}
            className={navLinkClass(isActive(`/${currentLang}`))}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href={`/${currentLang}/franchise`}
            className={navLinkClass(isActive(`/${currentLang}/franchise`))}
          >
            Franchise
          </Link>
        </li>

        <li>
          <Link
            href={`/${currentLang}/materials/${selectedState.toLowerCase()}`}
            className={navLinkClass(isActive(`/${currentLang}/materials`))}
          >
            Materials
          </Link>
        </li>

        <li>
          <Link
            href={`/${currentLang}/gallery`}
            className={navLinkClass(isActive(`/${currentLang}/gallery`))}
          >
            Gallery
          </Link>
        </li>

        <li>
          <Link
            href={`/${currentLang}/contact`}
            className={navLinkClass(isActive(`/${currentLang}/contact`))}
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            href={`/${currentLang}/about`}
            className={navLinkClass(isActive(`/${currentLang}/about`))}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href={`/${currentLang}/documents`}
            className={navLinkClass(isActive(`/${currentLang}/documents`))}
          >
            Documents
          </Link>
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center space-x-1 md:space-x-2">
        {["mr", "hi", "en"].map((loc) => (
          <button
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`px-2 md:px-3 py-1 rounded-full font-semibold transition text-xs md:text-sm ${
              currentLang === loc
                ? "bg-orange-600 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-700"
            }`}
          >
            {loc.toUpperCase()}
          </button>
        ))}

        {/* Mobile Hamburger (visible until large screens) */}
        <button
          className="lg:hidden text-gray-700 ml-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden border-t border-gray-100">
          <ul className="flex flex-col items-center space-y-1 py-3 font-medium">
            <li>
              <Link
                href={`/${currentLang}`}
                onClick={closeAll}
                className={navLinkClass(isActive(`/${currentLang}`))}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`/${currentLang}/franchise`}
                onClick={closeAll}
                className={navLinkClass(isActive(`/${currentLang}/franchise`))}
              >
                Franchise
              </Link>
            </li>
            <li>
              <Link
                href={`/${currentLang}/materials/${selectedState.toLowerCase()}`}
                onClick={closeAll}
                className={navLinkClass(isActive(`/${currentLang}/materials`))}
              >
                Materials
              </Link>
            </li>
            <li>
              <Link
                href={`/${currentLang}/gallery`}
                onClick={closeAll}
                className={navLinkClass(isActive(`/${currentLang}/gallery`))}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href={`/${currentLang}/contact`}
                onClick={closeAll}
                className={navLinkClass(isActive(`/${currentLang}/contact`))}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={`/${currentLang}/about`}
                onClick={closeAll}
                className={navLinkClass(isActive(`/${currentLang}/about`))}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={`/${currentLang}/documents`}
                onClick={closeAll}
                className={navLinkClass(isActive(`/${currentLang}/documents`))}
              >
                Documents
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
