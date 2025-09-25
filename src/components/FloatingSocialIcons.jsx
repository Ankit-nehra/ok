import React, { useState } from 'react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const phoneNumber = "7027625733"; // Apna WhatsApp number yahan daalein (country code + number, no + or 00)

const FloatingSocialIcons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sendMessage = () => {
    const encodedMessage = encodeURIComponent(message || "Hello, I am interested in your products.");
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener');
    setIsModalOpen(false);
    setMessage('');
  };

  return (
    <>
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-3 z-50">
        {/* WhatsApp button triggers modal */}
        <button
          onClick={openModal}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition"
          title="WhatsApp"
          aria-label="Open WhatsApp chat"
        >
          <FaWhatsapp size={20} />
        </button>

        {/* Other social icons */}
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

      {/* Modal for message input */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-80 max-w-full"
            onClick={(e) => e.stopPropagation()} // prevent closing modal on inner click
          >
            <h2 className="text-lg font-semibold mb-3">WhatsApp Message</h2>
            <textarea
              className="w-full border border-gray-300 rounded p-2 mb-4 resize-none"
              rows={4}
              placeholder="Apna message yahan type karein..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={sendMessage}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingSocialIcons;
