// src/components/FloatingSocialIcons.jsx
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FloatingSocialIcons = () => {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-3 z-50">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
        title="WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        title="Facebook"
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-pink-500 to-yellow-400 hover:opacity-90 text-white p-3 rounded-full shadow-lg transition"
        title="Instagram"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-700 hover:bg-sky-800 text-white p-3 rounded-full shadow-lg transition"
        title="LinkedIn"
      >
        <FaLinkedinIn size={20} />
      </a>
    </div>
  );
};

export default FloatingSocialIcons;
