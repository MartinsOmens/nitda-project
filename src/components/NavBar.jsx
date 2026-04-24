import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Left: Logo & Title */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to={"/"} onClick={closeMenu}>
            <img
              src={assets.logo}
              alt="NIHUB logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </Link>
          <h1 className="font-semibold text-sm sm:text-lg md:text-2xl text-gray-800 truncate">
            NIHUB Events
          </h1>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/#events"
            className="bg-gray-100 text-gray-800 font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Events
          </Link>
          <Link
            to="/log-in"
            className="bg-[#7741C3] text-white font-medium py-2 px-5 rounded-full hover:bg-[#4c0ba5] transition-colors whitespace-nowrap"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <span className="text-2xl font-bold">✕</span>
          ) : (
            <span className="text-2xl font-bold">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200 animate-slideDown">
          <div className="flex flex-col items-center gap-3 py-4 px-4">
            <Link
              to="/"
              onClick={closeMenu}
              className="w-full text-center bg-gray-100 text-gray-800 font-medium py-2.5 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Events
            </Link>

            <Link
              to="/log-in"
              onClick={closeMenu}
              className="w-full text-center bg-[#7741C3] text-white font-medium py-2.5 rounded-full hover:bg-[#5a2d8f] transition-colors whitespace-nowrap"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
