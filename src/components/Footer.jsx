// src/components/Footer.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-sky-500 mb-3">TR<span className="text-white"> ENTERPRISES</span></h2>
          <p className="text-gray-400">
            Premium packaging solutions from New Delhi. We specialize in high-quality paper, film & plastic materials to suit your needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-sky-500 transition">Home</a></li>
            <li><a href="/products" className="hover:text-sky-500 transition">Products</a></li>
            <li><a href="/about" className="hover:text-sky-500 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-sky-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-sky-500" />
              <span>New Delhi, India</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-sky-500" />
              <a href="tel:+911234567890" className="hover:text-sky-500 transition">+91 12345 67890</a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-sky-500" />
              <a href="mailto:info@trenterprises.com" className="hover:text-sky-500 transition">info@trenterprises.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-sky-500 transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition text-2xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-sky-700 transition text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TR Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
