import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { subject, message } = formData;

    if (!subject.trim() || !message.trim()) {
      alert("Please fill in both Subject and Message.");
      return;
    }

    // Gmail compose link
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ankitnehra7000@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // Open Gmail in new tab
    window.open(mailtoLink, '_blank');

    // Clear the form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Contact Info */}
        <div className="md:w-1/3 space-y-6 text-gray-700">
          <div className="flex items-center gap-3">
            <FiMapPin size={24} className="text-sky-500" />
            <p>New Delhi, India</p>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone size={24} className="text-sky-500" />
            <p>+91 12345 67890</p>
          </div>
          <div className="flex items-center gap-3">
            <FiMail size={24} className="text-sky-500" />
            <p>contact@trenterprises.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="md:w-2/3 space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            Send Message <FiSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
