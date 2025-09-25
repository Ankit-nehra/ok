import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../public/assets/logo10.png'; // adjust path if needed


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-md bg-white/40 border-b border-white/30 shadow-sm px-4 md:px-12 py-3 flex justify-between items-center">
        
        {/* Logo */}
<Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="TR Enterprises Logo"
    className="h-10 w-auto object-contain"
  />
</Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          <Link to="/" className="hover:text-sky-500 transition">Home</Link>
          <Link to="/products" className="hover:text-sky-500 transition">Products</Link>
          <Link to="/about" className="hover:text-sky-500 transition">About</Link>
          <Link to="/contact" className="hover:text-sky-500 transition">Contact</Link>
        </div>

        {/* Search + Enquiry */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1.5 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
          />
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition">
            Enquiry
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-md border-t border-white/30 shadow-sm px-4 py-4">
          <div className="flex flex-col gap-4 font-medium text-gray-700">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1.5 rounded-lg border border-gray-300 bg-white/50 backdrop-blur-sm placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition">
              Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
